// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface linkStandardToken {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool) ;
    function balanceOf(address _owner) external  returns (uint256) ;
    function transfer(address to, uint tokens) external returns (bool success);
}


abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        _status = _ENTERED;

        _;

        _status = _NOT_ENTERED;
    }
}

contract Uniswap is ReentrancyGuard
{
    using SafeMath for uint256;

    uint public totalLiquidity;
    uint public balance;
    address public owner;
    address public tokenAddress = 0xaFF4481D10270F50f203E0763e2597776068CBc5; // REPLACE WITH ACTUAL TOKEN
    linkStandardToken token;
    bool public poolInit = false;
    uint public protocolFees = 30; //in basis points i.e. divide by 10,000
    uint public tempTokenPrice = 0;
    mapping(address => uint) public liquidityBalances;
    // uint public batchLength = 5 minutes;

    constructor() 
    {
        owner = msg.sender;
        token = linkStandardToken(tokenAddress);
    }

    modifier poolInitialized()
    {
        require(poolInit);
        _;
    }

    function init(uint _tokenAmount) public payable
    {
        require(totalLiquidity == 0, "Already initialized");
        require(_tokenAmount > 0, "Token amount must be > 0");
        require(msg.value > 0, "Eth amount must be > 0");
        totalLiquidity = totalLiquidity.add(_tokenAmount);
        balance = balance.add(msg.value);
        poolInit = true;
        require(token.transferFrom(msg.sender, address(this), _tokenAmount), "Can't transfer tokens to contract");
        setTokenToEthPrice();
    }

    fallback() payable external{}
    receive() payable external{}

    // _amount - input token amount, X - input token reserve, Y- output token reserve
    function _swap(uint _amount, uint X , uint Y) public view returns (uint)
    {
        uint feesMultiplier = 10000-protocolFees;
        uint numerator = Y.mul(_amount).mul(feesMultiplier);
        uint denominator = X.add(_amount).mul(10000);
        return numerator.div(denominator);
    }


    function swapEthToToken(/*uint _inputEthAmount*/) public payable nonReentrant
    {
        // require(msg.value == _inputEthAmount);
        require(msg.value > 0, "msg.value < 0");
        balance = balance.add(msg.value);
        uint tokenAmount = _swap(msg.value, balance, token.balanceOf(address(this)));
        require(token.transfer(msg.sender, tokenAmount), "Can't transfer token to caller");
        setTokenToEthPrice();
        // emit event with final tokens transferred
    }

    function swapTokenToEth(uint _tokenAmount) public payable nonReentrant
    {
        require(_tokenAmount > 0, "_tokenAmount < 0");
        require(token.transferFrom(msg.sender, address(this), _tokenAmount), "can't transfer ERC20");
        uint ethAmount = _swap(_tokenAmount,token.balanceOf(address(this)) ,balance);
        balance = balance.sub(ethAmount);
        setTokenToEthPrice();
        payable(msg.sender).transfer(ethAmount); // transfer throws if unsuccesful
        // emit event with final eth transferred
    }

    function setTokenToEthPrice() public // set to internal later 
    {
       tempTokenPrice =  _swap(1, balance , token.balanceOf(address(this))) ;
    }

    function getTokenBalance(address _addr) public returns(uint){
        return linkStandardToken(0xaFF4481D10270F50f203E0763e2597776068CBc5).balanceOf(_addr);
    }

    function addLiquidity(uint maxTokens) payable public nonReentrant returns (uint)
    {
        require(msg.value > 0, "msg.val <= 0");
        require(totalLiquidity > 0, "totalLiquidity <= 0");
        uint tokensBalance = getTokenBalance(address(this));
        uint tokensToAdd = msg.value.mul(tokensBalance)/balance;
        require(tokensToAdd <= maxTokens , "tokensToAdd > maxTokens");
        balance= balance.add(msg.value);

        uint mintedLiquidity = msg.value.mul(totalLiquidity)/balance;
        liquidityBalances[msg.sender] = liquidityBalances[msg.sender].add(mintedLiquidity);
        totalLiquidity = totalLiquidity.add(mintedLiquidity);

        require(linkStandardToken(
            0xaFF4481D10270F50f203E0763e2597776068CBc5)
            .transferFrom(msg.sender, address(this), tokensToAdd));

        return mintedLiquidity;
    }

    function withdraw9(uint256 amount, uint minimumEth, uint minimumTokens) public
    {
        require(liquidityBalances[msg.sender] >= amount, "Liquidity Balance of msg send < amount");
        require(totalLiquidity > 0, "totalLiquidity <= 0");

        uint tokenBalance = getTokenBalance(address(this));
        uint temp = amount.mul(totalLiquidity);
        uint etherToTransfer = temp.div(balance);
        uint temp1 = amount.mul(totalLiquidity);
        uint tokensToTransfer = temp1.div(tokenBalance);

        require(minimumEth < etherToTransfer, "minimumEth >= etherToTransfer");
        require(minimumTokens < tokensToTransfer, "minimumTokens >= tokensToTransfer");

        balance = balance - etherToTransfer;
        totalLiquidity = totalLiquidity.sub(amount);
        liquidityBalances[msg.sender] = liquidityBalances[msg.sender].sub(amount);

        address payable  addr = payable(msg.sender);
        addr.transfer(etherToTransfer);
        require(linkStandardToken(
            0xaFF4481D10270F50f203E0763e2597776068CBc5)
            .transfer(msg.sender, tokensToTransfer), "Token transfer unsuccesful");
    }

}

// address : 0x318Edb8407bc022556989429EAC679F1e4001B5c
// Send 300000000000000000000 wei of WEENUS (i.e. 300 WEENUS) and 100000000000000000 wei of Eth (0.1) for init()

// 1400000,10, 3000
// 149999999999835000000

library SafeMath {
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }


    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}



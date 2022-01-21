// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface linkStandardToken {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool) ;
    function balanceOf(address _owner) external  returns (uint256) ;
    function transfer(address to, uint tokens) external returns (bool success);
}


/**
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
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
    mapping(address => uint) liquidityBalances;
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
        require(msg.value > 0);
        require(totalLiquidity > 0);
        uint tokensBalance = getTokenBalance(address(this));
        uint tokensToAdd = msg.value.mul(tokensBalance)/balance;
        require(tokensToAdd <= maxTokens);
        balance= balance.add(msg.value);

        uint mintedLiquidity = msg.value.mul(totalLiquidity)/balance;
        liquidityBalances[msg.sender] = liquidityBalances[msg.sender].add(mintedLiquidity);
        totalLiquidity = totalLiquidity.add(mintedLiquidity);

        require(linkStandardToken(
            0xaFF4481D10270F50f203E0763e2597776068CBc5)
            .transferFrom(msg.sender, address(this), tokensToAdd));

        return mintedLiquidity;
    }

    function withdraw(uint256 amount) public nonReentrant returns (uint256, uint256) 
    {
        
    }
}

// LINK address : 0x01BE23585060835E02B77ef475b0Cc51aA1e0709
// address : 0x318Edb8407bc022556989429EAC679F1e4001B5c
// Send 300000000000000000000 wei of WEENUS (i.e. 300 WEENUS) and 100000000000000000 wei of Eth (0.1) for init()



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



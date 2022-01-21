// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface linkStandardToken {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool) ;
    function balanceOf(address _owner) external  returns (uint256) ;
    function transfer(address to, uint tokens) external returns (bool success);
}

contract Uniswap{

    using SafeMath for uint256;

    uint public totalLiquidity;
    uint public balance;
    address public owner;
    address public tokenAddress = 0xaFF4481D10270F50f203E0763e2597776068CBc5; // REPLACE WITH ACTUAL TOKEN
    linkStandardToken token;
    bool public poolInit = false;
    uint public protocolFees = 30; //in basis points i.e. divide by 10,000
    uint public tempTokenPrice = 0;

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

        totalLiquidity.add(_tokenAmount);
        balance.add(msg.value);
        poolInit = true;
        balance+=msg.value;
        require(token.transferFrom(msg.sender, address(this), _tokenAmount), "Can't transfer tokens to contract");
        setTokenToEthPrice();
    }

    // _amount - input token amount, X - input token reserve, Y- output token reserve
    function _swap(uint _amount, uint X , uint Y) public view returns (uint)
    {
        uint feesMultiplier = 10000-protocolFees;
        uint numerator = Y.mul(_amount).mul(feesMultiplier);
        uint denominator = X.add(_amount).mul(10000);
        return numerator.div(denominator);
    }


    function swapEthToToken(/*uint _inputEthAmount*/) public payable 
    {
        // require(msg.value == _inputEthAmount);
        require(msg.value > 0, "msg.value < 0");
        balance.add(msg.value);
        uint tokenAmount = _swap(msg.value, balance, token.balanceOf(address(this)));
        require(token.transfer(msg.sender, tokenAmount), "Can't transfer token to caller");
        // emit event with final tokens transferred
    }

    function swapTokenToEth(uint _tokenAmount) public payable 
    {
        require(_tokenAmount > 0, "_tokenAmount < 0");
        require(token.transferFrom(msg.sender, address(this), _tokenAmount), "can't transfer ERC20");
        uint ethAmount = _swap(_tokenAmount,token.balanceOf(address(this)) ,balance);
        balance.sub(ethAmount);
        payable(msg.sender).transfer(ethAmount); // transfer throws if unsuccesful
        // emit event with final eth transferred
    }

    function setTokenToEthPrice() public 
    {
       tempTokenPrice =  _swap(1, balance , token.balanceOf(address(this))) ;
    }

    function getTokenBalance(address _addr) public returns(uint){
        return linkStandardToken(0xaFF4481D10270F50f203E0763e2597776068CBc5).balanceOf(_addr);
    }
}

// LINK address : 0x01BE23585060835E02B77ef475b0Cc51aA1e0709
// address : 0x318Edb8407bc022556989429EAC679F1e4001B5c
// 1 WEENUS = 0.007674 
// Send 300000000000000000000 wei of WEENUS (i.e. 300 WEENUS) and 100000000000000000 wei of Eth (0.1) for init()



library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the substraction of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
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

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
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

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
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

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting with custom message when dividing by zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryMod}.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
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


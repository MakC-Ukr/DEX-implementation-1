import React from "react";
import Uniswap from "../ethereum/uniswap";
import "semantic-ui-css/semantic.min.css";
import web3 from "../ethereum/web3";
import {
  Form,
  Button,
  Input,
  Message,
  Divider,
  Label,
  Icon,
  Segment,
} from "semantic-ui-react";
import { FaArrowDown, FaBeer, FaShieldAlt } from "react-icons/fa";

class SwapForm extends React.Component {
    constructorconstructor(props) {
      this.onSwap = this.onSwap.bind(this);
      this.handleInputchange = this.handleInputchange.bind(this);
    }

  state = { tokenA: "0", tokenPrice: "1", ethIsTokenA: true };

  static async getInitialProps() {
    const _tokenPrice = await Uniswap.methods.tempTokenPrice().call();
    console.log(_tokenPrice);
    return { tokenPrice: _tokenPrice };
  }

  async componentDidMount() {
    const _tokenPrice = await Uniswap.methods.tempTokenPrice().call();
    console.log(_tokenPrice);
    this.setState({ tokenPrice: _tokenPrice });
  }

  handleInputchange = (event) => {
    this.setState({
      tokenA: event.target.value,
    });
  };

  render() {
    const self = this;
    // used later in form, since scope for "this" gets changed.
    // More on "https://stackoverflow.com/questions/68550323/unhandled-rejection-typeerror-this-is-undefined-when-write-this-setstatedata"
    return (
      <div>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <Form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log("Onsubmit called");
            try {
              //   console.log(self.state.tokenA);
              const accounts = await web3.eth.getAccounts();
              if (self.state.ethIsTokenA) {
                Uniswap.methods.swapEthToToken().send({
                  from: accounts[0],
                  value: web3.utils.toWei(self.state.tokenA, "ether"),
                });
              } else {
                console.log("TokenToEth Called");
                Uniswap.methods
                  .swapTokenToEth(web3.utils.toWei(self.state.tokenA, "ether"))
                  .send({
                    from: accounts[0],
                  });
              }
              console.log("succesful");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Message info>Swapping Eth to Weenus</Message>
          <Form.Field>
            <Input
              size="large"
              icon={this.state.ethIsTokenA ? "ethereum" : "wordpress"}
              placeholder="0.00"
              fluid
              value={this.state.tokenA}
              onChange={(event) => {
                this.handleInputchange(event);
              }}
            />
          </Form.Field>
          {/* <SwapFormInput ethIsTokenA = {this.state.ethIsTokenA} handleInpCh = {this.handleInputchange}/> */}

          <button
            type="button"
            onClick={(event) => {
              this.setState({ ethIsTokenA: !this.state.ethIsTokenA });
            }}
          >
            <h2>
              <FaArrowDown />
            </h2>
          </button>
          <br />
          <br />

          <Form.Field>
            <Input
              size="large"
              icon={!this.state.ethIsTokenA ? "ethereum" : "wordpress"}
              placeholder="0.00"
              fluid
              value={
                this.state.ethIsTokenA
                  ? this.state.tokenA * this.state.tokenPrice
                  : this.state.tokenA / this.state.tokenPrice
              }
            />
          </Form.Field>
          <Divider />
          <Button color="pink" fluid size="large">
            Swap
          </Button>
        </Form>
      </div>
    );
  }
}

export default SwapForm;

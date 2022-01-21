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
  Menu,
  Icon,
  Segment,
  Container,
} from "semantic-ui-react";
import { FaArrowDown, FaBeer, FaShieldAlt } from "react-icons/fa";

class SwapForm extends React.Component {
  constructorconstructor(props) {
    this.onSwap = this.onSwap.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
  }

  state = {
    tokenA: "0",
    tokenPrice: "1",
    ethIsTokenA: true,
    maxTokensApproved: "300000000000000000000",
    addingLiquidity: true
  };

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
                const accounts = await web3.eth.getAccounts();
              if(self.state.addingLiquidity)
              {
                await Uniswap.methods.addLiquidity(self.state.maxTokensApproved).send({
                    from: accounts[0],
                    value: web3.utils.toWei(self.state.tokenA, "ether"),
                  });
            }
            else
            {
                await Uniswap.methods.withdraw9(2000000, 1, 1).send({ //instead of 15k should be state.tokenA
                    from: accounts[0],
                  });
                console.log("Removing");
            }
              console.log("succesful");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Segment.Group horizontal>
            <Segment>
              <Button fluid color="black" type="button" onClick={(event) =>{
                  this.setState({addingLiquidity: true});
                  console.log(this.state.addingLiquidity);
                  }}>
                Add
              </Button>
            </Segment>
            <Segment>
              <Button fluid color="black" type="button" onClick={(event) =>{
                  this.setState({addingLiquidity: false});
                  console.log(this.state.addingLiquidity);
                  }}>
                Remove
              </Button>
            </Segment>
          </Segment.Group>

          <Form.Field>
            <Input
              size="large"
              icon={"ethereum"}
              placeholder="0.00"
              fluid
              value={this.state.tokenA}
              onChange={(event) => {
                this.handleInputchange(event);
              }}
            />
          </Form.Field>

          <button type="button" >
            <h2>
              <FaArrowDown />
            </h2>
          </button>
          <br />
          <br />

          <Form.Field>
            <Input
              size="large"
              icon={"wordpress"}
              placeholder="0.00"
              fluid
              value={this.state.tokenA * this.state.tokenPrice}
            />
          </Form.Field>
          <Divider />
          <Button color="pink" fluid size="large">
            { this.state.addingLiquidity ? "Add Liquidity" : "Remove Liquidity"}
          </Button>
        </Form>
      </div>
    );
  }
}

export default SwapForm;

import React, { Component } from "react";
import Uniswap from "../ethereum/uniswap";
import "semantic-ui-css/semantic.min.css";
import web3 from "../ethereum/web3";
import SwapForm from "../components/SwapForm";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Image,
  // Menu,
  Input,
  Icon,
  Message,
  Divider,
  TextArea,
  Segment,
  Card,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import LiquidityForm from '../components/LiquidityForm';

class Liquidity extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home", tokenPrice: "1", address: "" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  static async getInitialProps() {
    const _addr = await Uniswap.methods.owner().call();
    const _tokenPrice = await Uniswap.methods.tempTokenPrice().call();
    const _latestGasPrice = await web3.eth.getGasPrice();
    return {
      address: _addr,
      tokenPrice: _tokenPrice,
      latestGasPrice: _latestGasPrice,
    };
  }

  async componentDidMount() {
    this.setState({
      tokenPrice: this.props.tokenPrice,
      latestGasPrice: web3.utils.fromWei(this.props.latestGasPrice, "gwei"),
    }); // sets the tokenPrice in state from this.props
  }

  render() {
    return (
      <Layout
        act={this.state.activeItem}
        handleItemClick={this.handleItemClick}
        latestGasPrice={this.state.latestGasPrice}
      >
        <div>
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
          <Grid
            textAlign="center"
            style={{ height: "70vh" }}
            verticalAlign="middle"
            color="pink"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment>
                <LiquidityForm />
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default Liquidity;

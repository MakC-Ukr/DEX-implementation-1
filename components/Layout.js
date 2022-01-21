import React from "react";
import {
  Segment,
  Container,
  Menu,
  Button,
  Label,
  TextBox,
} from "semantic-ui-react";
import { Link, Router } from "../routes";

// remember to pass latestrGasPrice as props

export const def = (props) => {
  return (
    <div>
      <Container text>
        <Menu>
          <Label >
            <Link route="/">
              <a>Swap</a>
            </Link>
          </Label>
          <Label>
            <Link route="/liquidity">
              <a>Liquidity</a>
            </Link>
          </Label>

          <Button fluid compact basic>
            <a href="https://rinkeby.etherscan.io/address/0x8466a2dD936727FDaF7014477d1888910606f24d">
              Contract: 0x8466a2dD936727FDaF7014477d1888910606f24d
            </a>
          </Button>
        </Menu>
      </Container>
      /{props.children}
      <Segment floated="right">
        <Label color="green">Gas : {props.latestGasPrice} gwei </Label>
      </Segment>
    </div>
  );
};

export default def;

// add functionality for gas label to change color based on gas

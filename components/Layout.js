import React from "react";
import {Segment, Container, Menu, Button,Label, TextBox } from "semantic-ui-react";

// remember to pass latestrGasPrice as props

export const def =  (props)=>{
  return (
  <div>
    <Container text>
     <Menu >
          <Menu.Item
            name='Swap'
            active={props.act === 'Swap'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name='Liquidity'
            active={props.act === 'Liquidity'}
            onClick={props.handleItemClick}
          />
            <Button fluid compact basic  >
              <a href="https://rinkeby.etherscan.io/address/0xF56efC2E2eD9770482c690377c8F4E137Df268DA">
                Contract: 0xF56efC2E2eD9770482c690377c8F4E137Df268DA
              </a>
            </Button>
        </Menu>
      </Container>/
    {props.children}
    <Segment floated='right'>
      <Label color = "green">Gas : {props.latestGasPrice} gwei </Label>
      <TextBox>Constant gas price will be displayed since the application is on a test network(Rinkeby)</TextBox>
    </Segment>
  </div>
  );
};

export default def;

// add functionality for gas label to change color based on gas
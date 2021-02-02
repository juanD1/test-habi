import React from "react";
import Button from "components/common/Button";
import { Wrapper } from "styles/globalStyles";
import { StyledSubTitle, LabelContainer, StyledLabel } from "./styles";

const ToppingSelect = (props: any) => (
  <Wrapper
    margin="16px"
    padding="24px"
    borderRadius="16px"
    backgroundColor="#fff"
  >
    <StyledSubTitle>TICKET</StyledSubTitle>
    <LabelContainer>
      <StyledLabel>pizza:</StyledLabel>
      <StyledLabel>{props.name}</StyledLabel>
    </LabelContainer>
    <StyledLabel>toppings:</StyledLabel>
    <ul>
      {props.toppings.map((topping: string) => (
        <li>{topping}</li>
      ))}
    </ul>
    <LabelContainer>
      <StyledLabel>price:</StyledLabel>
      <StyledLabel> $ {props.price}</StyledLabel>
    </LabelContainer>
    <Button
      title="Process Buy"
      margin="16px auto"
      handleOnClik={props.action}
    />
  </Wrapper>
);

export default ToppingSelect;

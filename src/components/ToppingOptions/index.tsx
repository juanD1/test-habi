import React from "react";
import { Topping } from "types/topping";
import { StyledLi, StyledCheck, StyledLable, StyledSpan } from "./styles";

const ToppingOptions = ({ name, price }: Topping) => (
  <StyledLi>
    <StyledCheck className="topping-input" type="checkbox" id={name} />
    <StyledLable htmlFor={name}>
      <StyledSpan>{name}</StyledSpan>
    </StyledLable>
  </StyledLi>
);

export default ToppingOptions;

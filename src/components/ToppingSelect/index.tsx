import React from "react";
import ToppingOption from "components/ToppingOptions";
import { toppingOptions } from "constants/toppings";
import { Topping } from "types/topping";
import { Wrapper } from "styles/globalStyles";
import { StyledTitle, StyledParagraph, StyledUl } from "./styles";

type Props = {
  handleToppingOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ToppingSelect = (props: Props) => (
  <Wrapper
    margin="16px"
    padding="24px"
    borderRadius="16px"
    backgroundColor="#fff"
  >
    <StyledTitle>select toppings</StyledTitle>
    <StyledParagraph>
      Be careful! chicken charged at $5.000, pepperoni charged at $4.500 and the
      rest of toppings charget at $3.000 each
    </StyledParagraph>
    <StyledUl onClick={props.handleToppingOptionClick}>
      {toppingOptions.map(({ name, price }: Topping) => (
        <ToppingOption key={`key_${name}`} name={name} price={price} />
      ))}
    </StyledUl>
  </Wrapper>
);

export default ToppingSelect;

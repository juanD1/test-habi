import React from "react";
import { StyledTitle, StyledParagraph } from "components/ToppingSelect/styles";
import { toppingOptions } from "constants/toppings";
import { Topping } from "types/topping";
import { Wrapper } from "styles/globalStyles";

type Props = {
  // handleToppingOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PaymentInfo = (props: Props) => (
  <Wrapper
    margin="16px"
    padding="24px"
    borderRadius="16px"
    backgroundColor="#fff"
  >
    <StyledTitle>payment info</StyledTitle>
    <StyledParagraph>
      please fill this fields to make your order
    </StyledParagraph>
  </Wrapper>
);

export default PaymentInfo;

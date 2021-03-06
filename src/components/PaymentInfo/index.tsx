import React from "react";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { StyledTitle, StyledParagraph } from "components/ToppingSelect/styles";

import { colors, Wrapper } from "styles/globalStyles";
import { StyledSpan } from "./styles";

type Props = {
  userName: string | null;
  phone: string | null;
  name: string;
  toppings: string[];
  price: number;
  handleSubmit: () => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          style={{ margin: "24px", color: colors.primary }}
          id={"userName"}
          label="User Name"
          disabled
          value={props.userName}
          handleOnChange={props.handleOnChange}
        />
        <Input
          style={{ margin: "24px", color: colors.primary }}
          id="phone"
          label="Phone"
          value={props.phone}
          handleOnChange={props.handleOnChange}
        />
      </div>

      <StyledSpan>Product: Pizza {props.name}</StyledSpan>
      <StyledSpan>Toppings: </StyledSpan>
      <ul style={{ listStyleType: "none", textAlign: "center" }}>
        {props.toppings.map((topping: string) => (
          <li key={`key_${topping}`}>{topping}</li>
        ))}
      </ul>
      <StyledSpan>Price: $ {props.price}</StyledSpan>
    </Wrapper>
    <Button
      disabled={!(props.userName && props.phone)}
      title="Make Order"
      margin="16px auto"
      handleOnClik={props.handleSubmit}
    />
  </Wrapper>
);

export default PaymentInfo;

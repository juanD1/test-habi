import React from "react";
import { StyledButton } from "./styles";

export type Props = {
  title: string;
  display?: string;
  margin?: string;
  disabled?: boolean;
  handleOnClik: () => void;
};

const Button = ({ display, margin, title, disabled, handleOnClik }: Props) => (
  <StyledButton
    disabled={disabled}
    display={display}
    margin={margin}
    onClick={handleOnClik}
  >
    {title}
  </StyledButton>
);

export default Button;

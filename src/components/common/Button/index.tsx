import React from "react";
import { StyledButton } from "./styles";

export type Props = {
  title: string;
  display?: string;
  margin?: string;
  handleOnClik: () => void;
};

const Button = ({ display, margin, title, handleOnClik }: Props) => (
  <StyledButton display={display} margin={margin} onClick={handleOnClik}>
    {title}
  </StyledButton>
);

export default Button;

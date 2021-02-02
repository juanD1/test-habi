import React from "react";
import { Container, CustomSpinner } from "./styles";

export type Props = {
  visible?: boolean;
  color: string;
  size?: number;
  speed?: number;
};

const Spinner = ({ visible, color, size, speed }: Props) => (
  <>
    {visible && (
      <Container>
        <CustomSpinner color={color} size={size} speed={speed} />
      </Container>
    )}
  </>
);
export default Spinner;

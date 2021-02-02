import styled from "styled-components";
import { colors } from "styles/globalStyles";

type Props = {
  display?: string;
  margin?: string;
};

export const StyledButton = styled.button<Props>`
  display: ${(props) => (props.display ? props.display : "block")};
  margin: ${(props) => props.margin && props.margin};
  border: 1px solid transparent;
  padding: 8px;
  border-radius: 10px;
  color: #fff;
  background-color: ${colors.secondary};
`;

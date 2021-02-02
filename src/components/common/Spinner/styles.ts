import styled, { keyframes } from "styled-components";
import { Props as SpinnerProps } from "./index";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CustomSpinner = styled.div<SpinnerProps>`
  border: ${(props) =>
      props.size ? `${props.size - props.size * 0.85}px` : "5px"}
    solid transparent;
  border-top: ${(props) =>
      props.size ? `${props.size - props.size * 0.85}px` : "5px"}
    solid ${(props) => (props.color ? props.color : "#fff")};
  border-radius: 50%;
  width: ${(props) => (props.size ? `${props.size}px` : "25px")};
  height: ${(props) => (props.size ? `${props.size}px` : "25px")};
  animation: ${spin} ${(props) => (props.speed ? `${props.speed}s` : "0.6s")}
    linear infinite;
`;

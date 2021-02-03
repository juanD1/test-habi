import styled from "styled-components";

type ContainerProps = {
  margin?: string;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  background-color: transparent;
  margin: ${(props) => (props.margin ? props.margin : "0px 30px")};
`;

export const CustomInput = styled.input`
  padding: 5px;
  display: block;
  width: ${(props) => (props.width ? `${props.width}px` : "64vw")};
  border: none;
  border-bottom: 1px solid ${(props) => (props.color ? props.color : "#757575")};
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.color ? props.color : "#757575")};
  }

  &:-webkit-autofill,
  -webkit-autofill:focus,
  -webkit-autofill:hover,
  -webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${(props) =>
      props.color ? props.color : "#757575"} !important;
  }
`;

export const CustomLabel = styled.label`
  color: ${(props) => (props.color ? props.color : "#5264ae")};
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;

  ${CustomInput}:focus ~ &, ${CustomInput}:valid ~ &, ${CustomInput}:disabled ~ & {
    top: -15px;
    font-size: 12px;
  }
`;

type CustomBarProps = {
  width?: number;
};

export const CustomBar = styled.span<CustomBarProps>`
  position: relative;
  display: block;
  width: ${(props) => (props.width ? `${props.width + 15}px` : "auto")};

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: ${(props) => (props.color ? props.color : "#5264ae")};
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }

  ${CustomInput}:focus ~ &:before, ${CustomInput}:focus ~ &:after {
    width: 50%;
  }
`;

import styled from "styled-components";
import { colors } from "styles/globalStyles";

export const StyledLi = styled.li`
  position: relative;
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0px;
  }
`;

export const StyledLable = styled.label`
  position: relative;
  display: block;
  font-size: 20px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  padding: 20px 60px 20px 80px;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  overflow: hidden;
`;

export const StyledSpan = styled.span`
  margin-right: 10px;
`;

export const StyledCheck = styled.input`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  background-color: #fff;
  margin: 0;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  :checked {
    background-color: #fff;
    color: red;
  }

  :checked:focus {
    outline-color: "#fff";
  }

  :checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scaleUp 120ms linear forwards;
  }

  :checked + ${StyledLable} {
    color: #fff;
    background-color: ${colors.primary};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }

  :checked + ${StyledLi} {
    background-color: ${colors.primary};
  }
`;

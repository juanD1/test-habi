import styled from "styled-components";

type WrapperProps = {
  ref: any;
  display?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => props.display && props.display};
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: #000;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  overflow: hidden;
  position: absolute;
  right: 8px;
  top: 62px;
  padding: 10px 15px;
  float: right;
`;

export const WrapperUserInfo = styled.div`
  display: inline-block;
  padding: 20px 0;
`;

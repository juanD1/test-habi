import React from "react";
import AccountManager from "components/AccountManager";
import { StyledHeader } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <AccountManager />
    </StyledHeader>
  );
};

export default Header;

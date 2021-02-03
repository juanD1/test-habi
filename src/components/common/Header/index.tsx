import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
import AccountManager from "components/AccountManager";
import Icon from "components/common/Icon";
import { AuthContext } from "context/AuthContext";
import { CurrentUser } from "types/users";
import { StyledHeader } from "./styles";
import { colors } from "styles/globalStyles";

const Header: React.FC = () => {
  const authUser: CurrentUser = useContext(AuthContext);
  const history = useHistory();

  return (
    <StyledHeader>
      {authUser.providerId !== "password" && (
        <Icon
          style={{ float: "left", margin: 16 }}
          icon={faHome}
          color={colors.primary}
          size="lg"
          onClick={() => history.push("/")}
        />
      )}
      {authUser.providerId !== "password" && (
        <Icon
          style={{ float: "left", margin: 16 }}
          icon={faList}
          color={colors.primary}
          size="lg"
          onClick={() => history.push("my-orders")}
        />
      )}
      <AccountManager />
    </StyledHeader>
  );
};

export default Header;

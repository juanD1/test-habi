import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  app,
  emailPassword,
  googleAuthProvider,
  facebookAuthProvider,
} from "firebase/config";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/common/Icon";
import { AuthContext } from "context/AuthContext";
import { CurrentUser } from "types/users";
import { colors } from "styles/globalStyles";
import { StyledContainer } from "./styles";

const Login: React.FC<RouteComponentProps> = (props) => {
  const authUser: CurrentUser = useContext(AuthContext);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [emailPassword, googleAuthProvider, facebookAuthProvider],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        props.history.replace("/home");
        return false;
      },
    },
  };

  if (authUser) {
    props.history.push("/home");
  }

  return (
    <StyledContainer>
      <Icon
        icon={faPizzaSlice}
        style={{ margin: "64px 0" }}
        size="8x"
        color={colors.primary}
      />
      <h1 className="mb-4">Welcome to Scx's Pizza</h1>
      <p className="mb-4">
        Here you can select premium ingredients and we will prepare with love
        your dream pizza
      </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
    </StyledContainer>
  );
};

export default Login;

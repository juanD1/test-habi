/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { CurrentUser } from "types/users";
import DashboardAdmin from "./Elements/DashboardAdmin";
import HomeUser from "./Elements/HomeUser";

const Home = (props: RouteComponentProps) => {
  const authUser: CurrentUser = useContext(AuthContext);

  if (authUser.providerId === "password") {
    return <DashboardAdmin {...props} />;
  } else {
    return <HomeUser {...props} />;
  }
};

export default Home;

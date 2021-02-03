import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "components/common/Layout";
import OrdersList from "components/OrdersList";
import { getByUserName } from "utils/db";
import { AuthContext } from "context/AuthContext";
import { CurrentUser } from "types/users";

const DashboardAdmin = (props: RouteComponentProps) => {
  const authUser: CurrentUser = useContext(AuthContext);

  const handleGetOrders = async () => {
    const gotOrders: any = await getByUserName(authUser);
    return gotOrders;
  };

  return (
    <Layout>
      <OrdersList
        title="My Orders"
        filterBy="pizza"
        placeholder="search by pizza name"
        handleGetOrders={handleGetOrders}
      />
    </Layout>
  );
};

export default DashboardAdmin;

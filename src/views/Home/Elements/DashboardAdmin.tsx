import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "components/common/Layout";
import OrdersList from "components/OrdersList";
import { get } from "utils/db";

const DashboardAdmin = (props: RouteComponentProps) => {
  const handleGetOrders = async () => {
    const gotOrders: any = await get();
    return gotOrders;
  };

  return (
    <Layout>
      <OrdersList
        title="My Sellings"
        placeholder="search by user name"
        handleGetOrders={handleGetOrders}
      />
    </Layout>
  );
};

export default DashboardAdmin;

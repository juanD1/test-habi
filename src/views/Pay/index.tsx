import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "components/common/Layout";
import PaymentInfo from "components/PaymentInfo";
import { CurrentUser } from "types/users";
import { AuthContext } from "context/AuthContext";

const Pay = (props: RouteComponentProps) => {
  const { state: params }: any = props.location;
  const authUser: CurrentUser = useContext(AuthContext);
  const [userName, setUserName] = useState<string | null>(authUser.displayName);
  const [phone, setPhone] = useState<string | null>(authUser.phoneNumber);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userName") setUserName(value);
    if (id === "phone") setPhone(value);
  };

  const handleSubmit = () => {
    const payload = {
      date: new Date().toISOString(),
      userName,
      phone,
      pizzaName: params.name,
      toppings: params.toppings,
      price: params.price,
    };
    console.log("handle Submit: ", payload);
  };

  return (
    <Layout>
      <PaymentInfo
        userName={userName}
        phone={phone}
        name={params.name}
        price={params.price}
        toppings={params.toppings}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default Pay;

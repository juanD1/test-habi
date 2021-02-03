import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "components/common/Layout";
import PaymentInfo from "components/PaymentInfo";
import { CurrentUser } from "types/users";
import { AuthContext } from "context/AuthContext";
import { add } from "utils/db";
import { colors } from "styles/globalStyles";

const Pay = (props: RouteComponentProps) => {
  const { state: params }: any = props.location;
  const authUser: CurrentUser = useContext(AuthContext);
  const [userName, setUserName] = useState<string>(authUser.displayName || "");
  const [phone, setPhone] = useState<string>(authUser.phoneNumber || "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userName") setUserName(value);
    if (id === "phone") setPhone(value);
  };

  const submitCallback = () => {
    Swal.fire({
      icon: "success",
      title: "Generated Order!",
      text: "We goin to prepare your dream pizza!",
      confirmButtonColor: colors.secondary,
    }).then((result) => props.history.push("/"));
  };

  const handleSubmit = async () => {
    const payload = {
      date: new Date().toISOString(),
      userName,
      phone,
      pizzaName: params.name,
      toppings: params.toppings,
      price: params.price,
    };

    await add(payload, submitCallback);
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

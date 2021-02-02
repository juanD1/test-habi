/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "components/common/Layout";
import PaymentInfo from "components/PaymentInfo";

const Pay = (props: RouteComponentProps) => {
  //   const [toppings, setTopping] = useState<SelectedToppings>([]);
  //   const [name, setName] = useState<string>("");
  //   const [price, setPrice] = useState<number>(0);

  //   useEffect(() => {
  //     getName();
  //     getPrice();
  //   }, [toppings]);

  //   const handleToppingOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.className.includes("topping-input")) {
  //       const selectedTopping = e.target.id;

  //       toppings.includes(selectedTopping)
  //         ? setTopping((prevState: SelectedToppings) =>
  //             prevState.filter((topping: string) => topping !== selectedTopping)
  //           )
  //         : setTopping((prevState: SelectedToppings) => [
  //             ...prevState,
  //             selectedTopping,
  //           ]);
  //     }
  //   };

  //   const getName = () => {
  //     const name = pizzaNameCase(toppings);
  //     setName(name);
  //   };

  //   const getPrice = () => {
  //     let filterToppings: Array<Topping> = [];

  //     toppings.forEach((value: string) => {
  //       toppingOptions.filter((option: Topping, i: number) => {
  //         if (option.name === value) filterToppings.push(option);
  //       });
  //     });

  //     const price: number = filterToppings.reduce<number>(
  //       (accum, value) => accum + value.price,
  //       0
  //     );

  //     const totalPrice: number = BASE_PRICE + price;
  //     setPrice(totalPrice);
  //   };

  //   const handleProcessPay = () => {
  //     props.history.push("/pay", { name, price });
  //   };

  return (
    <Layout>
      <PaymentInfo />
    </Layout>
  );
};

export default Pay;

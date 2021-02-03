import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "components/common/Layout";
import { get } from "utils/db";
import { Order } from "types/order";
import { Wrapper } from "styles/globalStyles";

const Home = (props: RouteComponentProps) => {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const gotOrders: any = await get();
    setOrders(gotOrders);
  };

  const getTotalSellings = () => {
    const price: number = orders.reduce<number>(
      (accum, value) => accum + value.price,
      0
    );
    return price;
  };

  return (
    <Layout>
      <Wrapper
        margin="16px"
        padding="24px"
        borderRadius="16px"
        backgroundColor="#fff"
      >
        <div className="table-responsive">
          <table className="table align-middle">
            <caption>Total Sellings: {getTotalSellings()}</caption>
            <thead className="table align-middle">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Phone</th>
                <th scope="col">Pizza Name</th>
                <th scope="col">Toppings</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order: Order, i) => (
                  <tr key={`key_${i}_${order.date}`}>
                    <th scope="row">{i}</th>
                    <td>{order.userName}</td>
                    <td>{order.phone}</td>
                    <td>{order.pizzaName}</td>
                    <td>
                      <ul>
                        {order.toppings.map((value: string, i: number) => (
                          <li key={`key_${i}_${value}`}>{value}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{new Date(order.date).toLocaleString()}</td>
                    <td>{order.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Home;

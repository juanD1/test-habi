import React, { useEffect, useState } from "react";
import Search from "components/Search";
import { Order } from "types/order";
import { Wrapper } from "styles/globalStyles";

type Props = {
  handleGetOrders: () => void;
  filterBy?: string;
  placeholder: string;
  title: string;
};

const OrdesList = ({
  title,
  filterBy,
  placeholder,
  handleGetOrders,
}: Props) => {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [filter, setFilter] = useState<string>("");
  let results;

  if (!filter) {
    results = orders;
  } else {
    if (filterBy === "pizza") {
      console.log("dentro de pizaa?");
      results = orders.filter((order) => order.pizzaName.includes(filter));
    } else {
      results = orders.filter((order) => order.userName.includes(filter));
    }
  }

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOrders = async () => {
    const gotOrders: any = await handleGetOrders();
    setOrders(gotOrders);
  };

  const getTotalSellings = () => {
    const price: number = orders.reduce<number>(
      (accum, value) => accum + value.price,
      0
    );
    return price;
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <Wrapper
      margin="16px"
      padding="24px"
      borderRadius="16px"
      backgroundColor="#fff"
    >
      <h1 style={{ margin: "24px auto" }}>{title}</h1>
      <Search
        filter={filter}
        placeholder={placeholder}
        handleOnChange={handleOnSearch}
      />
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
            {results &&
              results.map((order: Order, i) => (
                <tr key={`key_${i}_${order.date}`}>
                  <th scope="row">{i + 1}</th>
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
  );
};

export default OrdesList;

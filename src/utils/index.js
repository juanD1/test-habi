import { PIZZA, PIZZA_BY_TOPPINGS } from "constants/pizzas";

export const pizzaNameCase = (currentToppings, isChecked) => {
  Object.keys(PIZZA_BY_TOPPINGS).map((value) => {
    const arrayToppingsd = PIZZA_BY_TOPPINGS[`${value}`];
    const isExist = arrayToppingsd.includes(currentToppings);
    if (isExist && isChecked) {
      PIZZA[value][1] = PIZZA[value][1] + 1;
    } else if (isExist && !isChecked) {
      PIZZA[value][1] = PIZZA[value][1] - 1;
    }
  });

  const orderArray = Object.values(PIZZA).sort((a, b) => a[1] - b[1]);
  const pizzaName = orderArray[orderArray.length - 1];
  return pizzaName[0];
};

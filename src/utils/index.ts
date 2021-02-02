import { TOPPING } from "constants/toppings";
import { PIZZA } from "constants/pizzas";

export const pizzaNameCase = (toppings: any) => {
  let pizzaName: string = PIZZA.FROM_HOUSE;
  if (toppings.includes(TOPPING.TUNA)) pizzaName = PIZZA.TUNA;
  if (toppings.includes(TOPPING.PEPPERONI)) pizzaName = PIZZA.PEPPERONI;
  if (toppings.includes(TOPPING.TORTILLA_CHIPS)) pizzaName = PIZZA.MEXICAN;
  if (toppings.includes(TOPPING.PORK)) pizzaName = PIZZA.PORK;
  if (toppings.includes(TOPPING.BEEF)) pizzaName = PIZZA.BEEF;
  if (toppings.includes(TOPPING.CORN)) pizzaName = PIZZA.CREOLE;
  if (toppings.includes(TOPPING.PINEAPPLE)) pizzaName = PIZZA.HAWAIIANA;
  if (toppings.includes(TOPPING.CHICKEN)) pizzaName = PIZZA.CHICKEN;
  if (toppings.includes(TOPPING.MUSHROOMS)) pizzaName = PIZZA.MUSHROOMS;
  if (
    toppings.includes(TOPPING.PORK) &&
    toppings.includes(TOPPING.BEEF) &&
    toppings.includes(TOPPING.CHICKEN)
  ) {
    pizzaName = PIZZA.MEATS;
  }
  if (
    toppings.includes(TOPPING.CHICKEN) &&
    toppings.includes(TOPPING.MUSHROOMS)
  ) {
    pizzaName = PIZZA.CHICKEN_MUSHROOMS;
  }
  if (
    toppings.includes(TOPPING.OREGANO) &&
    toppings.includes(TOPPING.MUSHROOMS)
  ) {
    pizzaName = PIZZA.VEGETARIAN;
  }
  return pizzaName;
};

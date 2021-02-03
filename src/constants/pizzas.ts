import { TOPPING } from "./toppings";

export let PIZZA = {
  TUNA: ["tuna", 0],
  PEPPERONI: ["pepperoni", 0],
  MEXICAN: ["mexican", 0],
  PORK: ["pork", 0],
  BEEF: ["beef", 0],
  CREOLE: ["creole", 0],
  HAWAIIANA: ["hawaiian", 0],
  MEATS: ["meats", 0],
  CHICKEN_MUSHROOMS: ["chicken with mushrooms", 0],
  CHICKEN: ["chicken", 0],
  MUSHROOMS: ["mushrooms", 0],
  VEGETARIAN: ["vegetarian", 0],
  FROM_HOUSE: ["from house", 0],
};

export const BASE_PRICE = 10000;

export const PIZZA_BY_TOPPINGS = {
  VEGETARIAN: [TOPPING.MUSHROOMS, TOPPING.OREGANO],
  MEATS: [TOPPING.BEEF, TOPPING.CHICKEN, TOPPING.PORK],
  HAWAIIANA: [TOPPING.PINEAPPLE, TOPPING.HAM],
  CHICKEN_MUSHROOMS: [TOPPING.CHICKEN, TOPPING.MUSHROOMS],
  TUNA: [TOPPING.TUNA],
  CHICKEN: [TOPPING.CHICKEN],
  PEPPERONI: [TOPPING.PEPPERONI],
  PORK: [TOPPING.PORK],
  BEEF: [TOPPING.BEEF],
  HAM: [TOPPING.HAM],
  MEXICAN: [TOPPING.TORTILLA_CHIPS],
  CREOLE: [TOPPING.CORN],
};

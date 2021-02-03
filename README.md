# MAKE YOUR PIZZA

Web Application whitch you as Admin would see your orders and total sellings and you as Costumer can prepare your dream pizza selecting every topping of its, also you will can see all your orders and total price of its.

### HEY REMEMBER!

For access as costumer you can access with your google account or facebook accout.
For access as Admin you have to select access by password and sign in using next credential:

- email: adminhabi@pizza.com
- password: A123456789j\*

### Tools

- Firebase Auth (for manage access to web application)
- Firebase Cloud Firestore (used like db)

### Libraries

- firebase: manage all about firebase
- styled-components: stylize components
- sweetalert2: show feedback modals

## OMG, HOW TO DO ID?

how to get or generate the name pizza by selected toppings?

well, my fist idea was generate and constant array with some names of pizza and meanwhile select toppings on background by validations get a name of pizza and save on another array, so we has an array with posible names to after find the most repited name on that array, but ... no works :(, so has to found another option.

THIS WORKS...

show the structure...

Everytime you select a topic sent to function the topic and a boolean value witch represent if the topic was checked or no,
function witch return the name makes this:

- make a loop for PIZZA_BY_TOPPINGS to get its key
- validate if PIZZA_BY_TOPPINGS has inside our current selected topic

make two validations...

- if current selected topic exist and is checked sum 1 to second element of PIZZA like this: ["tuna", 1]
- if current selected topic exist and DOESN't checked substract 1 to second element of PIZZA like this: ["tuna", 0]

continue...

-order te array PIZZA putting most highest value in the last position of array

- return the first position of the last element, that is our name pizza!

````json
let PIZZA = {
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
};```

```json
const PIZZA_BY_TOPPINGS = {
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
````

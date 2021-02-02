# Test-Imaginamos (Shopping Car)

## Introducción 
Este repositorio contiene un Single-page application con diseño responsive que permite agregar productos a un carrito de compras y cuenta con un modulo de Login con acceso mediante Google y Facebook.

## Instalación

* Clonar el repositorio
`git clone https://github.com/juanD1/test_imaginamos.git`.

* Instalar dependencias
`npm install`.

* Iniciar
`npm start`.

## Detalles tecnicos

### Front-end
* Responsive design.
* **_Interacción segura_**. La interaccion con el carrito de compras solo se permitira si existe una sesion de usuario activa.
* Almacenamiento de datos en localStorage con la libreria `redux-persist` para mantener la sesión del usuario activa.

### Tecnologias Usadas.

* React.js
* Redux.
    * react-persist (Almacenamiento de store en localStorage)
    * redux-logger  (Feedback en consola)
    * redux-devtools-extension  (Feedback en Redux DevTools)
* Typescript
* styled-components
* react-media
* Firebase


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

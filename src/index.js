/* Solo se aplica una vez durante el proyecto, al principio de la aplicacion. */
/* Levanta o dibuja el inicio de la aplicacion. */
/* Cosas que va a tener el index: 4 basicas;

1) La variable React en scope; seria cuando pongo el script al final del html;
2) Tener la variable ReactDOM en scope, otra libreria adicional. (para dibujar la aplicacion en el DOM);
3) Tener un elemento de React componente.(Nuestra aplicacion);
4) Tener una funcion Render corriendo.(Renderizar nuestra funcion);

Esto lo vamos a hacer mediante Imports;
*/
//1
import React from "react";
//2
import ReactDOM from "react-dom";
//3 Importo el componente de App.js. La forma que se debe escrbirir es:
import App from "./App";

import "./estilos.css";
//4
ReactDOM.render(<App/>,document.querySelector("#root"));
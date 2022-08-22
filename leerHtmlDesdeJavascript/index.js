//! crear variables que representen los selectrores de cada unos de los elementos
const h1 = document.querySelector("h1"); //? elemento sin id ni clase, para todos los h1
const p = document.querySelector("p"); //? elemento sin id ni clase, para todos los p
// const parrafito = document.querySelector(".parrafito"); // elemento con clase
// const parrafitoID = document.querySelector("#parrafitoID"); // elemnto con id
const input = document.querySelector("input"); // elemento input para todos los input
const parrafito = document.getElementsByClassName("parrafito"); //> se usa asi cuando sabemos el nombre de  class
const parrafitoID = document.getElementById("parrafitoID"); //> se usa asi cuando sabemos el nombre de  ID

//console.log((input.value = "Borrame please"));

console.log({
  h1,
  p,
  parrafito,
  parrafitoID,
  input,
});

//!h1.innerHTML = "Tux :3"; //innerHTML se considera peligroso, por inyetcion codigo html
//!lo mejor seria de esta manera
h1.innerText = "Tux :3 <br> good";
//! innerHTML deja insertar html el texto, el innetText solo deja texto

//! darle una clase a un elemento html desde js
h1.getAttribute("class"); //! Nos ayuda a leer los atrivutos que tenga nuestro elemento html
h1.setAttribute("class", "red"); //! modifica la clase, hay que decirle la clase a modificar y luego ponerle su valo

//! trabajar expesifica mente con las clases
h1.classList.add("papai"); //! agregar otra clase
h1.classList.remove("red"); //! elimina una especifica clase

//h1.classList.toggle("papai");
//h1.classList.contains("red");

//! modificar el valor del value
input.value = "001";

//! crear elementos desde javascript
const img = document.createElement("img"); //* creamos la etiqueda de imagen
img.setAttribute(
  //* definimos sus atributos, en este caso src y alt los mas importantes de img
  "src",
  "https://libertybits.org/wp-content/uploads/2018/02/in_China_1570x1415-400x400.jpg"
);
img.setAttribute("alt", "Foto de richard stallmans :3");

parrafitoID.innerHTML = ""; //* borranos el contenido de parrafo

parrafitoID.appendChild(img); //* agregamos ya la imagen a una etiqueta ya existende, en este caso p
//* con su id de parrafitoID

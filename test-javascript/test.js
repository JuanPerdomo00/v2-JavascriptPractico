//? 1
//! ¿Qué es una variable y para qué sirve?
/*
 * Una variables es una referencia a un valor, es decir un espacio en memoria donde guardamos
 * un valor con cierto tipo.
 */

//! ¿Cuál es la diferencia entre declarar e inicializar una variable?
/*
 * Declarar una variable es guardar el espcio en memoria para despues asignarle el valor.
 * Inicializar una variable es llamar la variable ya declarada y asignarle su respectivo valor.
 */

//! ¿Cuál es la diferencia entre sumar números y concatenar strings?
/*
 * En el caso de la suma, el simbolo  + significa adicionar. Es decir, sumame a y b y dame el valor de c
 * En el caso de la concatenacion, es muy diferente porque une mas no suma. LO que une se llama string y depended tambien
 * de javascript si me deje concatenar. Muchas veces pasa que quetemos sumar "1" + 1 y nos sale 11, esas cositas hay que
 * tenerlas en cuenta.
 */

//! ¿Cuál operador me permite sumar o concatenar?
/*
 * El operador de + suma para numeros  o concatenacion para strings
 */

//? 2
/* 
! Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

    Nombre -? String
    Apellido -? String
    Nombre de usuario en Platzi -? String
    Edad -? Entero
    Correo electrónico -? String
    Mayor de edad -? Boolean
    Dinero ahorrado -? decimal, float
    Deudas -? float, decimal

*/

//! Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Jakepy";
let apellido = "perdomo";
let nombreUsuarioPlatzi = "PerdomoJakepy";
let edad = 19;
let correo = "test@test.test";
let mayorEdad = edad > 18;
let dineroAhorrado = 100.0;
let deudas = (dineroAhorrado = 50.0);

// console.log(
//   `${nombre} ${apellido} ${nombreUsuarioPlatzi} ${edad} ${correo} ${mayorEdad} ${dineroAhorrado} ${deudas}`

// );

//! Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
/* 

    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas)

*/
let nombreCOmpleto = `${nombre} ${apellido}`;
let dineroReal = `${deudas}`;

console.log(`
    ${nombreCOmpleto}
    ${dineroReal}
`);

//? Funciones
//! Responde las siguientes preguntas en la sección de comentarios:
/* 

    ¿Qué es una función?
    * Una funcion es un bloque de codigo.
    ¿Cuándo me sirve usar una función en mi código?
    * Cuando el codigo tiende a ser un poco cutre, es decir feo  y repetitivo jsjs
    ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    * Los parametros son lo que recive las "variables" que esta va recivir y los argumentos es lo que le enviamos al llamarla. 
*/

//! Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función
/* 
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function saludarUser(name, lastName, nickName) {
  let completeName = `${name} ${lastName}`;
  console.log(
    `Mi nombre completo es: ${completeName} pero prefiero que me llames como: ${nickName}`
  );
}

// saludarUser("Juan Esteban", "Perdomo Santos", "Jakepy");

//? Condicionales
//!  Responde las siguientes preguntas en la sección de comentarios:
/* 

    ¿Qué es un condicional?
    * Es una sentencia de control para elegir 1  o  mas caminos logicos
    ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    * if, else if, else , swhitch
    * El condicional uf, else else if nos permite hacer validaciones completa mente distintas (si asi queremos)
    * en cada validacion o condicional. En cambio, el switch todos los cases se comparan con la misma variable o
    * condicion que definimos en el switch.
    ¿Puedo combinar funciones y condicionales?
    * Si se puede y es mas comun de lo que parece.
*/

//? Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
/* 
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/

const tipoDeSuscripcion = "expert";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("No puede entrar a platzi");
}

//? ciclos

//! Responde las siguientes preguntas en la sección de comentarios:
/* 
    ¿Qué es un ciclo?
    * Es un tipo "condicional" pues se ejecuta indefinidas veces o hasta que una condicion sea verdadera
    ¿Qué tipos de ciclos existen en JavaScript?
    * while, for, do while etc.
    ¿Qué es un ciclo infinito y por qué es un problema?
    * Un siclo infinito o infinite loop, sucede cuado no definimos bien la condicion. Es decir, no validamos muy bien.
    * Es causa problemas como desbordamiento de buffer entre otras cosas.
     ¿Puedo mezclar ciclos y condicionales?
     * Si, y ouedeb haver ciclos dentro de condicionales
*/

//! Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
/* 
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

*/

let i = 0;

while (i < 5) {
  console.log(`El valor de i es: ${i}`);
  i += 1;
}

i = 10;

while (i >= 2) {
  console.log(`El valor de i es: ${i}`);
  i -= 1;
}

/*
!3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si 
!   responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

?💡 Pista: puedes usar la función prompt de JavaScript.

*/

let j = 1;
let intentos = 5;

while (j <= intentos && j != 0) {
  let numero = Number(prompt("Cuanto es 2 + 2: "));
  if (numero === 4) {
    console.log("Felicitaciones");
    break;
  } else {
    console.log("Error, intenta nuevamente");
    console.log(`llevas ${j} jugadas`);
    j += 1;
    intentos--;
    console.log(`Tienes ${intentos} intentos`);
    if (j > intentos) {
      console.log("No mas me aburri");
    }
  }
}

// ! solucion sin tanta cosa.

let respuesta;

while (respuesta != "4") {
  let pregunta = prompt("Cuanto es 4+4: ");
  respuesta = pregunta;
}

// console.log("Fin...");

// ? Listas
//! Responde las siguientes preguntas en la sección de comentarios:
/* 

    ¿Qué es un array?
    * Un array es una colecion de indixes de diferentes tipos, ya sea int, bool, str, float. incluso otro array. (Una lista de elementos)
    * Ejemplo => [1,true,"hola", 1.0]
    ¿Qué es un objeto?
    * Un objeto es un tipo de dato que guardar una llave y un valor
    * Ejemplo => {uno:1, dos:2, tres:3}
    ¿Cuándo es mejor usar objetos o arrays?
    * Cuando tenemos una lista de cosas, es decir de productos. Usamos arrays
    * Pero un objeto es buena idea porque usamos el nombre de el producto y su precio por ejemplo.
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    *Si, de echo esto tambien es muy comun
    * Los array pueden guardar objetos, y los objetos pueden guardar array en sus propiedades
*/

let exampleArr = [0, true, "jake", 0, 1];

// ! Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function primerElemento(array) {
  return array[0];
}

// console.log(primerElemento(exampleArr));

//! Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno
//! (no se vale imprimir el array completo).

function todoElementos(array) {
  for (let x = 0; x <= array.length - 1; x++) {
    const elemento = array[x];
    console.log(elemento);
  }
  return 0;
}

// todoElementos(exampleArr);

//! Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno
//! (no se vale imprimir el objeto completo)

let myObject = {
  name: "jake",
  age: 19,
  city: "berlin",
};

function imprimirElementos(objeto) {
  let arr = [];
  let arr2 = [];

  let values = Object.values(objeto);
  let keys = Object.keys(objeto);

  for (let i = 0; i < keys.length; i++) {
    arr.push(keys[i]);
  }

  for (let j = 0; j < values.length; j++) {
    arr2.push(values[j]);
  }

  console.log(`LLaves: ${arr} values: ${arr2}`);
}

imprimirElementos(myObject);

//! Bunus y reduccion de condicionales
//! resuelta en la clase 8 del curso de javascript practico

//TODO Version de jakepys

function saberSub(subcription) {
  let sub = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puesdes tomar todos los cursos por 1 ano",
    expertDuo: "Puedes tomar todos los cursos por 1 ano, y con una persona",
  };

  // cinvirte las llaves auna lista
  let arrSub = Object.keys(sub);

  // recorro las llaves
  for (let i = 0; i < arrSub.length; i++) {
    if (arrSub[i] === subcription) {
      // ? pregunto si el string de el parameto es igual el estring de las llaves
      console.log(Object.values(sub)[i]); //? llamo la propiedad en la posicion de i, pero hay problema porque creo que esta adentro de otro array?????????
      return; //? retun nada para que termine
    }
  }
  console.log("404, I did not find"); //? en caso de false imprime esto
  return;
}

saberSub("basic");

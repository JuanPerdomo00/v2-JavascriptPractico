const cal = () => {
  const suma = input1.value + input2.value;
  resultado.innerText = `Resultado: ${suma}`;
};

const btnClick = () => {
  let numClick = 0;
  numClick = +1;
  console.log(`Numeros de click hechos ${numClick}`);
};

const input1 = document.getElementById("inputID1");
const input2 = document.getElementById("inputID2");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
//! Escuchar eventos
// una de las fotmas


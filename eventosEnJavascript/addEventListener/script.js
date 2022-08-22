const from = document.querySelector("#form");
const input1 = document.querySelector("#inputID1");
const input2 = document.querySelector("#inputID2");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

const sumarInputBalue = (event) => {
  event.preventDefault();
  const suma = input1.value + input2.value;
  resultado.innerText = `Resultado: ${suma}`;
};

const btnClick = () => {
  let numClick = 0;
  numClick = +1;
  console.log(`Numeros de click hechos ${numClick}`);
};

function enviar(event) {
  event.preventDefault();
  alert("infected with visrus wanacry");
}

form.addEventListener("mouseover", enviar);

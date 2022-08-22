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

//> Version de juandc
function funcionJuanDc(sub) {
  let tiposSub = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puesdes tomar todos los cursos por 1 ano",
    expertDuo: "Puedes tomar todos los cursos por 1 ano, y con una persona",
  };
  if (tiposSub[sub]) {
    console.log(tiposSub[sub]);
    return;
  }
  console.log(`404, no existe`);
}

funcionJuanDc("free");

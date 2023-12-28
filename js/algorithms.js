// ejercicio 1
// let counter = 0;
// [..."palindrome"].forEach((letter) => {console.log(`posicion ${counter++} es ${letter}`);})

// ejercicio 2
// function invertirCadena(palindromo) {
//   let separar = palindromo.split("");
//   let invertir = separar.reverse();
//   let unir = invertir.join("");
//   console.log(unir);
// }
// invertirCadena("no lemon, no melon");

//ejercicio 3
// function asteriscos(n){
//     console.log(Array(n) .fill("*".repeat(n))
//     .join("\n"))
// }
// asteriscos(4)

//ejercicio 4
// let mondayTem = 13;
// let thuesdayTem = 16;
// let wednesdayTem = 16;
// let thursdayTem = 14;
// let fridayTem = 13;
// let saturdayTem = 16;
// let sundayTem = 12;
// let temMedia= (mondayTem+thuesdayTem+wednesdayTem+thursdayTem+fridayTem+saturdayTem+sundayTem)/7
// console.log(temMedia.toFixed(2));

//ejercicio 5
let decision;
let options = {
  replaceChars: false,
  capitalize: false,
  replaceSpace: false,
};
let resultPrompt;
let result = [];
let loremText = "Lorem ipsum dolor sit amet";
let starTime = performance.now();
resultPrompt = prompt("Remplace chars by signs");
resultPrompt = resultPrompt.toLowerCase();
resultPrompt = prompt("Capitalize");
resultPrompt = resultPrompt.toLowerCase();
resultPrompt = prompt("Replace Space with commas");
resultPrompt = resultPrompt.toLowerCase();
options.replaceChars = result[0];
options.capitalize = result[1];
options.replaceSpace = result[2];
do {
  if (options.replaceChars == true) {
    cambiar(loremText,"1");
  } else {
  }
  if (options.capitalize == true) {
    cambiar(loremText,"2");
} else {
}
if (options.replaceSpace == true) {
      cambiar(loremText,"3");

  } else {
  }
  break;
} while (result.length < 3);
if (result >= 1 && result <= 3) {
  cambiar(loremText, result);
} else {
  alert("Error de eleccion");
}
function cambiar(cadena, eleccion) {
  let arrayCadena;
  let palabra;
  let endTime = newDate();
  switch (eleccion) {
    case "1":
      arrayCadena = cadena.split("");
      palabra = "";
      for (let index = 0; index < arrayCadena.length; index++) {}
      if (arrayCadena[index] == "a") {
        arrayCadena[index] = "@";
        palabra = palabra + arrayCadena[index];
      } else if (arrayCadena[index] == "e") {
        arrayCadena[index] = "3";
        palabra = palabra + arrayCadena[index];
      } else if (arrayCadena[index] == "i") {
        arrayCadena[index] = "1";
        palabra = palabra + arrayCadena[index];
      } else if (arrayCadena[index] == "o") {
        arrayCadena[index] = "0";
        palabra = palabra + arrayCadena[index];
      } else if (arrayCadena[index] == "s") {
        arrayCadena[index] = "$";
        palabra = palabra + arrayCadena[index];
      } else {
        palabra = palabra + arrayCadena[index];
      }
      console.log(palabra);
      break;
    case "2":
      arrayCadena = cadena.split("");
      palabra = "";
      let palabra2 = "";
      let palabra3 = "";
      for (let index = 0; index < arrayCadena.length; index++) {
        palabra = arrayCadena[index].split("");
        for (let index = 0; index < palabra.length; index++) {
          if (index == 0) {
            palabra2 = palabra[index].toUpperCase();
          } else {
            palabra2 = palabra2 + palabra[index].toString();
          }
        }
        palabra3 = palabra3 + " " + palabra2;
      }
      console.log(palabra3);
      contarCarac(loremText);
      let tiempo = performance.now() - starTime;
      console.log("Work Done in" + tiempo + "ms");
      break;
    case "3":
      arrayCadena = cadena.split("");
      palabra = "";
      for (let index = 0; index < arrayCadena.length; index++) {
        if (index == 0) {
          palabra = arrayCadena[index].toString();
        } else {
          palabra = palabra + "," + arrayCadena[index].toString();
        }
      }
      console.log(palabra);
      contarCarac(loremText);
      tiempo = performance.now() - startTime;
      console.log("Work Done in" + tiempo + "ms");
      break;
  }
}
contarCarac(loremText);
tiempo = performance.now()-startTime;
console.log("Work Done in " + tiempo + "ms");
function contarCarac(cadena) {
  let arrayCaracter = cadena.split("");
  let numCaract = arrayCaracter.length;
  let arrayPalabr = cadena.split("");
  let numPalabr = arrayPalabr.length;
  console.log(numPalabr + "Words" + numCaract + "Caracters");
}
function comprobacionRespuesta(cadena) {
  if (cadena == "y") {
    result.push(true);
  } else if (cadena == "n") {
    result.push(false);
  } else {
    alert("Respuesta no valida");
    result.push(false);
  }
}

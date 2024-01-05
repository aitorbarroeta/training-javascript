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
// let decision;
// let options = {
//   replaceChars: false,
//   capitalize: false,
//   replaceSpace: false,
// };
// let resultPrompt;
// let result = [];
// let loremText = "Lorem ipsum dolor sit amet";
// let starTime = performance.now();
// resultPrompt = prompt("Remplace chars by signs");
// resultPrompt = resultPrompt.toLowerCase();
// resultPrompt = prompt("Capitalize");
// resultPrompt = resultPrompt.toLowerCase();
// resultPrompt = prompt("Replace Space with commas");
// resultPrompt = resultPrompt.toLowerCase();
// options.replaceChars = result[0];
// options.capitalize = result[1];
// options.replaceSpace = result[2];
// do {
//   if (options.replaceChars == true) {
//     cambiar(loremText,"1");
//   } else {
//   }
//   if (options.capitalize == true) {
//     cambiar(loremText,"2");
// } else {
// }
// if (options.replaceSpace == true) {
//       cambiar(loremText,"3");

//   } else {
//   }
//   break;
// } while (result.length < 3);
// if (result >= 1 && result <= 3) {
//   cambiar(loremText, result);
// } else {
//   alert("Error de eleccion");
// }
// function cambiar(cadena, eleccion) {
//   let arrayCadena;
//   let palabra;
//   let endTime = newDate();
//   switch (eleccion) {
//     case "1":
//       arrayCadena = cadena.split("");
//       palabra = "";
//       for (let index = 0; index < arrayCadena.length; index++) {}
//       if (arrayCadena[index] == "a") {
//         arrayCadena[index] = "@";
//         palabra = palabra + arrayCadena[index];
//       } else if (arrayCadena[index] == "e") {
//         arrayCadena[index] = "3";
//         palabra = palabra + arrayCadena[index];
//       } else if (arrayCadena[index] == "i") {
//         arrayCadena[index] = "1";
//         palabra = palabra + arrayCadena[index];
//       } else if (arrayCadena[index] == "o") {
//         arrayCadena[index] = "0";
//         palabra = palabra + arrayCadena[index];
//       } else if (arrayCadena[index] == "s") {
//         arrayCadena[index] = "$";
//         palabra = palabra + arrayCadena[index];
//       } else {
//         palabra = palabra + arrayCadena[index];
//       }
//       console.log(palabra);
//       break;
//     case "2":
//       arrayCadena = cadena.split("");
//       palabra = "";
//       let palabra2 = "";
//       let palabra3 = "";
//       for (let index = 0; index < arrayCadena.length; index++) {
//         palabra = arrayCadena[index].split("");
//         for (let index = 0; index < palabra.length; index++) {
//           if (index == 0) {
//             palabra2 = palabra[index].toUpperCase();
//           } else {
//             palabra2 = palabra2 + palabra[index].toString();
//           }
//         }
//         palabra3 = palabra3 + " " + palabra2;
//       }
//       console.log(palabra3);
//       contarCarac(loremText);
//       let tiempo = performance.now() - starTime;
//       console.log("Work Done in" + tiempo + "ms");
//       break;
//     case "3":
//       arrayCadena = cadena.split("");
//       palabra = "";
//       for (let index = 0; index < arrayCadena.length; index++) {
//         if (index == 0) {
//           palabra = arrayCadena[index].toString();
//         } else {
//           palabra = palabra + "," + arrayCadena[index].toString();
//         }
//       }
//       console.log(palabra);
//       contarCarac(loremText);
//       tiempo = performance.now() - startTime;
//       console.log("Work Done in" + tiempo + "ms");
//       break;
//   }
// }
// contarCarac(loremText);
// tiempo = performance.now()-startTime;
// console.log("Work Done in " + tiempo + "ms");
// function contarCarac(cadena) {
//   let arrayCaracter = cadena.split("");
//   let numCaract = arrayCaracter.length;
//   let arrayPalabr = cadena.split("");
//   let numPalabr = arrayPalabr.length;
//   console.log(numPalabr + "Words" + numCaract + "Caracters");
// }
// function comprobacionRespuesta(cadena) {
//   if (cadena == "y") {
//     result.push(true);
//   } else if (cadena == "n") {
//     result.push(false);
//   } else {
//     alert("Respuesta no valida");
//     result.push(false);
//   }
// }

//ejercicio 6

//ejercicio 7
// function numAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let juego = numAleatorio(1, 10);
// console.log(juego);
// let result = prompt(
//   "indica un numero del 1 al 10, tendras 3 intentos mucha suerte."
// );
// if (juego != result) {
//   alert("2 tries: try again");
//   result = prompt(
//     "indica un numero del 1 al 10, tendras 2 intentos mucha suerte."
//   );
//   if (juego != result) {
//     alert("Last Attempt");
//     result = prompt(
//       "indica un numero del 1 al 10, tendras el ultimo intento, mucha suerte."
//     );
//     if (juego != result) {
//       alert("Sorry, Good luck in love");
//     } else if(juego == result){
//       alert("you win");
//     }
//   } else if(juego == result) {
//     alert("you win");
//   }
// } else if (juego == result) {
//   alert("you win");
// }

//ejercicio 8
// let sizeLength = prompt(
//   `indica el tamaño de la contraseña a generar entre 8 y 16`
// );
// let upper = prompt(`indica si quieres mayusculas con "y" o "n"`);
// let lower = prompt(`indica si quieres minusculas con "y" o "n"`);
// let number = prompt(`indica si quieres numeros con "y" o "n"`);
// let symbol = prompt(`indica si quieres simbolos con "y" o "n"`);
// if (upper == "y") {
//   upper = true;
// } else {
//   upper = false;
// }
// if (lower == "y") {
//   lower = true;
// } else {
//   lower = false;
// }
// if (number == "y") {
//   number = true;
// } else {
//   number = false;
// }
// if (symbol == "y") {
//   symbol = true;
// } else {
//   symbol = false;
// }
// switch (sizeLength) {
//   case "8":
//     sizeLength.length = 8;
//     break;
//   case "9":
//     sizeLength.length = 9;
//     break;
//   case "10":
//     sizeLength.length = 10;
//     break;
//   case "11":
//     sizeLength.length = 11;
//     break;
//   case "12":
//     sizeLength.length = 12;
//     break;
//   case "13":
//     sizeLength.length = 13;
//     break;
//   case "14":
//     sizeLength.length = 14;
//     break;
//   case "15":
//     sizeLength.length = 15;
//     break;
//   case "16":
//     sizeLength.length = 16;
//     break;
//   default:
//     break;
// }
// let passwordAll = ``;

// const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+=";

// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }
// function getRandom() {
//   return Math.floor(Math.random() * 4);
// }
// function getUpperCase() {
//   return upperLetters[getRandomNumber(upperLetters.length)];
// }
// function getLowerCase() {
//   return lowerLetters[getRandomNumber(lowerLetters.length)];
// }
// function getNumberCase() {
//   return numbers[getRandomNumber(numbers.length)];
// }
// function getSymbolCase() {
//   return symbols[getRandomNumber(symbols.length)];
// }
// function generatePw(e) {
//   passwordAll = ``;
//   if (upper == true) {
//     passwordAll += getUpperCase();
//   }
//   if (lower == true) {
//     passwordAll += getLowerCase();
//   }
//   if (number == true) {
//     passwordAll += getNumberCase();
//   }
//   if (symbol == true) {
//     passwordAll += getSymbolCase();
//   }
//   if (upper == true || lower == true || number == true || symbol == true) {
//   }
// }
// function completePw() {
//   while (passwordAll.length < sizeLength) {
//     const numberR = getRandom();
//     if (upper == true && numberR === 0) {
//       passwordAll += getUpperCase();
//     }
//     if (lower == true && numberR === 1) {
//       passwordAll += getLowerCase();
//     }
//     if (number == true && numberR === 2) {
//       passwordAll += getNumberCase();
//     }
//     if (symbol == true && numberR === 3) {
//       passwordAll += getSymbolCase();
//     }
//   }
// }
// completePw();
// alert(passwordAll);

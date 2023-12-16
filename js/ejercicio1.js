//ejercicio 1
//opcion dada por antonio que ami no me funciona
// let days = console.log(
//   new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate
// );
//opcion 2
// let hoy = new Date();
// let mes = hoy.getMonth();

// if (
//   mes == 0 ||
//   mes == 2 ||
//   mes == 4 ||
//   mes == 6 ||
//   mes == 7 ||
//   mes == 9 ||
//   mes == 11
// ) {
//   console.log("El mes tiene 31 dias");
// } else if (mes == 1) {
//   console.log("El mes tiene 28 dias");
// } else {
//   console.log("El mes tiene 30 dias");
// }

//ejercicio 2
// let month = prompt("please enter month"),toLowerCase();
// switch (month) {
//   case "enero":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;
//   case "febrero":
//     days = 28;

//     console.log("tiene 28 dias");
//     break;
//   case "marzo":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;
//   case "abril":
//     days = 30;

//     console.log("tiene 30 dias");
//     break;
//   case "mayo":
//     days = 31;
//     console.log("tiene 31 dias");
//     break;
//   case "junio":
//     days = 30;

//     console.log("tiene 30 dias");
//     break;
//   case "julio":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;
//   case "agosto":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;
//   case "septiembre":
//     days = 30;

//     console.log("tiene 30 dias");
//     break;
//   case "octubre":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;
//   case "noviembre":
//     days = 30;

//     console.log("tiene 30 dias");
//     break;
//   case "diciembre":
//     days = 31;

//     console.log("tiene 31 dias");
//     break;

//   default:
//     alert("That's not real month!");
//     break;
// }

//ejercicio 3
// let temperature = prompt("Please enter the outside temperature");

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature >= 15 && temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Please indicate a correct value");
// }

//ejercicio 4
// fallo realizado al poner una variable con nombre centinela
// y contenido isGreen y no puesto el intervalo que se lo pongo viendo la solucion
// let isGreen = true;
// let counter = 0;
// let timer = setInterval(()=>
// {if (isGreen){
//     console.log("Cross the road")
// } else {
//     console.log("Please await");

// }
// isGreen = !isGreen;
// if (counter++ == 3){
//     clearInterval(timer)
// }},3000);

//ejercicio 5
// con esta opcion el usuario tiene que indicar la temperatura que quiere convertir
// let convert = (prompt("indicar una temperatura")*9/5) + 32
// console.log(convert);
//opcion 2 vista en el video de las soluciones en clase
// let temperatura = true;
// switch (temperatura) {
//   case true:
//     console.log("absolute zero", -273.15 * 1.8 + 32);

//   case true:
//     console.log("freezing point", 0 * 1.8 + 32);
//   case true:
//     console.log("body temperature", 37 * 1.8 + 32);
//   case true:
//     console.log("boiling point", 100 * 1.8 + 32);
//     break;
//   default:
//     console.log("temperatura no recogida");
//     break;
// }

//ejercicio 6
// let email = prompt("Please enter your username")
// let password = prompt("Please enter your password")

// if (email == "tolkien@lordofrings.com"&& password == "aNBR6ZeWPY") {
//     alert("Welcome Mr.Tolkien")

// }
// else {
//     alert("Wrong password or email")

// }

//ejercicio 7
// let tipeMoney = prompt(
//   "seleciona una moneda para convertir entre dolar | yen | libras | francos"
// );
// let money = prompt("indique la cantidad a convertir");
// switch (tipeMoney) {
//   case "dolar":
//     convert = money * 1.08;
//     console.log(convert);
//     break;
//   case "yen":
//     convert = money * 156.8;
//     console.log(convert);
//     break;
//   case "libras":
//     convert = money * 0.86;
//     console.log(convert);
//     break;
//   case "francos":
//     convert = money * 0.95;
//     console.log(convert);
//     break;

//   default:
//     console.log("Language not chosen, using Spanish");
//     break;
// }

//ejercicio 8
// let num1 = prompt("indique un numero");
// let num2 = prompt("indique un segundo numero");
// let operation = prompt(
//   "indique una operacion para los numeros entre suma | resta | multiplicacion | division"
// );
// switch (operation) {
//   case "suma":
//     math = num1 + num2;
//     console.log(math);

//     break;
//   case "resta":
//     math = num1 -= num2;
//     console.log(math);

//     break;
//   case "multiplicacion":
//     math = num1 *= num2;
//     console.log(math);

//     break;
//   case "division":
//     math = num1 /= num2;
//     console.log(math);

//     break;
//   default:
//     console.log("alguno de los valores no es correcto");
//     break;
// }

// ejercicio 9
//opcion 1
// // Acepta NIEs (Extranjeros con X, Y o Z al principio)
// function validateDNI(dni) {
//   let numero, letr, letra;
//   let expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

//  dni = dni.toUpperCase();

//   if (expresion_regular_dni.test(dni) === true) {
//     numero = dni.substr(0, dni.length - 1);
//     numero = numero.replace("X", 0);
//     numero = numero.replace("Y", 1);
//     numero = numero.replace("Z", 2);
//     letr = dni.substr(dni.length - 1, 1);
//     numero = numero % 23;
//     letra = "TRWAGMYFPDXBNJZSQVHLCKET";
//     letra = letra.substring(numero, numero + 1);
//     if (letra != letr) {
//       alert("Dni erroneo, la letra del NIF no se corresponde");
//       return false;
//     } else {
//       alert("Dni correcto");
//       return true;
//     }
//   } else {
//     alert("Dni erroneo, formato no válido");
//     return false;
//   }
// }
//opcion 2
// let doc = prompt("introduce tu DNI o NIE").toLowerCase();
// let isDNI = true;
// let validDocument = true;
// if (doc.charCodeAt(0) == 116 || doc.charCodeAt(0) == 120) {
//   isDNI == false;
// }
// if (isDNI) {
//   for (let index = 0; index < doc.length; index++) {
//     if (index <= 7) {
//       if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
//         validDocument = false;
//       }
//     } else {
//       if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
//         validDocument = false;
//       }
//     }
//   }
// } else {
//   for (let index = 1; index < doc.length; index++) {
//     if (index <= 7) {
//       if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
//         validDocument = false;
//       }
//     } else {
//       if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
//         validDocument = false;
//       }
//     }
//   }
// }
// if (validDocument && isDNI) {
//   console.log("el documento DNI es valido");
// } else if (validDocument) {
//   console.log("el documento NIE es valido");
// } else {
//   console.log("documento no valido");
// }
//opcion 3
// let userNieDni = prompt("please, write youe DNI or Nie");
// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   //if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI o NIE is not valid");
//   }
// } else {
//   console.log("Your DNI o NIE is not valid");
// }

//ejercicio 10

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
//   let player1 = getRandomInt(7);
//   let player2 = getRandomInt(7);

//   if (player1 > player2){
//     console.log("Player 1 win");
//   }else if(player1 < player2){
//     console.log("Player 2 win");
//   } else {
//     console.log("Draw");
//   }

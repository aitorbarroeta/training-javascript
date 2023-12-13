//ejercicio 1
//opcion dada por antonio que ami no me funciona
// let days = console.log(
//   new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate
// );


//ejercicio 2
// let month = prompt("please enter month");
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
//     alert("enter month");
//     break;
// }


//ejercicio 3
// let temperature = prompt("Please enter the outside temperature");

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature > 15 && temperature < 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Please indicate a correct value");
// }


//ejercicio 4
// let centinela = "isGreen"
// if (centinela == "isGreen"){
//     console.log("Cross the road")
// } else {
//     console.log("Please await");
// }

//ejercicio 5


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
// let number1 = prompt("indique un numero");
// let number2 = prompt("indique un segundo numero");
// let operation = prompt(
//   "indique una operacion para los numeros entre suma | resta | multiplicacion | division"
// );
// switch (operation) {
//   case "suma":
//     math = number1 + number2;
//     console.log(math);

//     break;
//   case "resta":
//     math = number1 -= number2;
//     console.log(math);

//     break;
//   case "multiplicacion":
//     math = number1 *= number2;
//     console.log(math);

//     break;
//   case "division":
//     math = number1 /= number2;
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
//     var numero, let, letra;
//     var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

//     dni = dni.toUpperCase();

//     if(expresion_regular_dni.test(dni) === true){
//         numero = dni.substr(0,dni.length-1);
//         numero = numero.replace('X', 0);
//         numero = numero.replace('Y', 1);
//         numero = numero.replace('Z', 2);
//         let = dni.substr(dni.length-1, 1);
//         numero = numero % 23;
//         letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
//         letra = letra.substring(numero, numero+1);
//         if (letra != let) {
//             //alert('Dni erroneo, la letra del NIF no se corresponde');
//             return false;
//         }else{
//             //alert('Dni correcto');
//             return true;
//         }
//     }else{
//         //alert('Dni erroneo, formato no válido');
//         return false;
//     }
// }
//opcion 2
// function nif(dni) {
//     var numero
//     var letr
//     var letra
//     var expresion_regular_dni
   
//     expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
//     if(expresion_regular_dni.test (dni) == true){
//        numero = dni.substr(0,dni.length-1);
//        letr = dni.substr(dni.length-1,1);
//        numero = numero % 23;
//        letra='TRWAGMYFPDXBNJZSQVHLCKET';
//        letra=letra.substring(numero,numero+1);
//       if (letra!=letr.toUpperCase()) {
//          alert('Dni erroneo, la letra del NIF no se corresponde');
//        }else{
//          alert('Dni correcto');
//        }
//     }else{
//        alert('Dni erroneo, formato no válido');
//      }
//   }
//ejercicio 10

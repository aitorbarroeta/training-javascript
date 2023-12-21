// // Determinar el tipo de dato y valor de las variables
// // Caso a
// let variable = 838 < 542;
// console.log("a) tipo:", typeof variable, "valor", variable);
// // Caso b
// variable = 17 / 5;
// console.log("b) tipo:", typeof variable, "valor", variable);
// // Caso c
// variable = 12 * 6;
// console.log("c) tipo:", typeof variable, "valor", variable);
// // Caso d
// variable = 35 % 8;
// console.log("d) tipo:", typeof variable, "valor", variable);
// // Caso e
// variable = 1 == 3 || 5 > 7 || 10 * 5 > 40;
// console.log("e) tipo:", typeof variable, "valor", variable);
// // Caso f
// variable = 13 % 2 == 0;
// console.log("f) tipo:", typeof variable, "valor", variable);
// // Caso g
// variable = "CODE" + " " + "SPACE";
// console.log("g) tipo:", typeof variable, "valor", variable);
// // Caso h
// variable = (21 / 2) % 3;
// console.log("h) tipo:", typeof variable, "valor", variable);
// // Caso i
// variable = 5 == "5";
// console.log("i) tipo:", typeof variable, "valor", variable);
// // Caso j
// variable = !(1 == 1);
// console.log("j) tipo:", typeof variable, "valor", variable);

// // pruebas de condicionales con un bucle (while)
// let totalBet = prompt("Please enter your bet");
// // console.log(totalBet);

// if (totalBet == 5000) {
//   alert("All in!");
// } else if (totalBet < 5000) {
//   alert("Passing this round.");
// } else {
//   alert("wrong bet,try again");
//   while (totalBet > 5000) {}
//   totalBet = prompt("Please enter your bet");
//   if (totalBet < 5000){alert("wrong bet,try again");}
// }

// despues de revisarlos en la solucion no esta bien puesto ni la optencion del Mes
// tener mas cuidado y revisar mejor la pagina MDN
// // ejercicio de obtener la estacion del año apartir del mes
// // opcion echa antes de corregir
// // let fechas = new Date(2023, 11, 2);
// // let season = fechas.getMonth(new Date);

// // if (season == 11){
// //   console.log("otoño");
// // } else  if(season == 8){
// //   console.log("summer")
// // } else {
// //   console.log("error season")
// // }
//opcion vista en la solucion
// y meter ejemplos para conseguir la fecha o datos de fecha
// const fechaDeHoy = new Date ();
// // el año con 4 digitos
// let year = fechaDeHoy.getFullYear();
// // el mes de 0 a 11 (0- Enero y 11- Diciembre)
// let month = fechaDeHoy.getMonth();
// // el dia del mes en curso
// let today =  fechaDeHoy.getDate();
// // el dia de la semana del 0 al 6 (0 el domingo, 6 para el sabado)
// let dayOfWeek = fechaDeHoy.getDay();
// // la hora entre 0 y 23
// let hour = fechaDeHoy.getHours();
// // los minutos entre 0 y 59
// let minutes = fechaDeHoy.getMinutes();
// // mostrar por consola la hora y los minutos
// console.log(hour+":"+minutes);

// console.log(fechaDeHoy);
// let day = today;

// // si tiene menos de dos digitos le pongo un 0 delante
// if (day < 10){
//   day = "0"+day;
// }
// console.log(day);

// // si tiene menos de dos digitos le pongo un 0 delante
// if (minutes < 10){
//   minutes = "0"+minutes;
// }
// // si tiene menos de dos digitos le pongo un 0 delante y le sumamos uno ya que nos da
// // un valor de 0 a 11
// month = month +1;
// if (month < 10){
//   month = "0"+month;
// }
// console.log(month);
// console.log(year);

// // concatenamos cadenas de caracteres con la variables para formar la fecha completa
// let fullDate = hour+":"+minutes+" "+day+"/"+month+"/"+year;

// console.log("Today`s date and time")
// console.log(fullDate)
// // solucion del ejercicio season.js
// //primera solucion posible
// if (month== 3 || month== 4 || month== 5){
//   alert("Spring")
// } else if (month== 6 || month== 7 || month== 8){
//   alert("Summer")
// }
// else if (month== 9 || month== 10 || month== 11){
//   alert("Autumn")
// }
// else if(month== 12 || month== 1 || month== 2){
//   alert("Winter")
// }
// else {
//   alert("Please, write a valid month")
// }
// // segunda solucion
// if (month >= 12 && month < 3) {
//   console.log("Winter");
// }else if (month >= 3 && month < 6) {
//   console.log("Spring");
// }else if (month >= 6 && month < 9) {
//   console.log("Summer");
// }else {
//   console.log("Autumn");
// }

// switch  compara con cada uno de los case que ponemos y el break es para terminar cada case
// default seria lo equivalente al else es decir si no encuentra true en los demas usara el default
// let character = "Black Widow";
// switch (character) {
//   case "Capitan America":
//     power = "Indestructible shield";
//     break;
//   case "Black Widow":
//     power = "Master spy & assassin";
//     break;
//   case "Iron man":
//     power = "Genius-level intellect";
//     break;
//   case "Thor":
//     power = "The hammer of Thor";
//     break;
//   default:
//     console.log("Choose your hero!");
//     break;
// }
// console.log(power);
// // solucion del ejercicio lenguaje.js
// let lenguage = prompt("seleciona un lenguaje entre en | de | po | pt");
// switch (lenguage) {
//   case "en":
//     answer = "Language in English, Execute code for English";
//     alert("Language in English, Execute code for English");
//     break;
//   case "de":
//     answer= "Language in Aleman, Execute code for Aleman";
//     alert("Language in Aleman, Execute code for Aleman");
//     break;
//   case "po":
//     answer= "Language in Polaco, Execute code for Polaco";
//     alert("Language in Polaco, Execute code for Polaco");
//     break;
//   case "pt":
//     answer = "Language in Portugues, Execute code for Portugues";
//     alert("Language in Portugues, Execute code for Portugues");
//     break;

//   default:
//     alert("Language not chosen, using Spanish");
//     break;
// }
// // solucion del ejercicio Number.js
// let numero = 35;
// switch (true) {
//   case numero < 0:
//     result = "el numero es menor a 0";
//     console.log("el numero es menor a 0");
//     break;
//   case numero >= 0 && numero <= 10:
//     result = "el numero esta entre 0 y 10";
//     console.log("el numero esta entre 0 y 10");
//     break;

//   case numero >= 11 && numero <= 20:
//     result = "el numero esta entre 11 y 20";
//     console.log("el numero esta entre 11 y 20");
//     break;

//     case  numero > 20:
//       result = "el numero es mayor que 20";
//       console.log("el numero es mayor que 20");
//       break;
//   default:
//     console.log("Not is a correct number");
//     break;
// }
// bucle contando de uno en uno
// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;

// }
// bucle contando de 2 en 2
// let number = 0;
// while (number < 10) {
//   console.log(number);
//   number += 2;
// }
// // bucle contando de 5 en 5
// number = 0;
// while (number < 100) {
//   console.log(number);
//   number += 5;
// }
// // bucle restando de 5 en 5

// while (number >= 0) {
//   console.log(number);
//   number -= 5;
// }

// multiplicando por 2
// let number = 2;
// while (number <= 256) {
//   console.log(number);
//   number *= 2;
// }
// cuenta atras
// let counter = 10;
// let timer = setInterval(() => {
//   console.log(counter);
//   counteṛ--;
//   if (counter < 0) {
//     clearInterval(timer);
//   }
// }, 1000)
// cuenta atras de 10 en un bucle
// let number = 10;
// while (number > 0){
//   number--;
//   console.log(number);
// }
// crear la tabla de multiplicar del 2
// opcion 1
// let number = 2;
// let multi = 1;
// while (multi <=10)  {
//   console.log(number,"x",multi,"=",number*multi)
//   multi++;
// }
// opcion 2 visiblemente mas estetica
// let number = 2;
// let multi = 1;
// while (multi <=10)  {
//   console.log(`${number} x ${multi} = ${number*multi}`)
//   multi++;
// }
//opcion 3 con menos codigo e igual de estetico que la opcion 2
// let number = 2;
// let multi = 0;
// while (multi++ <10)  {
//   console.log(`${number} x ${multi} = ${number*multi}`)
// }
// crear un programa que genere las tablas de multiplicar y su enunciado

// for (let number = 1; number <= 10; number++) {
//   console.log("Tabla del: ",number);
//   console.log("----------------");
//   let multi = 1;
// while (multi <= 10) {
//   console.log(number,"x",multi,"=",number*multi);
//   multi++;

// }
//   console.log(`----------------`)
// }

// ejemplo sin corregir en clase
// let limit = 10;
// for (let counter = 0; counter  <= limit; counter++) {
//    console.log(counter);
// }
// ejemplo del temario
// let i,
// j,
// sum = 0;
// for (i = 0, j = 10; i < 10; i++, j--) {
//   sum += i * j;
//   console.log(sum);
// }
// ejemplo para sacar los numero pares
// let counter = 1
// while (counter++ <= 100){
//   if(counter % 2 == 0){

//     console.log(counter);
//   }
// }
// ejemplo para sacar los numero impares
// let counter = 1
// while (counter++ <= 100){
//   if(counter % 2 != 0){

//     console.log(counter);
//   }
// }
// probando el bucle do while

// let totalBet = 0;
// do {
//   totalBet = prompt("Please enter your bet");
//   if (totalBet == 5000) {
//     alert("All in!");
//   } else if (totalBet < 5000) {
//     alert("Passing this round");
//   }
//   if (totalBet > 5000) {
//     alert("Bet limit 5000, please change your bet");
//   }
//   if (isNaN(totalBet)) {
//     alert("Please, enter a numeric value");
//   }
// } while (totalBet > 5000 || isNaN(totalBet));

//probando ejemplo del pdf de do/while
// let option = null;
// let colors = ["red", "green", "blue"];
// do {
//   console.log("Please, choose a color");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + "." + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000","color: rgb(36, 184, 36);");

//       break;
//     case "2":
//       console.log("%cHex code for green: #008000","color: rgb(37, 221, 190);");

//       break;
//     case "3":
//       console.log("%cHex code for blue: #0000FF","color: rgb(44, 195, 12);");

//       break;

//     default:
//       if (option != 0) {
//         console.warn("Not a valid option, please try again");
//       } else {
//         console.log("Exiting, see you soon!");
//       }
//       break;
//   }
// } while (option != 0);

// objetos y arrays (Vectores y matrices)

let star = {
  name: "Polaris",
  constellation: "Ursa Minor",
  type: "Double/Cepheid",
  spectralClass:"F7",
  mag:2.0,
};
console.log(star.name);

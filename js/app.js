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

// let star = {
//   name: "Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass:"F7",
//   mag:2.0,
//   "": "acceptable",
// };
// console.log(star.name);
// star.constellation = "Ursa Major"
// console.log(star.constellation);

// let num1 = 4;
// let num2 = num1;
// console.log(num2);
// num2 = 7
// console.log(num1);
// console.log(num2);

// let star2 = star;
// star2.name = "Mizar";
// star2.mag= 5.7;

// console.log(star.name);
// console.log(star2.name);

// otro ejemplo de objeto
// let hero = {
//   character: "Ironman",
//   name: "TOny Stark",
//   powers: [
//     "Genius level intellect",
//     "Multiple powered armor suits",
//     "Ability to fly",
//   ],
//   info: {
//     yearCreated: 1963,
//     powerOrigin: "From his suit",
//     weapons: ["repulsor rays", "uni-beam projector", "lasers"],
//     didYouKnow:
//       "Tony Stark created and build one of the Spider-Man`s upgraded suits know as the Iron Spider Suit. we goy a smoll glimpse os it Spider-Man: Homevoming!",
//   },
// };

// let hero2 = new Object ()
// hero2.character = "Hulk";
// hero2.name = "Bruce Banner"
// hero2.powers = [
//   "strengh",
//   "speed",
//   "stamina",
//   "durability",
//   "regeneration",
//   "night invulnerability",
//   "breathing underwater",
// ];
// console.log(Object.keys(hero2));
// console.log(Object.keys(hero));

//ejercicio de los apuntes

// let shoppingCart = {
//   zapatillas: {
//     product_id: 0,
//     name: "nike",
//     price: 58.25,
//     quantity: 3,
//   },
//   camiseta: {
//     product_id: 1,
//     name: "adidas",
//     price: 25,
//     quantity: 3,
//   },
//   chaqueta: {
//     product_id: 2,
//     name: "ternua",
//     price: 108.5,
//     quantity: 4,
//   },
//   pantalon: {
//     product_id: 3,
//     name: "puma",
//     price: 18.25,
//     quantity: 6,
//   },
// };
// console.log(
//   shoppingCart.zapatillas,
//   shoppingCart.camiseta,
//   shoppingCart.chaqueta,
//   shoppingCart.pantalon
// );
// otra forma de sacar los valores en la cual no estan tan bien definidas ya que estan dentro de un desplegable
// // console.log(Object.values(shoppingCart));

// // ejemplo de explicacion de arrays
// let team = ["luffy", "Zoro", "Sanji"];
// //para indicar el numero de array que queremos ver tiene que ir entre corchetes
// console.log(team[0]);
// // para saber cual es el ultimo array que se metio utilizamos length-1
// console.log(team[team.length - 1]);

// como generar un test para el ejercicio 10 de numeros aleatorios
// let fails = false;
// let min = 1;
// let max = 6;
// let player1 = Math.floor(Math.random()*(max - min +1))+min;
// let player2 = Math.floor(Math.random()*(max - min +1))+min;

// for (let index = 0; index < 10000; index++) {
//   player1 = Math.floor(Math.random()*(max - min +1))+min;
//   if(player1 < 1 || player1 > 6){fails = true;}

// }
// if (fails) {
//   console.error("test fail")

// } else {
//   console.log("%c test pass", "color: #008000")
// }

// // usando el metodo original increased [...original]
// let team = ["luffy", "sanji", "zoro", "nami", "robin"];
// console.log(team[4]);
// team[5]= "brook"
// console.log(team);
// // estas dos formas son iguales pero la recomendable es la primera
// let team2 = [...team];
// let team6 = Array.from(team);

// team6[0] = "jimbe"

// team2[0] = "jimbe"
// console.log(team[0]);
// console.log(team2[0]);
// team = ["franky", ...team];
// console.log(team);
// // estas tres formas son iguales pero la recomendable es la primera
// let team5 = ["luffy", "sanji", "zoro", "nami", "robin"];
// let team3 = new Array("brook", "yamato", "ussop");
// let team4 = new Array("brook", "yamato", "ussop");

// //para sacar un array de arrays
// console.log([...team.entries()]);

// dando sentido a como hacer los funtion y crearlas
// function compare (value1,value2){
//     if(value1 < value2){
//         return -1;
//     } else if (value1 > value2) {
//         return 1;
//     } else {
//         return 0;
//     }

// }
// con esta variable guardamos el mensaje que sale de la funcion para tener la informacion almacenada
// let result =compare (3,3)
// console.log(result);

//
// function compare(value1, value2) {
//     console.log("working!");
//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// let numbers = [0,1,5,10,15];
// con reverse damos la vuelta a la array
// numbers.reverse();
// console.log(numbers);
//con esto damos la vuelta pero no dejamos el array modificado
// let numbers = [0, 1, 5, 10, 15];
// let copyOfNumbers = [...numbers];
// let secondCopyOfNumbers = Array.from(numbers);
// copyOfNumbers.reverse();
// console.log(numbers);
// console.log(copyOfNumbers);
// console.log(secondCopyOfNumbers);
// secondCopyOfNumbers.sort();
// console.log(secondCopyOfNumbers);
// probando a ordenar arrays con ,sort
// let team = [
//   "Alice",
//   "Sebastian",
//   "Ismael",
//   "Fran",
//   "David Miro",
//   "David Calero",
// ];
// team.sort();
// console.log(team);
// secondCopyOfNumbers.sort(compare)
// console.log(secondCopyOfNumbers);
// let unorderednumbers = [20,-8,3,102,43,18]
// unorderednumbers.sort(compare)
// console.log(unorderednumbers);

//probamos otra manera de hacer una funcion de ordenacion
// let unorderednumbers = [20,-8,3,3,102,43,18]
// let counter = 0;
// unorderednumbers.sort(
//     function(value1,value2) {
//         counter++;
//         console.log("value1;",value1);
//         console.log("value2;",value2);
//         console.log("result;",value1 - value2);
//         return value1 - value2;

//     }
//     )
//     console.log(counter);
//     console.log(unorderednumbers);

// ahora ordenamos de mayor a menor
// let unorderednumbers = [20, -8, 3, 3, 102, 43, 18];
// let counter = 0;
// unorderednumbers.sort(
//   //esta parte es igual que la funcion flecha de abajo
//   function (value1, value2) {
//     return value1 - value2;
//   }
// );
// unorderednumbers.sort((value1, value2) => value2 - value1);
// console.log(unorderednumbers);

//ejemplo de el pdf de curso
// let numbers = [3, 9, 8, 1, 4];
// for (let i = 0; i < numbers.length - 2; i++) {
//   console.log(numbers);
//   for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       aux = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = aux;
//     }
//   }
// }
// console.log(numbers);

// manera de visualizar los elementos de la Array
// let numbers = [3,9,8,1,4];
// for (let num of numbers){
//     console.log(num);
// }

// para visualizar los objetos
// let shoppingCart = {
//     product1: {
//         id: 1,
//         name: "trainers",
//         price:109.65,
//         quantity:6,
//     },
//     product2: {
//         id: 2,
//         name: "glovers",
//         price:9.65,
//         quantity:1,
//     },
//     product3: {
//         id: 3,
//         name: "t-shirt",
//         price:19.65,
//         quantity:2,
//     },
//     product4: {
//         id: 4,
//         name: "suitcase",
//         price:119.65,
//         quantity:4,
//     }
// }
// for(let key in shoppingCart){
//     console.log(shoppingCart[key]);
//     console.log(shoppingCart[key].name);
// }

//otro ejemplo
// let pirate ={
//     charater: "Mugiwara",
//     name: "Monkey D. Luffy",
// }
// for (let key in pirate){
//     console.log(`${key}=> ${pirate[key]}`);
// }

//ejemplo de antonio
// ["Aragorn", "Gandalf", "Nazgul"].forEach((element, index, array) => {
//   console.log(`${element} is a index ${index} in ${array}`);
// });
// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//   console.log(letter);
// });

// // ejemplo de como tener un nuevo array de un array que tiene una serie de modificaciones
// // esta funcion .map se usa mucho en react
// let numbers = [1, 2, 3];
// let mappedNumbers = numbers.map((number) => number * 2);
// console.log(mappedNumbers);
// // vamos a realizar un filtro para sacar los numeros inferiores a 3
// let filteredNumbers = numbers.filter(number => number < 3)
// console.log(filteredNumbers);
// //aqui vamos a verlo en un console.log en vez de meterlo en una variable y vemos si son mayores que dos
// console.log(
//     numbers.every(number => number > 2)
// );
// //aqui vemos si alguno de ellos cumple la condicion de ser mayor que dos
// console.log(
//     numbers.some(number => number > 2)
// );
// // aqui sumamos los elementos que hay dentro de la array de dos formas diferentes
// let totalSum = numbers.reduce((accum, number)=> accum + number,0)
// console.log(totalSum);
// totalSum = 0;
// totalSum = numbers.reduceRight((accum, number)=> accum + number,0)
// console.log(totalSum);

//ejemplo array anidadas
// realizamos un calendario con javascript
// let calendar = new Array(5);
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7);
// }
// for (let row = 0, day = 1; row < calendar.length; row++) {
//   for (let col = 0; col < calendar[row].length; col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else if (day == 31) {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }
// console.log(calendar);

// como declarar una funcion ejemplo
// function sayHello(name){
//     console.log(`hi, ${name}`);
//     return name.length;
// }
// let letter = 0;
// leteer = sayHello("aitor");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("mia");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("gorka");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("ana");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("jose");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("max");
// console.log(`your name has ${letter} letters`);
// leteer = sayHello("vilma");
// console.log(`your name has ${letter} letters`);

// aqui metemos una funcion dentro de una variable
// con const hacemos que no se pueda modificar la variable
// const sum = function (num1, num2){
//     return num1 + num2;
// };
// console.log(sum(2,2));
// console.log(sum(1,3));
// console.log(sum(0,4));

// usamos la funcion flecha para ver como se utilizan es lo mismo que lo anterior pero con menos codigo.
// const sum = function (num1, num2){
//     return num1 + num2;
// };
// const sum2 = (num1, num2) => num1 + num2;
// console.log(sum(2,2));
// console.log(sum(1,3));
// console.log(sum2(11,11));



// posible solucion de un proximo ejercicio
// function numAleatorio(min,max){
//    console.log( Math.floor(Math.random()*(max - min +1))+min);
// }
// for (let index = 0; index<20; index++) {
//     numAleatorio(1,7)
// }

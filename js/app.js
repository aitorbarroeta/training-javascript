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
let character = "Black Widow";
switch (character) {
  case "Capitan America":
    power = "Indestructible shield";
    break;
  case "Black Widow":
    power = "Master spy & assassin";
    break;
  case "Iron man":
    power = "Genius-level intellect";
    break;
  case "Thor":
    power = "The hammer of Thor";
    break;
  default:
    console.log("Choose your hero!");
    break;
}
console.log(power);

"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотренно слишком мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('error');
// }

// console.log(personalMovieDB);



//Игра "Больше-меньше"

// let n = +prompt('Загадайте число от 1 до 50', '');

let input = document.querySelector('.num-form');
console.log(input.value);


// for (let i = 0; i < 5; i++) {
//     let attempts = 5;
//     let a = +prompt('Угадайте число. Осталось попыток: ' + (attempts - i), '');
//     if (a < 0 && a > 50) {
//         console.log('Число нужно вводить от 0 до 50');
//     }
//     else if (a > n) {
//         console.log('Меньше');
// }   else if (a < n) {
//         console.log('Больше');
// }   else {
//         console.log('Победа!');
// }}


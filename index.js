// Завдання 1

// let i = 1
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }


// Завдання 2

// for (let i = 2; i <= 20; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }


// Завдання 3

// for(let i = 7; i <= 70; i += 7){
//     console.log(i);
// };


// Завдання 4

// const numbers = [1, 2, 3, 4, 5]; 
// let number = 0; 

// while (number < numbers.length) {
//     console.log(numbers[number]); 
//     number++; 
// }

// Завдання 5

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// for (const number of numbers) {
//     if (number === 7) {
//         break; 
//     }
//     console.log(number); // вивести число
// }


// Завдання 6

// const n = Number(prompt("Введіть число"));
// let i = 0;
// while(i < n){
//     console.log(i);
//     i++;
// }


// Завдання 7

let number = 1;

while (number <= 20) {
    if (number % 3 === 0) {
        number += 1;
        continue; 
    }
    console.log(number); 
    number += 1;
}
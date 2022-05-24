// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
let pi = Number((Math.PI).toFixed(2));
console.log(pi);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(max, min);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let random_a = (Math.random()).toFixed(2);
let random_b = Math.round((Math.random()) * 10);
console.log(random_a, random_b);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
// let a =  Number((0.6 + 0.7).toFixed(1));
let b = ((0.6 * 10) + (0.7 * 10)) / 10;
console.log(b);

// 5. Получить число из строки ‘100$’
let number = parseInt('$100');
console.log(number);
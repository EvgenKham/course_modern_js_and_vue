// 1. Получить первую и последнюю буквы строки
const string = `some test string`;
let first_letter = string[0];
let last_letter = string.slice(-1);
console.log(first_letter, last_letter);

// 2. Сделать первую и последнюю буквы в верхнем регистре
let first_and_last_letters_upper =  `${string[0].toLocaleUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toLocaleUpperCase()}` ;
console.log(first_and_last_letters_upper);

// 3. Найти положение слова ‘string’ в строке
let search_str = string.indexOf(`string`);
console.log(search_str);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
let first_space = string.indexOf(` `);
let second_space = string.indexOf(` `, first_space + 1);
console.log(second_space);

// 5. Получить строку с 5-го символа длиной 4 буквы
let str_sub = string.substring(5, 5 + 4);
console.log(str_sub);

// 6. Получить строку с 5-го по 9-й символы
let str_substring = string.substring(5, 9);
console.log(str_substring);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let str_slice = string.slice(0, string.length-6);
console.log(str_slice);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20, b = 16;
console.log(String(a) + b);
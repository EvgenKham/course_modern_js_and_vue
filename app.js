// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let str = "i am in the easycode";
let result = "";
let n = 0
while(n < str.length) {
    if(n === 0 || str[n - 1] === " ")
        result += str[n].toUpperCase();
    else
        result += str[n];
    n++;
}
console.log(result);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let startStr = "tseb eht ma i";
let finishStr = "";

for(let i = startStr.length - 1; i >= 0 ; i--) {
    finishStr += startStr[i];
}
console.log(finishStr);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let factorial;

for(let i = 1; i <= 10 ; i++) {
    factorial *= i;
}
console.log(factorial);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let strJS = "JavaScript is a pretty good language";
let strFinish = "";
for(let i = 0; i < strJS.length; i++){
    if(i === 0 || strJS[i - 1] === " "){
        strFinish += strJS[i].toUpperCase();
    } else if(strJS[i] !== " ") {
        strFinish += strJS[i];
    }
}
console.log(strFinish);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of numbers) {
    if(value % 2 !== 0 ) {
        console.log(value);
    }
}

// 6. Дан объект:
// let list = {
// name: ‘denis’,
// work: ‘easycode’,
// age: 29 }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
    }
// console.log(list);
for (let key in list) {
    if(typeof(list[key]) === typeof("")){
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);

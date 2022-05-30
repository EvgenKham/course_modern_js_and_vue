// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
//    multiply(1,2,3) = 6 (1*2*3)
//    Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
    if (arguments[0] === undefined){
        return 0;
    }

    let result = 1;
    for(let value of arguments) {
        result *= value;
    }
    return result;
}
console.log(multiply("2", 3, 5));
console.log(multiply());

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
    let strReverse = '';
    newStr = String(str);
    for(let i = newStr.length - 1; i >= 0; i--) {
        
        strReverse += newStr[i];
    }
    return strReverse;
}

console.log(reverseString(null));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
// подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(str) {
   
    let strUnicode = "";
    originStr = String(str);
    console.log(originStr);
    for(let i = 0; i < originStr.length; i++) {
        strUnicode += String(originStr.charCodeAt([i]));
        strUnicode += " ";
    }
    return strUnicode.trim();
}

console.log(getCodeStringFromText(null));

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber (num) {
    num = parseInt(num);

    // console.log(typeof(num));
    if(typeof(num) !== 'number'){
        return new Error("Please provide a valid number");
    } else if(num <= 10 && num > 0) {

        let randomNumber = Math.round(Math.random() * 10);
        if(randomNumber === num) {
            return 'You win';
        } else {
            return `You are lose, your number is ${num}, the random number is ${randomNumber}`;
        }

    } else {
        return new Error("Please provide number in range 1-10");
    }
}

console.log(guessNumber(null));

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); 
// [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.

function getArray(num) {
    let newArray = [];
    for(let i = 0; i < num; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(getArray(10));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
    let arrNew = arr.concat(arr);
    return arrNew;
}

console.log(doubleArray([1, 4, 6, 7]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    let modifyArrays = [];
    
    for (let i = 0; i < arguments.length; i++){
        if(Array.isArray(arguments[i])){
            arguments[i].shift(0);
            modifyArrays.push(arguments[i]);
        }
    }
    return modifyArrays;
}

console.log(changeCollection([1, 2, 3, 4], ["a", "b", "c", "d"]));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "$1,955.65",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "$3,776.14",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "$3,424.84",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Kari Waters",
      "gender": "female"
    }
  ]
  
  function filterUsers(arr, key, value) {
    correctUsers = [];
    
    if (!Array.isArray(arr)) return new Error('The first argument should be an array');
    if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
    if (value === undefined || value === null) return new Error('The value should be a valid value.');

    for(let user of arr){
        if(user[key] === value){
            correctUsers.push(user);
        }
    }
    return correctUsers;
  }
  
  console.log(filterUsers(users, "age", 36))
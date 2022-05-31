// 1. Создать две функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки


function firstFunc (arr, fn) {

    let result = 'New value: ';

    for(let i = 0; i < arr.length; i++){
        result += fn(arr[i]);
    }

    return result;
}

function secondFunc1 (value) {
    return value[0].toUpperCase() + value.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], secondFunc1));

function secondFunc2(value) {
    return Number(value) * 10 + ", ";
}

console.log(firstFunc([10, 20, 30], secondFunc2) )

function secondFunc3(value) {
    return value.name + ' is ' + value.age + ", ";
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], secondFunc3));

function secondFunc4(value) {
    return value.split("").reverse().join("") + ', ';
}

console.log(firstFunc(['abs', '123'], secondFunc4));


// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
 
let exampleArr = [12, 3, 8, 0, 34, 5, 77];

function every(arr, fn) {
    if(!Array.isArray(arr)) {
        return new Error('The first argument expected as array');
    }
    if (typeof(fn) !== "function") {
        return new Error('The second argument expected as function');
    }
    for(let i = 0; i < arr.length; i++) {
        if(!(fn(arr[i], i, arr)))
            return false;
    }

    return true;
}


console.log(every(exampleArr, function(el) {
    return typeof el === 'number';
}));
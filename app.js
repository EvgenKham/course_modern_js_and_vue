// 1. Чему равно а, почему?
// let a = 0 || 'string';       
//  a = 'string' т.к. оператор || ищет хотя бы одно истинное значение и возвращает первое из них, а 0 - это false

// let a = 1 && 'string';       
//  a = 'string' т.к. оператору && нужны все значения true и он возвращает последнее из них

// let a = null || 25;
// a = 25 т.к. оператор || ищет хотя бы одно истинное значение и возвращает первое из них, а null - это false

// let a = null && 25;
//  a = 25 т.к. оператору && нужны все значения true и он возвращает последнее истинное, а null - это false

// let a = null || 0 || 35;
// a = 35 т.к. оператор || ищет хотя бы одно истинное значение, для того чтобы все выражение являлось истинным и возвращает первое из них, а null и 0 - это false

// let a = null && 0 && 35;
//  a = null т.к. оператору && нужны все значения true, чтобы все выражение было истинным, и если хотя бы одно из них ложное, то все выражение ложно. null и 0 - false, а 35 - true


// 2. Что отобразится в консоли. Почему?
// 12 + 14 + '12'   / 2612 ->   Сначала сложение (12+14), затем конкатенация. Тип String
// 3 + 2 - '1'      / 4 ->      Сначала сложение (3+2), затем вычитание. Строка неявно преоразуется в число(5 - "1" -> 5 - 1), так как только при сложение String не преоразуется в Number. Тип Number
// '3' + 2 - 1      / 31 ->     Сначала конкатенация('3'+2), затем вычитание. Тип String
// true + 2         / 3 ->      true неявно преобразуется в Number и выполняется сложение. Тип Number
// +'10' + 1        / 11 ->     + перед String преоразует в Number, а затем (10+1). Тип Number
// undefined + 2    / NaN ->    Так как undefined - не сторка, интерпритатор неявно пытаеться преоразовать в Number и получает NaN. Тип Number
// null + 5         / 5 ->      null неявно преоразуется в 0, а 0 + 5 = 5. Тип Number
// true + undefined / NaN ->    true неявно преоразуется в 0, а undefined в NaN, а в результе любой арифметической операция с NaN получается NaN. Тип Number


// 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value = "";
 if(value === "hidden") {
    value = "visible";
 } else {
     value = "hidden";
 }


// 4. Создать переменную и присвойте ей число.
// Используя if, записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let v = 10;

if(v ===  0) {
    v = 1;
} else if(v < 0 ) {
    v = "less then zero";
} else if(v > 0) {
    v *= 10;
}

// 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
}
 if(car.age > 5) {
     console.log('Need Repair');
     car.needRepair = true;
 } else {
     car.needRepair = false;
 }


// 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
}
let price = parseInt(item.price);
let discount = parseInt(item.discount);

if((item.discount && isNaN(item.discount)) && (item.price && isNaN(item.price))) {
    
    let priceWithDiscount = (price *(100 - discount)) / 100;
    item = {priceWithDiscount};
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

// 7. Дан следующий код:

// let product = {
//     name: “Яблоко”,
//     price: “10$”
//     };
//     let min = 10; // минимальная цена
//     let max = 20; // максимальная цена
    
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: "Яблоко",
    price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

let price_product = parseInt(product.price);
if(price_product >= min && price_product <= max)  {
    console.log(product.name);
} else {
    console.log("product isn`t found");
}
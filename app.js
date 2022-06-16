// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(firstVal = 0) {
  return function(secondVal = 0) {
    return firstVal - secondVal;
  }
}
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(valueFir = 2) {
  return function(valueSec = 1) {
    return valueFir *= valueSec;
  }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


// 3. Реализовать модуль, который работает со строкой и имеет методы:
//    a. установить строку
//      i. если передано пустое значение, то установить пустую строку
//      ii. если передано число, число привести к строке
//    b. получить строку
//    c. получить длину строки
//    d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const workString = (function(){
  let work_str = '';

  function setString(str = ''){
    if(typeof(str) == 'number')
      work_str = String(str);
    else
      work_str = str;
  }

  function getString(){ return work_str; }

  function getLenghtOfString() { return work_str.length; }

  function getStringReverse() { return work_str.split('').reverse().join('')}

  return {
    setString: setString,
    getString: getString,
    getLenghtOfString: getLenghtOfString,
    getStringReverse: getStringReverse,
  }

}());
workString.setString('abcdef');
workString.getString();
workString.getLenghtOfString();
console.log(workString.getStringReverse());


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = (function () {
  let value = 0;

  function setValue(val) { 
    value = val; 
    return this;
  }

  function add(val) { 
    value += val; 
    return this;
  }

  function sub(val) { 
    value -= val; 
    return this;
  }

  function mult(val) { 
    value *= val; 
    return this;
  }

  function div(val) { 
    value /= val; 
    return this;
  }

  function degree(val) { 
    value = Math.pow(value, val); 
    return this;
  }

  function showResult() {return value.toFixed(2);}

  return {
    setValue,
    add,
    sub,
    mult,
    div,
    degree,
    showResult,
  }

}());

console.log(calculator.setValue(2).add(4).mult(5).degree(2).div(300).showResult());
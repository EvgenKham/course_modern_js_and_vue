"use strict";
// Реализовать конструктор и методы в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class Component {   
    //Не забывать, что методы в ES6 не разделяюся между собой ни ',' ни ';'
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
    }
}

const comp = new Component('span');
comp.setText("This is span!");
console.log(comp);

// Создать класс калькулятора который будет принимать стартовое значение и у него будут методы:
// сложить, вычесть, умножить, разделить. Также у него должны быть геттер и сеттер для получения и 
// установки текущего числа с которым производятся вычисления.

class Calculator {
    // Добавил скрытое поле с использованием '#', это нововведение (может работать не во всех браузерах).
    // Если не будет работать '#number' можно заменить на '_number'
    #number = 1;
    constructor(number) {
        this.#number = number;
    }
    get(){
        return this.#number;
    }
    set(number){
        this.#number = number;
    }
    sum(userNumber){
        return this.#number + userNumber;
    }
    sub(userNumber){
        return this.#number - userNumber;
    }
    mult(userNumber){
        return this.#number * userNumber;
    }
    div(userNumber){
        return this.#number / userNumber;
    }
}
const num = new Calculator(5);

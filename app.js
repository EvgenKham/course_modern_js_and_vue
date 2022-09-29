// Примеры создания классов, обычное наследование и наследование через prototype (ES5)
// Создание класса Product с его свойствами и методом
function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  this.getPriceWithDiscount = function(){
    return (this.price * (100 - this.discount)) / 100;
  };
}

//Добавление нового метода для класса Product через прототип для класса Product
// НЕЛЬЗЯ использовать стрелочные ф-ции, так как они не имеют собственных this и super
Product.prototype.setNewPrice = function (newPrice) {this.price = newPrice;} 

const apple = new Product('Apple', 200, 18);
const samsung = new Product('Samsung', 150, 13);

console.log(apple);
console.log(apple.getPriceWithDiscount());
console.log(samsung);
console.log(samsung.getPriceWithDiscount());
console.log(samsung instanceof Product);
apple.setNewPrice(500);
console.log(apple.getPriceWithDiscount());


function Person (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

//Добавление навых методов в класс через prototype
Person.prototype.getFullname = function() {
  return `${this.firstname} ${this.lastname}`;
};
Person.prototype.sayHello = function() {
  return `Hello ${this.firstname} ${this.lastname}`;
}


// Пример наследования в ES5 ( через call() или apply() )
function User (firstname, lastname, username) {
  Person.call(this, firstname, lastname);
  this.username = username;
}
// При таком наследовании необходимо переопределять prototype
User.prototype = Object.create(Person.prototype);
User.prototype.constructor = Person;

const ivan = new Person('Ivan', 'Nefedov');
console.log(ivan);
const user1 = new User('Evgen', 'Khamitcevich', 'EvgenKh');
console.log(user1);



// Примеры создания классов и принцыпы написания кода в ES6 (Class/inheritance)
class Animal{
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    return (`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop(){
    this.speed = 0;
    return (`${this.name} стоит неподвижно.`);
  }
}

class Rabbit extends Animal{
  constructor(name, earLength){
    super(name);
    this.earLength = earLength;
  }
  hide(){
    return (`${this.name} прячется!`);
  }
  stop(){
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("Белый кролик", 10);

console.log(rabbit.run(5));
console.log(rabbit.stop());
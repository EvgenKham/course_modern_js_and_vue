// Есть класс Planet
// function Planet(name) {
//   this.name = name;
//   this.getName = function () {
//       return 'Planet name is ' + this.name;
//   }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); 
// 'Planet name is earth. The satellite is moon’

function Planet(name) {
  this.name = name;

  // Почему при определении метода здесь, он не работает в родительском классе?
  // TypeError: Cannot read properties of undefined (reading 'call') at PlanetWithSatellite.getName
  // this.getName = function () {
  //     return 'Planet name is ' + this.name;
  //   }
  }

  // А при определении метода здесь всё работает
  Planet.prototype.getName = function () {
    return 'Planet name is ' + this.name;
  }

function PlanetWithSatellite(name, satelliteName) {
  Planet.call(this, name)
  this.satelliteName = satelliteName
  this.getName = function () {
    let str = Planet.prototype.getName.call(this);
    return `${str}. The satellite is ${this.satelliteName}`;
  }
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = Planet;

let earth = new PlanetWithSatellite('Earth', 'Moon');
console.log(earth.getName());

// Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” 
// и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”, 
// а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building (name, countFloors) {
  this.name = name;
  this.countFloors = countFloors;
  this.getCountFloors = function() {
    return this.countFloors;
  };
  this.setCountFloors = function (countFloors) {
    this.countFloors = countFloors;
  };
}

function House (name, countFloors, countApartmentsOnFloor) {
  Building.call(this, name, countFloors);
  this.countApartmentsOnFloor = countApartmentsOnFloor;
  this.getCountFloors = function() {
    let x = this.countFloors;
    return `Этажи: ${x}, всего квартир: ${x * this.countApartmentsOnFloor}`;
  }
}

House.prototype = Object.create(Building.prototype);
House.prototype.constructor = Building;

function Mall (name, countFloors, countShopsOnFloor) {
  Building.call(this, name, countFloors);
  this.countShopsOnFloor = countShopsOnFloor;
  this.getCountFloors = function () {
    let y = this.countFloors;
    return `Этажи: ${y}, всего магазинов: ${y * this.countShopsOnFloor}`;
  }
}

Mall.prototype = Object.create(Building.prototype);
Mall.prototype.constructor = Building;

const b = new Building('Building', 5);
const h = new House('House', 3, 8);
const m = new Mall('Mall', 7, 15);

console.log(b);
console.log(h);
console.log(m);
console.log(b.getCountFloors());
console.log(h.getCountFloors());
console.log(m.getCountFloors());

// Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” 
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
// Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. 
// Придумайте ему несколько свойству, которые будут характерны только для этого класса.
// Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getPrice = function () {
  return `Название: ${this.name}, цена: ${this.price}`;
}

function OfficeFurniture(name, price, hasBoss) {
  Furniture.call(this, name, price);
  this.hasBoss = hasBoss;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = Furniture;

OfficeFurniture.prototype.getInfo = function () {
  const str = Furniture.prototype.getPrice.call(this);
  return `${str}, Для босса: ${this.hasBoss}`;
}

let sofa = new Furniture('Диван', 160);
let armchair = new OfficeFurniture('Кресло', 140, true);

console.log(sofa.getPrice());
console.log(armchair.getInfo());

// Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию”
// (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...).
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым).
// Свойства определяются в момент вызова конструктора. У класса “Гость” должно быть свойство “срокДействия” 
// (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию 
// о дополнительных свойст(“суперАдмин” и “срокДействия”)

function User (name, dataRegistration) {
  this.name = name;
  this.dataRegistration = dataRegistration;
}

User.prototype.getInfo = function () {
  return `Имя: ${this.name}, Дата регистрации: ${this.dataRegistration}`;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = User;

function Admin (name, dataRegistration, superAdmin = false) {
  User.call(this, name, dataRegistration);
  this._superAdmin = superAdmin;
}

Admin.prototype.getInfo = function () {
  const user = User.prototype.getInfo.call(this);
  return `${user}, админ: ${this._superAdmin}`;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = User;

function Guest (name, dataRegistration, validDate) {
  User.call(this, name, dataRegistration);
  this.validDate = validDate;
}

Guest.prototype.getInfo = function () {
  const user = User.prototype.getInfo.call(this);
  return `${user}, срок действия: ${this.validDate}`;
}

const u = new User("Petr", new Date);
console.log(u.getInfo());
const a = new Admin("Vasiy", new Date("2022-09-11"), true);
console.log(a.getInfo());
const g = new Guest("Zoiy", new Date, new Date(2022, 10, 11));
console.log(g.getInfo());

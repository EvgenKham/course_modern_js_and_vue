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
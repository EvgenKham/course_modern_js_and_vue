// Создать функцию, которая возвращает промис.  
// Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, 
// с которым промис будет выполнен. 
function promiseCreator(ms, status) {
  return new Promise(function(resolve, reject) {
    setTimeout( ()=> {resolve(status)}, ms);
  });
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

//Построение цепочек промисов
const promise = new Promise((resolve, reject) => {
  setTimeout( () => reject("Error"), 1000);
})
console.log(promise);
promise
.then( x => {
  console.log(x);
  return x;
})
.then( y => {
  console.log(y);
})
.catch(err => console.log(err))
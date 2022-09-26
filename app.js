function promiseCreator(ms, status) {
  return new Promise(function(resolve, reject) {
    setTimeout( ()=> {resolve(status)}, ms);
  });
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);


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
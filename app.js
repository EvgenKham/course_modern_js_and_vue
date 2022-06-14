const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "1955.65$",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "3776.14$",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "3424.84$",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Kari Waters",
      "gender": "female"
    }
  ]


//forEach
//filter    (Создает новый массив)
//map       (Создает новый массив)
//reduce
//some/every
//sort      (Изменяет исходный массив, Сортировка по умолчанию как String)
//find

// forEach
// users.forEach((user, index) => console.log(user, index));

// filter
// const ageLess30 = users.filter(user => user.age > 30 );
// console.log(ageLess30);

// map (Создает новый массив)
// const usersName = users.map(user => user.name);
// console.log(usersName);

// reduce
// const totalBalance = users.reduce((acc, user) => acc += parseFloat(user.balance), 0);
// console.log(totalBalance.toFixed(2));

// const usersObj = users.reduce((acc, user) => {
//     acc[user._id] = user;
//     return acc;
// }, {});
// console.log(usersObj);

// some/every

// find

// sort 
// const numArr = [23, 45, 63, 21, 6];
// numArr.sort();
// console.log(numArr);
// numArr.sort((prev, next) => prev - next);
// console.log(numArr);

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arr1 = [1, 2, 3, 5, 8, 9, 10];
const digitArr = arr1.map( elem => ({
  digit: elem,
  odd: Boolean(elem % 2)
}));

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

const arr2 = [12, 4, 50, 1, 0, 18, 40];
const includeZero = arr2.some( elem => elem === 0 );

// 3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. 
// Если да - вернуть true

const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const lessThreeSymbol = arr3.every( elem => elem.length > 3);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. 
// Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

const arr4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
              {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
              {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function createNewSentence(arr) {

  let cloneArr = arr.slice();
  cloneArr.sort((prevIndex, nextIndex) => prevIndex.index - nextIndex.index);
  return cloneArr.reduce((acc, {char} ) => acc + char, '')
}

console.log(createNewSentence(arr4));

// 5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ];
arr5.sort((prevArr, nextArr) => prevArr.length - nextArr.length);

console.log(arr5);

// 6. Есть массив объектов:
// Отсортировать их по возрастающему количеству ядер (cores).

let computers = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
]

computers.sort((prevComp, nextComp) => (prevComp.info.cores - nextComp.info.cores));
console.log(computers);

// 7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(products, start, finish) {
  let rightProd = products.filter(({price}) => (price >= start && price <= finish));
  return rightProd.sort((prev, next) => prev.price - next.price);
}

console.log(filterCollection(products, 15, 30));

let id = Symbol("id");
let idAgain = Symbol("id");

// console.log(id === idAgain);

const user = {
    name: "Evgen",
    age: 33,
    //Symbol используется в качестве свойства объекта с помощью []
    [id]: 123,

    //Symbol для не явного преобразования объекта к String или Number
    [Symbol.toPrimitive](hint) {
        console.log("hint", hint);
        // return hint == "string" ? this.name : this.age;
        return JSON.stringify(this);
    }
};

//Примитивы в глобальной области видимости
const name = Symbol.for("Evgen");
const firstname = Symbol.for("Evgen");

// console.log(name === firstname);

// console.log(Symbol.keyFor(firstname));

// for (let key in user) console.log(key);

console.log(String(user));
// console.log(Number(user));

//Создание итерируемого обьекта с помощью Symbol.iterator
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    //Метод next должен возвращать value и done
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let i of "test") {
    console.log(i);
}

let iterable = {
    [Symbol.iterator]() {
        let num = 0;
        const iterator = {
            next() {
                return {
                    value: ++num,
                    done: false,
                };
            },
        };

        return iterator;
    }
};

const product = {
    company: "Xiaomi",
    category: "Phone",
    name: "Readmi Note 12 Pro",
    year: 2022,
    price: 350,
};

product[Symbol.iterator] = function() {
    const entries = Object.entries(product);
    let index = 0;

    const iterator = {
        next() {
            const step = {
                value: entries[index],
                done: index >= entries.length,
            };

            index += 1;

            return step;
        },
    }

    return iterator;
};

console.log([...product]);

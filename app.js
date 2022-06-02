// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

let rectangle = {
    width: 2, 
    height: 4,
    getSquare: function() {
        return this.width * this.height
    }
}

console.log(rectangle.getSquare());

/*2. Создать объект, у которого будет цена товара и его скидка, а также
    два метода: для получения цены и для расчета цены с учетом скидки:
    const price = {
    price: 10,
    discount: '15%',
    ... };

    price.getPrice(); // 10
    price.getPriceWithDiscount(); // 8.5
*/

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {return this.price;},
    getPriceWithDiscount: function() {
        discountInt = parseInt(this.discount);
        return this.price - (this.price * discountInt / 100);
    },
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

/*3. Создать объект, у которого будет поле высота и метод “увеличить
    высоту на один”. Метод должен возвращать новую высоту:
    object.height = 10;
    object.inc(); // придумать свое название для метода
    object.height; // 11;
*/

const obj = {
    height: 3,
    getHeightPlusOne: function() {
        return ++this.height ;
    }
}

console.log(obj.height);
console.log(obj.getHeightPlusOne());
console.log(obj.height);

/* 4. Создать объект “вычислитель”, у которого есть числовое свойство
    “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
    Методы можно вызывать через точку, образуя цепочку методов:
    const numerator = {
        value: 1,
        double: function () {...},
        plusOne: function () {...},
        minusOne: function () {...},
    }
    numerator.double().plusOne().plusOne().minusOne();
    numerator.value // 3
*/

const numerator = {
    value: 3,
    double: function () { 
        this.value *= this.value; 
        return this; 
    },
    plusOne: function () { 
        this.value = ++this.value ; 
        return this; 
    },
    minusOne: function () { 
        this.value = --this.value; 
        return this; 
    },
}

numerator.double().plusOne().plusOne().minusOne();
numerator.double().plusOne().minusOne();
console.log(numerator.value);


// 5. Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const product = {
    price: 17,
    quantityOfProduct : 5,
    getPriceQuantities: function () {
        return this.price * this.quantityOfProduct;
        
    }
};

// 6. Создать объект из предыдущей задачи. 
// Создать второй объект, который описывает количество деталей и цену за одну деталь. 
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого “позаимствуйте” метод из предыдущего объекта.

product.getPriceQuantities();

const detail = {
    price: 6,
    quantityOfDetail: 50,
};

let getPrice = product.getPriceQuantities.call(detail);

console.log(getPrice);

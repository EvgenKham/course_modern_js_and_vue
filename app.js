// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
// 1. Создать объект с полем product, равным ‘iphone’
 const supply = {
     product: 'iphone'
 }
 console.log(supply.product);

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
supply.price = 1000;
supply.currency = 'dollar';
console.log(supply.price, supply.currency);

// 3. Добавить поле details, которое будет содержать объект с полями model и color
supply.details = {
    model: "bmw",
    color: "black"
};
console.log(supply);

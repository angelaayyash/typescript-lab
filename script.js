"use strict";
let mountains = [
    { name: "Kilamanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
let findNameOfTallestMountain = (mountainList) => {
    let tallestMountain = 0;
    let mountainName = "";
    mountainList.forEach(mountain => {
        if (mountain.height > tallestMountain) {
            tallestMountain = mountain.height;
            mountainName = mountain.name;
        }
    });
    return mountainName;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "vibrator", price: 150 },
    { name: "chocolate", price: 20 },
    { name: "roses", price: 60 }
];
let calcAverageProductPrice = (productList) => {
    let totalAmount = 0;
    products.forEach(product => {
        totalAmount += product.price;
    });
    return totalAmount / productList.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
let calcInventoryValue = (inventoryList) => {
    let totalPrice = 0;
    let totalQuantity = 0;
    inventoryList.forEach(item => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValue(inventory));

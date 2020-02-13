interface Mountain {
  name: string;
  height: number;
}
interface Product {
  name: string;
  price: number;
}
interface InventoryItem {
  product: Product;
  quantity: number;
}

let mountains: Mountain[] = [
  { name: "Kilamanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameOfTallestMountain = (mountainList: Mountain[]): string => {
  let tallestMountain: number = 0;
  let mountainName: string = "";
  mountainList.forEach(mountain => {
    if (mountain.height > tallestMountain) {
      tallestMountain = mountain.height;
      mountainName = mountain.name;
    }
  });
  return mountainName;
};

console.log(findNameOfTallestMountain(mountains));

let products: Product[] = [
  { name: "vibrator", price: 150 },
  { name: "chocolate", price: 20 },
  { name: "roses", price: 60 }
];

let calcAverageProductPrice = (productList: Product[]): number => {
  let totalAmount = 0;
  products.forEach(product => {
    totalAmount += product.price;
  });
  return totalAmount / productList.length;
};

console.log(calcAverageProductPrice(products));

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let calcInventoryValue = (inventoryList: InventoryItem[]): number => {
  let totalPrice: number = 0;
  let totalQuantity: number = 0;
  inventoryList.forEach(item => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};

console.log(calcInventoryValue(inventory));

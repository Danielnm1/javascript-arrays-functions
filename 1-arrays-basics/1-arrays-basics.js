const fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
    const vegetable = prompt(`Enter vegetable ${i + 1}:`);
    vegetables.push(vegetable);
}

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

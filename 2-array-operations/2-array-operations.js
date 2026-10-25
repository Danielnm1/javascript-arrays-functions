
const numbers = [];

for (let i = 0; i < 5; i++) {
    const input = prompt(`Enter number ${i + 1}:`);
    const number = Number(input);

    if (input !== null && input.trim() !== "" && Number.isFinite(number)) {
        numbers.push(number);
    } else {
        alert("Please enter a valid number. Try again.");
        i--;
    }
}

console.log("Original numbers:", numbers);

const searchInput = prompt("Enter a number to search for:");
const searchNumber = Number(searchInput);

if (
    searchInput !== null &&
    searchInput.trim() !== "" &&
    Number.isFinite(searchNumber) &&
    numbers.includes(searchNumber)
) {
    console.log(`${searchNumber} was found in the array.`);
} else {
    console.log(`${searchInput} was not found in the array.`);
}

const removedNumber = numbers.pop();
console.log("Removed last number:", removedNumber);
console.log("Array after pop():", numbers);

numbers.sort((a, b) => a - b);
console.log("Numbers sorted in ascending order:", numbers);

document.getElementById("output").textContent =
    `Sorted numbers: ${numbers.join(", ")}`;

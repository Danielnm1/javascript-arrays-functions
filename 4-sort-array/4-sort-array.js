
function sortArray(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

const numbers = [8, 3, 12, 1, 5, 10];

const sortedNumbers = sortArray(numbers);

console.log("Original array:", numbers);
console.log("Sorted array:", sortedNumbers);

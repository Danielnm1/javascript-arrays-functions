function sortArray(numbers, order) {
    const sortedNumbers = [...numbers];

    if (order === "asc") {
        return sortedNumbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return sortedNumbers.sort((a, b) => b - a);
    } else {
        throw new Error('Order must be either "asc" or "desc".');
    }
}

const firstArray = [8, 3, 12, 1, 5];
const secondArray = [20, 4, 15, 2, 9];

console.log("First array:", firstArray);
console.log("Ascending:", sortArray(firstArray, "asc"));
console.log("Descending:", sortArray(firstArray, "desc"));

console.log("Second array:", secondArray);
console.log("Ascending:", sortArray(secondArray, "asc"));
console.log("Descending:", sortArray(secondArray, "desc"));

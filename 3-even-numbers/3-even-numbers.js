
const numbers = [];

while (true) {
    const input = prompt('Enter a number or type "done" to finish:');

    if (input === null || input.trim().toLowerCase() === "done") {
        break;
    }

    const number = Number(input);

    if (input.trim() !== "" && Number.isFinite(number)) {
        numbers.push(number);
    } else {
        alert('Please enter a valid number or type "done".');
    }
}

console.log("All numbers:", numbers);

const evenNumbers = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log("Even numbers:", evenNumbers);

const output = document.getElementById("output");

if (evenNumbers.length === 0) {
    output.textContent = "Even numbers: None";
} else {
    output.textContent = `Even numbers: ${evenNumbers.join(", ")}`;
}

// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number ** 2; // Square even numbers
        } else {
            return number * 3; // Triple odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Both arrays must have the same length");
    }
    
    return strings.map((str, index) => {
        const number = numbers[index];
        if (number % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Example usage
const inputArray = [1, 4, 9, 16, 25];
const processedArray = processArray(inputArray);
console.log(processedArray);

const stringArray = ["Studying", "Really", "Is", "a", "Pain"];
const formattedStrings = formatArrayStrings(stringArray, processedArray);
console.log(formattedStrings); 
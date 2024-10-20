document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get input values
    const firstNumber = parseFloat(document.getElementById("first-number").value);
    const secondNumber = parseFloat(document.getElementById("second-number").value);
    const operation = document.querySelector('input[name="operation"]:checked');

    // Check if an operation is selected
    if (!operation) {
        alert("Please select an operation.");
        return;
    }

    let result;

    // Perform the selected operation
    switch (operation.value) {
        case "addition":
            result = firstNumber + secondNumber;
            break;
        case "subtraction":
            result = firstNumber - secondNumber;
            break;
        case "multiplication":
            result = firstNumber * secondNumber;
            break;
        case "division":
            // Check for division by zero
            if (secondNumber === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    // Display the result
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Result: ${result}`;
    resultsDiv.style.display = "block"; // Show results div
});

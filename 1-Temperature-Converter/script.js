// JavaScript Code (script.js)
function celsiusToFahrenheit(input) {
    return (input * 9 / 5) + 32;
}

function fahrenheitToCelsius(input) {
    return (input - 32) * 5 / 9;
}

function handleRadioInput() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const conversionType = document.getElementsByName('conversionType');
    let result = '';

    // Convert the input to a number
    const temperature = parseFloat(temperatureInput);

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    // Determine which conversion is selected
    for (let i = 0; i < conversionType.length; i++) {
        if (conversionType[i].checked) {
            if (conversionType[i].value === 'Celsius to Fahrenheit') {
                result = celsiusToFahrenheit(temperature).toFixed(2) + " °F";
            } else if (conversionType[i].value === 'Fahrenheit to Celsius') {
                result = fahrenheitToCelsius(temperature).toFixed(2) + " °C";
            }
            break;
        }
    }

    // Display the result
    document.getElementById('result').innerText = "Converted Temperature: " + result;
}

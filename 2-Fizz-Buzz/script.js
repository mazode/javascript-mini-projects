document.getElementById("startButton").addEventListener("click", function() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    for(let i = 1; i <= 100; i++) {
        const result = document.createElement("div");

        if(i % 3 === 0 && i % 5 === 0) {
            result.textContent = 'FizzBuzz';
            result.classList.add("fizzbuzz");
        } else if(i % 3 === 0) {
            result.textContent = 'Fizz';
            result.classList.add("fizz");
        } else if(i % 5 === 0) {
            result.textContent = 'Buzz';
            result.classList.add("buzz");
        } else {
            result.textContent = i;
        }

        resultsDiv.appendChild(result);
    }
}); 
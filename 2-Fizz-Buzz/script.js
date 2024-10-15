function fizzBuzzProgram(input) {
    let result = '';

    for(let i = 0; i < input.length; i++) {
        if(input % 3 == 0 && input % 5 == 0) {
            return 'FizzBuzz';
        } else if(input % 3 == 0) {
            return 'Fizz';
        } else if(input % 5 == 0) {
            return 'Buzz';
        }
    }
}
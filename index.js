function isPrime(num) {

    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {

            return false; 

        }

    }

    return false; 
    //mistake make this true

}

const userInput = 11;

console.log(`Is ${userInput} a prime number? `, isPrime(userInput));
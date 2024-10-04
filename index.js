function isPrime(num) {

    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {

            return false; 

        }

    }

    return true; ""
    //mistake make this true

}

const userInput = 11;

console.log(`Is ${userInput} a prime number? `, isPrime(userInput));



appId: 661052

accessKey: fcbXZ0PYaEjiB2yLwgVlneCBuqM66PdIXtbkvMCZF-4

secret_key: YPsVSB1CSwvdk36Noby5C-KvATAH_HYLPoig6bx52uA

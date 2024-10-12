function fib(n){

    let arrayFib = [0,1];

    for (let i = 0; i < n - 2; i++){

        let lastNum = arrayFib[arrayFib.length - 1];
        let second2lastNum = arrayFib[arrayFib.length - 2];

        let sum = lastNum + second2lastNum;

        arrayFib.push(sum);

    }
    return arrayFib;
}

let fibo = fib(8);

console.log(fibo);
function fibRec(n){

    if (n === 1){
        return [0]
    } else if (n === 2){
        return [0,1]
    }

    let arrayFib = fibRec(n-1);

    let sum = arrayFib[arrayFib.length - 1] + arrayFib[arrayFib.length - 2];

    arrayFib.push(sum);

    return arrayFib;

}

console.log(fibRec(8))

/*
   fibRec(4)
   arrayFib = fibRec(3)
       fibRec(3)
       arrayFib = fibRec(2)
           fibRec(2) => [0,1]
           
       fibRec(3) => [0,1,1]
   fibRec(4) => [0,1,1,2]    

*/
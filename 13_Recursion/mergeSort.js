let array = [3, 2, 1, 13, 8, 5, 0, 1];


//merge two sorted arrays
function merge(leftArray, rightArray){

    let mergedArray = [];
    let l = 0;
    let r = 0;

    while (l < leftArray.length && r < rightArray.length){
        if (leftArray[l] < rightArray[r]){
            mergedArray.push(leftArray[l]);
            l++;
        }
        else{
            mergedArray.push(rightArray[r]);
            r++;
        }   
    }
    while (l < leftArray.length){
        mergedArray.push(leftArray[l]);
        l++;
    }
    while (r < rightArray.length){
        mergedArray.push(rightArray[r]);
        r++;
    }

    return mergedArray;
}

function mergeSort(array){

    if (array.length <= 1){
        return array;
    }

    let mid = Math.floor(array.length / 2);

    let leftPart = array.slice(0, mid);
    let rightPart = array.slice(mid);

    leftPart = mergeSort(leftPart);
    rightPart = mergeSort(rightPart);

    return merge(leftPart,rightPart);
}

let sortedArray = mergeSort(array);
console.log(sortedArray);

    let count = 0;
    let arr = [2,6,87,1,0,52,42,1,5,7];
    quickSort(arr,0,arr.length -1);



function sort (arr) {
   quickSort(arr,0,arr.lenght -1);
}

function quickSort(arr, countLow, countHigh) {
    if (countLow < countHigh) {
        let pivotIndex = findPivotIndex(arr, countLow, countHigh);
        quickSort(arr, countLow, pivotIndex -1);
        quickSort(arr, pivotIndex + 1, countHigh);
    }
}

function findPivotIndex(arr, countLow, countHigh) {
    let pivot = arr[countHigh];
    let pivotIndex = countLow - 1;
    for (let i = countLow; i < countHigh; i++) {
        count++;
        if (arr[i] <= pivot) {
            pivotIndex++;
            let tmp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = tmp;
        }
        
    }
    let tmp = arr[pivotIndex + 1];
    arr[pivotIndex + 1] = arr[countHigh];
    arr[countHigh] = tmp;

    return pivotIndex + 1;
}
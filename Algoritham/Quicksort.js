function partition(arr, low, high) {

    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            //swap
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }
    i++;
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;

    return i;
}

function quicksort(arr, low, high) {
    if (low <= high) {
        let pi = partition(arr, low, high);

        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }

}

const arr = [10,80,50,20,90,40];

quicksort(arr, 0, arr.length - 1);
console.log(arr);
function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

}

const arr = [40, 10, 30, 67, 99, 22];
bubble(arr);
console.log("sorted array is: ", arr);
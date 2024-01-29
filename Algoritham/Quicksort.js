function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];
    

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    quicksort(left);
    quicksort(right);
    
    console.log(left, right);
   return newarray = [...left, pivot, ...right]
}

const arr = [6,8,2,9,5];
quicksort(arr);
console.log(newarray);
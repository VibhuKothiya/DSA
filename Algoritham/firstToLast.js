const arr = [11,22,33,44,55,66];
let element = arr[0];

let position = 7;

for(let i =0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
        // arr1[i] = arr[i];
        arr[position-1] = element;
        
}
arr.length = arr.length-1
console.log(arr);
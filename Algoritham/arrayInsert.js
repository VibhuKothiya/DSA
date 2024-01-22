
const arr = [1,2,3,4,5,6];
let position = 5;
let element = 88;

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for(let j = arr.length; j >= position; j--){
    // console.log(arr[j]);
    arr[j] = arr[j-1];   

}
arr[position-1] = element;
console.log(arr);
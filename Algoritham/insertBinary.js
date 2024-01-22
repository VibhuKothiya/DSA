let arr = [9,6,3,1,2,4,5,8];
console.log(arr);
let element1 = 11;
let element2 = 22;
let position = 3;
let size = arr.length-1;

for(let i=arr.length+1; i >= position; i--){
        arr[i] = arr[size];
        size--;
}
arr[position] = element1;
    position++;
arr[position] = element2;
console.log(arr);



function DeletEle(arr, element){
let index = 0;

for(let i = 0; i < arr.length-1; i++){    
    if(arr[i] == element){
        index = i;        
        break;
    }        
}
if(index != 0){
for(let j = index; j < arr.length-1; j++){
        arr[j] = arr[j+1]
    }
}

arr.length = arr.length - 1;
return arr;

}

const arr = [11,22,33,44,55,66];
let removeEle = 33;

let result = DeletEle(arr, removeEle);
console.log(result);



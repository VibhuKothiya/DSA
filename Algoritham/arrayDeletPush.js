
function removeElement(arr, elementToremove, insertelement){
let index = 0;

for(let i=0; i < arr.length; i++){    
        if(arr[i] == elementToremove){
            index = i;
            arr[i] = insertelement;  
            break;  
        }        
}
arr[arr.length] = elementToremove;

return arr;
}

let arr = [44,55,66,88,90,33];
let elementToremove = 66;
let insertelement = 10;
let result = removeElement(arr, elementToremove, insertelement);

console.log(result);
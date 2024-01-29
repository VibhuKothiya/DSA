function Subarr(arr, start, subArr){
    if(start == arr.length){
        return subArr;
    }

    for(let i = start; i < arr.length; i++){
        let sub = arr.slice(start, i+1);
        subArr.push(sub);
    }
    return Subarr(arr, start + 1, subArr);
}

const arr = [3,5,8,-1,0,-6,4];
let start = 0; 
let subArr = [];
Subarr(arr, start, subArr);
console.log(subArr);
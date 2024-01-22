const arr1 = [1,2,4,8];
const arr2 = [1,3,5,10];
const FinalArr = [];

let temp = 0;

for(let i = 0; i < arr1.length; i++){
    FinalArr[i] = arr1[i];
}
for(let i = 0; i < arr2.length; i++){
    FinalArr[i + arr1.length] = arr2[i];
}

for(let i = 0; i < FinalArr.length; i++){
    for(let j = i+1; j < FinalArr.length; j++){
        if(FinalArr[i] > FinalArr[j]){
            temp = FinalArr[i];
            FinalArr[i] = FinalArr[j];
            FinalArr[j] = temp;
            
        }
    }
}

console.log(FinalArr);
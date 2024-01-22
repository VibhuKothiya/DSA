let arr = [9,23,10,8,5,6];
let target = 12;
flag = 0;

for(let i=0; i < arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
        if(arr[i] + arr[j] == target){
            console.log(i,j);
            flag = 1;
        }
    }
}
if(flag == 0){
    console.log("not found");
}
const arr = [1,2,4,1,3,5,6,8,3,5,6,9];
const Newarr = [];
let count = 0; 
flag = 0;

for(let i=0; i < arr.length; i++){
    for(let j = 0; j < Newarr.length; j++){
        if(arr[i] == Newarr[j]){
            
            flag = 1;
        }
        
    }
    count++;
    if(count == 1 && flag == 0){
        let len = Newarr.length;

        Newarr[len] = arr[i]
    }
    count = 0; 
    flag = 0;
    
}
console.log(Newarr);

function merge(left, right){
  // console.log(left,right);
  // let i=0, j=0;
  let newArr = [];
  while(left.length && right.length){
    if(left[0] <= right[0]){      
      newArr.push(left.shift());
        // i++;                
    }
    else{
      newArr.push(right.shift());
      // console.log();
        
               
    }
  }
return [...newArr, ...left, ...right] 
  
  // return newArr;
}

function divide(arr){
  // console.log(arr.length, si, ei);
  if(arr.length < 2){
    return arr;
  }
  let mid = Math.floor(arr.length/2); 
// console.log(mid);
  
  // let leftArr= [];
  // for(let i=0; i <= mid; i++){
  //   leftArr.push(arr[i]);
  // }
  // // console.log(leftArr);
  // let lsi = 0;
  // let lei = leftArr.length-1;  

  // let rightArr= [];
  // for(let j = mid+1; j <= arr.length-1; j++){
  //   rightArr.push(arr[j]);
  // }

  // let rsi = 0;
  // let rei = rightArr.length-1;

  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  
    
  // console.log(leftArr, "left");
  // console.log(rightArr, "right");
  // console.log(leftArr);
  return merge(divide(leftArr), divide(rightArr));    
    
}

const arr = [4,3,6,8,9,1];
// let si = 0;
// let ei = arr.length-1;
// console.log(ei);
console.log(divide(arr));

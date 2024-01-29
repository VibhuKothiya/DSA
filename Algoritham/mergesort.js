function divide(arr){
  if(arr.length < 2){
      return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = [];
  let right = [];

  for(let i = 0; i < mid; i++){
      left.push(arr[i]);
  }
  for(let i = mid; i < arr.length; i++){
    right.push(arr[i]);
  }
  
    // console.log(divide(left));
    // console.log(divide(right));
    return merge(divide(left),divide(right));
    
}
function merge(left, right){
  console.log(left,right);
  let temp = [];
  let i = 0; 
  let j = 0;

  while(i < left.length && j < right.length){
      if(left[i] < right[j]){
      temp.push(left[i]);
      i++;
  }
  else{
    temp.push(right[j]);
    j++;
  }
}
while(i < left.length){
  temp.push(left[i]);
  i++;
}

while(j < right.length){
  temp.push(right[j]);
  j++;
}
return temp;
}


const arr = [9,6,4,2];
let result = divide(arr);
console.log(result, "sorted");
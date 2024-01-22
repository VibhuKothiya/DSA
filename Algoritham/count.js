function mergeSort(arr) {
   if (arr.length <= 1) {
       return arr;
   }

   const middle = Math.floor(arr.length / 2);
   // console.log(middle);
   const leftHalf = arr.slice(0, middle);
   const rightHalf = arr.slice(middle);
   console.log(leftHalf);

   return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
   console.log(left,right);
   let result = [];
   let leftIndex = 0;
   let rightIndex = 0;

   while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
           result.push(left[leftIndex]);
           leftIndex++;
       } else {
           result.push(right[rightIndex]);
           rightIndex++;
       }
   }

   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

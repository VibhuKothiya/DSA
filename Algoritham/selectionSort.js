function selection_sort(arr){
    var min, temp;
    for(let i = 0; i < arr.length-1; i++){
         min = i;
         for(let j = i; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
         }
         //swap
         temp = arr[min];
         arr[min] = arr[i];
         arr[i] = temp;
         
    }

}
//Worst case, Avg case & best case : O(n^2)
const arr = [22,45,9,6,1,10];
selection_sort(arr);
console.log(arr);
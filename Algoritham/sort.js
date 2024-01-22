/* -------------------------------- find-max -------------------------------- */

// const arr = [1, 2, 3, 36, 5, 6, 8];
// let max = arr[0];
// for(let i=0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// };
// console.log(max);


/* -------------------------------- find-min -------------------------------- */

// const arr = [45, 78,23,90,67,22, 11, 5];
// let min = arr[0];
// for(let i=0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log(min);


/* --------------------------------- sorting -------------------------------- */
const arr = [12, 4, 7, 8, 1, 9, 2, 3];

for(let i=0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = 0;
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
    }
}

console.log(arr);


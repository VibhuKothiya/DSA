const arr = [2, 3, -4, 1, -2, -1, 5, 3];

/* ------------------------------ First method ------------------------------ */

// let max = 0;

// for(let i = 0; i <= arr.length-1; i++){
//     for(let j = i; j <= arr.length-1; j++){
//         let sum = 0;
//         for(let k = i; k <= j; k++){
//                 sum+=arr[k];            
//         }
//         if(sum > max){
//             max = sum;
//         }
//     }
// }
// console.log(max);

/* ------------------------------ Second method ------------------------------ */

// let max = 0;

// for(let i = 0; i <= arr.length-1; i++){
//     let sum = 0;
// for(let j = i; j <= arr.length-1; j++){
//         sum+=arr[j];          
//         if(sum > max){
//             max = sum;
//         }
//     }
// }
// console.log(max, "is max");

/* ------------------------------ Kadane’s Algorithm ------------------------------ */

let max = 0;
let sum = 0;

for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum < 0){
            sum = 0;
        }

        if(sum > max){
            max = sum;
        }
}
console.log(max, "is maximum sum");




function maximun(arr, element, Lb, Ub){
    let mid = Math.floor((Lb + Ub)/2);
    // console.log(Lb, Ub);
    if(Lb > Ub){
        console.log(Lb);
        return false;
    }
    if(arr[mid] === element){
        console.log(arr[mid]);
        return true;
    }
    if(arr[mid] > element){
        console.log(arr[mid]);
        return maximun(arr, element, Lb, mid-1);
    }
    else{
        return maximun(arr, element, mid+1, Ub);
    }

}

let arr = [1,3,5,9,12,15,17];
let Lb = 0; 
let Ub = arr.length-1;
let element = 17;
if(maximun(arr, element, Lb, Ub)){
    console.log(element, "Element is found");
}
else{
    console.log(element, "Element is not found");
};

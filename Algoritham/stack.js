const stack = [];
let size = 5;

function print(stack){
    if(stack.length === 0){
        console.log("stack is underflow");
    }
    else{
        console.log(stack);
    }

}
// print(stack);
function add(stack, element, size){
    if(stack.length > size){
        console.log("Stack is overflow");
    }
    else{
        stack[stack.length] = element;
    }
}
function remove(stack){
    if(stack.length === 0){
        console.log("Stack is empty");
    }
    else{
        stack.length = stack.length-1
    }
}

// add(stack, 10, size);
// add(stack, 2, size);
// add(stack, 7, size);
// add(stack, 9, size);
// add(stack, 9, size);
remove(stack);
remove(stack);
remove(stack);

print(stack);
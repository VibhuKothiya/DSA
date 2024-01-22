const arr = "hi Vibhuti".split("");


function rev(arr){
        let size = arr.length;
        let top = -1;
        let stack = [];

            
        for(let i = 0; i <= size; i++){
                if(top > size){
                      console.log("Stack is Overflow");    
                //       return false;      
                }
                else{
                        ++top;
                        stack[top] = arr[i];
                        // return true;
                }


        }

        // console.log(stack);
        for(let i = 0; i <= size; i++){
                if(top < 0){
                        console.log("Stack is underflow");
                }
                else{
                        top--;
                         arr[i] = stack[top];
                

                }
                }
        }
rev(arr);
console.log(arr);
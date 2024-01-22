let queue = [];
let head = 0;
let tail = queue.length-1;
let size = 6;

function add(queue, element){
    if(queue.length > size){
        console.log("Sorry");
    }
    else{
        queue.push(element);
        console.log(queue);
    }
    tail = queue.length-1;
}


function remove(){
   
    if(head == 0 && tail == -1){
        console.log("Queue is empty", queue);
    }
    else{
        for(let i=0; i<queue.length-1; i++){
            queue[i] = queue[i+1];
        }
        queue.length = queue.length-1;
        
        console.log(queue);
    }
    
}
add(queue, 88);
// console.log(queue.length);
// add(queue, 99);
// add(queue, 11);
remove();
remove();
// remove();
// remove();
// remove();
// remove();
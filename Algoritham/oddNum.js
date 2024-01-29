class stack{
    constructor(){
        this.Stack = [];
        this.oddStack = [];
        this.size = 6;
    }
    add(ele){
        if(this.Stack.length > 6){
            console.log("Stack is overflow");
        }
        else{
            this.Stack.push(ele);
        }
        
    }

    remove(){
        if(this.Stack.length == 0){
            console.log("Stack is empty");
        }
        else{
            this.Stack.pop();
        }
    }

    odd(){
        
        while(this.Stack.length > 0){
            let element = this.Stack.pop();
            if(element % 2 !== 0){
                this.oddStack.push(element);
            }
        }
        
    }
}

let obj = new stack();
obj.add(66);
obj.add(11);
obj.add(55);
obj.add(99);
obj.add(33);
obj.add(0);
obj.odd();

console.log(obj.oddStack);


    
     


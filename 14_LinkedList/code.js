class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(node){
        if(this.head === null){
            this.head = node;
        }
        else{
            let ptemp = this.head;
            while(true){
                if(ptemp.nextNode === null){
                    ptemp.nextNode = node;
                    break;
                }
                else{
                    ptemp = ptemp.nextNode;
                }
            }
        }
    }
    prepend(node){
        if(this.head === null){
            this.head = node;
        }
        else{
            let ptemp = this.head;
            this.head = node;
            node.nextNode = ptemp;
        }

    }

    size(){
        let counter = 0;

        if(this.head === null){
            console.log(counter)
        }
        else{
            let ptemp = this.head;
            while(true){
                if(ptemp.nextNode === null){
                    counter++;
                    console.log(counter)
                    break;
                }
                else{
                    ptemp = ptemp.nextNode;
                    counter++;
                }
            }
        }
    }

    displayHead(){
        console.log(`Head: ${this.head.value}`)
    }

    displayTail(){


        if(this.head === null){
            console.log("No tail")
        }
        else{
            let ptemp = this.head;
            while(true){
                if(ptemp.nextNode === null){
                    console.log(`Tail: ${ptemp.value}`)
                    break;
                }
                else{
                    ptemp = ptemp.nextNode;
                }
            }
        }
    }

    at(index){
        let counter = 0;

        if(this.head === null){
            console.log("Empty list")
        }
        else{
            let ptemp = this.head;
            while(true){
                if(parseInt(index) === counter){
                    console.log(`At index ${index}: ${ptemp.value}`)
                    break;
                }
                else{
                    ptemp = ptemp.nextNode;
                    counter++;
                }
            }
        }
    }

    pop(){
        let cur = this.head;
        let prev = null;

        while(cur.nextNode !== null){
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
        console.log(cur.value)
    }

    str(){
        let string = "";
        let ptemp = this.head;

        while (ptemp !== null){
            string += `( ${ptemp.value} ) -> `;
            ptemp = ptemp.nextNode;
        }
        string += " null";
        console.log(string);
    }

}


let dog = new Node("dog");
let cat = new Node("cat");
let parrot = new Node("parrot");
let snake = new Node("snake");
let turtle = new Node("turtle");
let nacho = new Node("nacho");

let list = new LinkedList();

list.append(dog);
list.append(cat);
list.append(parrot);
list.append(snake);
list.prepend(turtle);
list.prepend(nacho);

list.str();
list.pop();
list.str();

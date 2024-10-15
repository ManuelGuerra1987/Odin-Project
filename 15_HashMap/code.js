class Node {
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
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

    keyInList(key){
        let ptemp = this.head;
        while(ptemp !== null){
            if (ptemp.key === key){
                return true;
            }
            ptemp = ptemp.nextNode;
        }
        return false;
    }
    update(key,value){
        let ptemp = this.head;

        while(ptemp !== null){
            if(ptemp.key === key){
                ptemp.value = value;
                return;
            }
            ptemp = ptemp.nextNode;
        }

    }

}


class HashMap{
    constructor(){
        this.length = 20;
        this.buckets = new Array(this.length).fill(null);
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
    
        hashCode = hashCode % 20;
     
        return hashCode;
      }

      set(key,value){

        let node = new Node(key,value);
        let index = this.hash(key);

        if (this.buckets[index] === null){
            let newLinkedList = new LinkedList();
            newLinkedList.prepend(node);
            this.buckets[index] = newLinkedList;
        }
        else{
            let linkedList = this.buckets[index];
            
            if (linkedList.keyInList(key)){
                linkedList.update(key,value);
            }
            else{
                linkedList.prepend(node);
            }
        }
        
      }

      get(key){

        let index = this.hash(key);
        let linkedList = this.buckets[index];

        if (linkedList === null) {
            return null;
        }

        let ptemp = linkedList.head;

        while(ptemp !== null){
            if(ptemp.key === key){
                return ptemp.value;
            }
            ptemp = ptemp.nextNode;
            
        }
        return null;
      }

      has(key){

        let index = this.hash(key);
        let linkedList = this.buckets[index];

        if (linkedList === null) {
            return false;
        }

        let ptemp = linkedList.head;

        while(ptemp !== null){
            if(ptemp.key === key){
                return true;
            }
            ptemp = ptemp.nextNode;
            
        }
        return false;

      }


}



let hashmap = new HashMap();

hashmap.set("name","Nacho");
hashmap.set("edad","37");
hashmap.set("fruta","banana");

console.log(hashmap.has("frutas"));








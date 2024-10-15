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

        const firstChar = key.charAt(0).toLowerCase();
        const hashCode = firstChar.charCodeAt(0) - 'a'.charCodeAt(0);

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

      remove(key){

        let index = this.hash(key);
        let linkedList = this.buckets[index];

        //1er case: empty bucket
        if (linkedList === null) {
            return false;
        }
        //2nd case: key is in first node
        if (linkedList.head.key === key){
            linkedList.head = linkedList.head.nextNode;
            return true;
        }
        
        //3rd case: key in the middle-end
        let curr = linkedList.head;
        let prev = linkedList.head;
        curr = curr.nextNode;

        while(curr !== null){
            if(curr.key === key){
                prev.nextNode = curr.nextNode;
                return true;
            }
            curr = curr.nextNode;
            prev = prev.nextNode;
        }
        return false;
      }

      keys(){

        let keysList = []
        for (let i = 0; i < this.length; i++){

            if(this.buckets[i] !== null){
                let ptemp = this.buckets[i].head;
                while(ptemp !== null){
                    keysList.push(ptemp.key);
                    ptemp = ptemp.nextNode;
                }
            }
        }
        return keysList;
      }

      values(){

        let valuesList = []
        for (let i = 0; i < this.length; i++){

            if(this.buckets[i] !== null){
                let ptemp = this.buckets[i].head;
                while(ptemp !== null){
                    valuesList.push(ptemp.value);
                    ptemp = ptemp.nextNode;
                }
            }
        }
        return valuesList;
      }

      entries(){

        let entries = []
        for (let i = 0; i < this.length; i++){

            if(this.buckets[i] !== null){
                let ptemp = this.buckets[i].head;
                while(ptemp !== null){
                    let entry = [ptemp.key,ptemp.value];
                    entries.push(entry);
                    ptemp = ptemp.nextNode;
                }
            }
        }
        return entries;
      }


}



let hashmap = new HashMap();

hashmap.set("name","Nacho");
hashmap.set("edad","37");
hashmap.set("fruta","banana");
hashmap.set("fruta2","manzana");
hashmap.set("fruta3","anana");

hashmap.remove("fruta2");
hashmap.remove("fruta");
console.log(hashmap.entries());
hashmap.remove("edad");
console.log(hashmap.entries());







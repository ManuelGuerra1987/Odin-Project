class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree {
    constructor(array){
        const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(array){
        //todo
    }
}
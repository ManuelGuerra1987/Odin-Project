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

        if (array.length === 0) return null;

        const midpoint = Math.floor(array.length / 2);
        const newNode = new Node(array[midpoint]);
        newNode.leftChild = this.buildTree(array.slice(0, midpoint));
        newNode.rightChild = this.buildTree(array.slice(midpoint + 1));
        return newNode;

    }
}

let arr = [1,2,3,4,5,6,7,8,9];

let test = new Tree(arr);

let nodex = test.root;

function prettyPrint (nodex, prefix = "", isLeft = true) {
    if (nodex === null) {
      return;
    }
    if (nodex.rightChild !== null) {
      prettyPrint(nodex.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${nodex.value}`);
    if (nodex.leftChild !== null) {
      prettyPrint(nodex.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }


  prettyPrint(nodex);
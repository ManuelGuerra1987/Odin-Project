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

        let mid = Math.floor(array.length / 2);
        let root = new Node(array[mid]);
        let queue = [{node: root, start: 0, end: array.length-1}];
        
        while (queue.length > 0){

          let {node, start, end} = queue.shift();
          let mid = Math.floor((start + end) / 2);

          //check if left subtree exists
          if (start < mid){
            let leftMid = Math.floor((start + mid - 1) / 2);
            node.leftChild = new Node(array[leftMid]);
            queue.push({node: node.leftChild, start: start, end: mid - 1});
          }

          //check if rigth subtree exists
          if (end > mid){
            let rightMid = Math.floor((mid+1+end) / 2);
            node.rightChild = new Node(array[rightMid]);
            queue.push({node: node.rightChild, start: mid + 1, end: end});
          }
        }

        return root;

    }

    insert (value){

      let currNode = this.root;

      while (true){

        if (value > currNode.value && currNode.rightChild !== null){
          currNode = currNode.rightChild;
        }

        else if (value > currNode.value && currNode.rightChild === null){
          let newNode = new Node(value);
          currNode.rightChild = newNode;
          break;
        }
        else if (value < currNode.value && currNode.leftChild !== null){
          currNode = currNode.leftChild;
        }
        else if (value < currNode.value && currNode.leftChild === null){
          let newNode = new Node(value);
          currNode.leftChild = newNode;
          break;
        }
        else{
          break;
        }
      }

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


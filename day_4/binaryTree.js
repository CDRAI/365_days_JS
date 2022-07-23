// depth first travesal in a binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


const depthTraversalFunc = (root) => {

if(root === null)
return []



 const leftValues =  depthTraversalFunc(root.left)

const rightValues =  depthTraversalFunc(root.right)


return [root.val,...leftValues,...rightValues]



};

const returnValue = depthTraversalFunc(a);

console.log(returnValue)
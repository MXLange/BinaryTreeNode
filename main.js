import Node from "./Node.js"
import { findSmaller, findBiggest, findPrevious, findNext } from "./utils.js";


const nodeA = new Node(12);
const nodeB = new Node(18);
const nodeC = new Node(5);
const nodeD = new Node(27);
const nodeE = new Node(23);
const nodeF = new Node(11);
const nodeG = new Node(49);
const nodeH = new Node(10);

nodeA.leftNode = nodeD;
nodeA.rightNode = nodeB;
nodeB.parentNode = nodeA;
nodeB.rightNode = nodeC;
nodeC.parentNode = nodeB;
nodeD.parentNode = nodeA;
nodeD.rightNode = nodeE;
nodeD.leftNode = nodeG;
nodeE.parentNode = nodeD;
nodeE.rightNode = nodeF;
nodeF.parentNode = nodeE;
nodeG.parentNode = nodeD;
nodeE.leftNode = nodeH;
nodeH.parentNode = nodeE;

let result
// result = findSmaller(nodeA);
// console.log(result.value)
// result = findSmaller(nodeB);
// console.log(result.value)
// result = findSmaller(nodeC);
// console.log(result.value)
// result = findSmaller(nodeD);
// console.log(result.value)
// result = findSmaller(nodeE);
// console.log(result.value)
// result = findSmaller(nodeF);
// console.log(result.value)
// result = findSmaller(nodeG);
// console.log(result.value)

result = findBiggest(nodeA);
console.log(result.value)
result = findBiggest(nodeB);
console.log(result.value)
result = findBiggest(nodeC);
console.log(result.value)
result = findBiggest(nodeD);
console.log(result.value)
result = findBiggest(nodeE);
console.log(result.value)
result = findBiggest(nodeF);
console.log(result.value)
result = findBiggest(nodeG);
console.log(result.value)

// result = findPrevious(nodeA, nodeA.value, nodeA);
// console.log("A", result.value)
// result = findPrevious(nodeB, nodeB.value, nodeB);
// console.log("B", result.value)
// result = findPrevious(nodeC, nodeC.value, nodeC);
// console.log("C", result.value)
// result = findPrevious(nodeD, nodeD.value, nodeD);
// console.log("D", result.value)
// result = findPrevious(nodeE, nodeE.value, nodeE);
// console.log("E", result.value)
// result = findPrevious(nodeF, nodeF.value, nodeF);
// console.log("F", result.value)
// result = findPrevious(nodeG, nodeG.value, nodeG);
// console.log("G", result.value)
// result = findPrevious(nodeH, nodeH.value, nodeH);
// console.log("H", result.value)

// result = findNext(nodeA, nodeA.value, nodeA);
// console.log("A", result.value)
// result = findNext(nodeB, nodeB.value, nodeB);
// console.log("B", result.value)
// result = findNext(nodeC, nodeC.value, nodeC);
// console.log("C", result.value)
// result = findNext(nodeD, nodeD.value, nodeD);
// console.log("D", result.value)
// result = findNext(nodeE, nodeE.value, nodeE);
// console.log("E", result.value)
// result = findNext(nodeF, nodeF.value, nodeF);
// console.log("F", result.value)
// result = findNext(nodeG, nodeG.value, nodeG);
// console.log("G", result.value)
// result = findNext(nodeH, nodeH.value, nodeH);
// console.log("H", result.value)

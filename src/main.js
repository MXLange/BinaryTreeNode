import Node from "./entities/Node.js"
import { buildBinarySearchTree } from "./methods/node/bstNodeMethods.js";
import { findSmallerNodeValue, findBiggestNodeValue, findNodeWithPreviousValue, findNodeWithNextValue, sumNodesValues, countNumberOfNodes, averageNodesValue, buildArrayFromDisorderedTree } from "./methods/node/nodeMethods.js";


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


let result;
result = buildArrayFromDisorderedTree(nodeA);
result.sort((a, b) => {
    return a - b;
})
console.log(result);
result = buildBinarySearchTree(result, 0, result.length - 1);
console.log(result);
// result = findSmallerNodeValue(nodeA);
// console.log(result.value)
// result = findSmallerNodeValue(nodeB);
// console.log(result.value)
// result = findSmallerNodeValue(nodeC);
// console.log(result.value)
// result = findSmallerNodeValue(nodeD);
// console.log(result.value)
// result = findSmallerNodeValue(nodeE);
// console.log(result.value)
// result = findSmallerNodeValue(nodeF);
// console.log(result.value)
// result = findSmallerNodeValue(nodeG);
// console.log(result.value)

// result = findBiggestNodeValue(nodeA);
// console.log(result.value)
// result = findBiggestNodeValue(nodeB);
// console.log(result.value)
// result = findBiggestNodeValue(nodeC);
// console.log(result.value)
// result = findBiggestNodeValue(nodeD);
// console.log(result.value)
// result = findBiggestNodeValue(nodeE);
// console.log(result.value)
// result = findBiggestNodeValue(nodeF);
// console.log(result.value)
// result = findBiggestNodeValue(nodeG);
// console.log(result.value)

// result = findNodeWithPreviousValue(nodeA, nodeA.value, nodeA);
// console.log("A", result.value)
// result = findNodeWithPreviousValue(nodeB, nodeB.value, nodeB);
// console.log("B", result.value)
// result = findNodeWithPreviousValue(nodeC, nodeC.value, nodeC);
// console.log("C", result.value)
// result = findNodeWithPreviousValue(nodeD, nodeD.value, nodeD);
// console.log("D", result.value)
// result = findNodeWithPreviousValue(nodeE, nodeE.value, nodeE);
// console.log("E", result.value)
// result = findNodeWithPreviousValue(nodeF, nodeF.value, nodeF);
// console.log("F", result.value)
// result = findNodeWithPreviousValue(nodeG, nodeG.value, nodeG);
// console.log("G", result.value)
// result = findNodeWithPreviousValue(nodeH, nodeH.value, nodeH);
// console.log("H", result.value)

// result = findNodeWithNextValue(nodeA, nodeA.value, nodeA);
// console.log("A", result.value)
// result = findNodeWithNextValue(nodeB, nodeB.value, nodeB);
// console.log("B", result.value)
// result = findNodeWithNextValue(nodeC, nodeC.value, nodeC);
// console.log("C", result.value)
// result = findNodeWithNextValue(nodeD, nodeD.value, nodeD);
// console.log("D", result.value)
// result = findNodeWithNextValue(nodeE, nodeE.value, nodeE);
// console.log("E", result.value)
// result = findNodeWithNextValue(nodeF, nodeF.value, nodeF);
// console.log("F", result.value)
// result = findNodeWithNextValue(nodeG, nodeG.value, nodeG);
// console.log("G", result.value)
// result = findNodeWithNextValue(nodeH, nodeH.value, nodeH);
// console.log("H", result.value)

// result = sumNodesValues(nodeA);
// console.log(result)
// result = sumNodesValues(nodeB);
// console.log(result)
// result = sumNodesValues(nodeC);
// console.log(result)
// result = sumNodesValues(nodeD);
// console.log(result)
// result = sumNodesValues(nodeE);
// console.log(result)
// result = sumNodesValues(nodeF);
// console.log(result)
// result = sumNodesValues(nodeG);
// console.log(result)

// result = countNumberOfNodes(nodeA);
// console.log(result)
// result = countNumberOfNodes(nodeB);
// console.log(result)
// result = countNumberOfNodes(nodeC);
// console.log(result)
// result = countNumberOfNodes(nodeD);
// console.log(result)
// result = countNumberOfNodes(nodeE);
// console.log(result)
// result = countNumberOfNodes(nodeF);
// console.log(result)
// result = countNumberOfNodes(nodeG);
// console.log(result)

// result = averageNodesValue(nodeA);
// console.log(result)
// result = averageNodesValue(nodeB);
// console.log(result)
// result = averageNodesValue(nodeC);
// console.log(result)
// result = averageNodesValue(nodeD);
// console.log(result)
// result = averageNodesValue(nodeE);
// console.log(result)
// result = averageNodesValue(nodeF);
// console.log(result)
// result = averageNodesValue(nodeG);
// console.log(result)
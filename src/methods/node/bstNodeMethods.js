import NodeBST from "../../entities/NodeBST.js";

export function buildBinarySearchTree(array, firstArrayIndex, lastArrayIndex) {
    if(firstArrayIndex > lastArrayIndex) return null;
    let midPoint = parseInt(firstArrayIndex + (lastArrayIndex - firstArrayIndex) / 2);
    let node = new NodeBST(array[midPoint]);
    node.left = buildBinarySearchTree(array, firstArrayIndex, midPoint - 1);
    node.right = buildBinarySearchTree(array, midPoint + 1, lastArrayIndex);
    return node;
}
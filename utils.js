function getParentNode(node) {
    return node.parentNode;
}

function getLeftNode(node) {
    return node.leftNode;
}

function getRightNode(node) {
    return node.rightNode;
}

export function findSmaller(node, previousNode = null) {
    let nodeWithSmallerValue = node;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findSmaller(parent, node);
        if (parent.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findSmaller(left, node);
        if (left.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findSmaller(right, node);
        if (right.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = right;
        }
    }
    return nodeWithSmallerValue;
}

export function findBiggest(node, previousNode = null) {
    let nodeWithBiggestValue = node;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findBiggest(parent, node);
        if (parent.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findBiggest(left, node);
        if (left.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findBiggest(right, node);
        if (right.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = right;
        }
    }
    return nodeWithBiggestValue;
}

export function findPrevious(node, referenceValue, currentSelectedNode, previousNode = null) {
    let nodeWithPreviousValue = currentSelectedNode;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findPrevious(parent, referenceValue, currentSelectedNode, node);
        if (parent.value < referenceValue) {
            if (node.value < referenceValue && parent.value < node.value) {
                nodeWithPreviousValue = node;
            } else {
                nodeWithPreviousValue = parent;
            }
            currentSelectedNode = nodeWithPreviousValue;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findPrevious(left, referenceValue, currentSelectedNode, node);
        if (left.value < referenceValue) {
            if (node.value < referenceValue && left.value < node.value) {
                nodeWithPreviousValue = node;
            } else {
                nodeWithPreviousValue = left;
            }
            currentSelectedNode = nodeWithPreviousValue;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findPrevious(right, referenceValue, currentSelectedNode, node);
        if (right.value < referenceValue) {
            if (node.value < referenceValue && right.value < node.value) {
                nodeWithPreviousValue = node;
            } else {
                nodeWithPreviousValue = right;
            }
            currentSelectedNode = nodeWithPreviousValue;
        }
    }
    if (node.value < referenceValue && currentSelectedNode.value === referenceValue) {
        nodeWithPreviousValue = node;
    } else if (node.value < referenceValue && currentSelectedNode.value !== referenceValue && node.value > nodeWithPreviousValue.value) {
        nodeWithPreviousValue = node;
    }
    return nodeWithPreviousValue;
}

export function findNext(node, referenceValue, currentSelectedNode, previousNode = null) {
    let nodeWithNextValue = currentSelectedNode;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findNext(parent, referenceValue, currentSelectedNode, node);
        if (parent.value > referenceValue) {
            if (node.value > referenceValue && parent.value > node.value) {
                nodeWithNextValue = node;
            } else {
                nodeWithNextValue = parent;
            }
            currentSelectedNode = nodeWithNextValue;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findNext(left, referenceValue, currentSelectedNode, node);
        if (left.value > referenceValue) {
            if (node.value > referenceValue && left.value > node.value) {
                nodeWithNextValue = node;
            } else {
                nodeWithNextValue = left;
            }
            currentSelectedNode = nodeWithNextValue;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findNext(right, referenceValue, currentSelectedNode, node);
        if (right.value > referenceValue) {
            if (node.value > referenceValue && right.value > node.value) {
                nodeWithNextValue = node;
            } else {
                nodeWithNextValue = right;
            }
            currentSelectedNode = nodeWithNextValue;
        }
    }
    if (node.value > referenceValue && currentSelectedNode.value === referenceValue) {
        nodeWithNextValue = node;
    } else if (node.value > referenceValue && currentSelectedNode.value !== referenceValue && node.value < nodeWithNextValue.value) {
        nodeWithNextValue = node;
    }
    return nodeWithNextValue;
}

export function sumValues(node, previousNode = null) {
    let value = node.value;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        value += sumValues(parent, node);
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        value += sumValues(left, node);
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        value += sumValues(right, node);
    }
    return value;
}

export function countNodes(node, previousNode = null) {
    let count = 0;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        count += countNodes(parent, node);
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        count += countNodes(left, node);
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        count += countNodes(right, node);
    }
    count++;
    return count;
}

export function averageNodesValue(node) {
    let sum = sumValues(node);
    let count = countNodes(node);
    return sum / count;
}

function buildBinarySearchTree(array, left, right) {
    if(left > right) return null;
    let midPoint = parseInt(left + (right - left) / 2);
    let node = new Node(array[midPoint]);
    node.left = buildBinarySearchTree(array, left, midPoint - 1);
    node.rigth = buildBinarySearchTree(array, midPoint + 1, right);
    return node;
}

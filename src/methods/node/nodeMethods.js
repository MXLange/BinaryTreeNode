function getParentNode(node) {
    return node.parentNode;
}

function getLeftNode(node) {
    return node.leftNode;
}

function getRightNode(node) {
    return node.rightNode;
}

export function findSmallerNodeValue(node, previousNode = null) {
    let nodeWithSmallerValue = node;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findSmallerNodeValue(parent, node);
        if (parent.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findSmallerNodeValue(left, node);
        if (left.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findSmallerNodeValue(right, node);
        if (right.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = right;
        }
    }
    return nodeWithSmallerValue;
}

export function findBiggestNodeValue(node, previousNode = null) {
    let nodeWithBiggestValue = node;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findBiggestNodeValue(parent, node);
        if (parent.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        left = findBiggestNodeValue(left, node);
        if (left.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        right = findBiggestNodeValue(right, node);
        if (right.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = right;
        }
    }
    return nodeWithBiggestValue;
}

export function findNodeWithPreviousValue(node, referenceValue, currentSelectedNode, previousNode = null) {
    let nodeWithPreviousValue = currentSelectedNode;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findNodeWithPreviousValue(parent, referenceValue, currentSelectedNode, node);
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
        left = findNodeWithPreviousValue(left, referenceValue, currentSelectedNode, node);
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
        right = findNodeWithPreviousValue(right, referenceValue, currentSelectedNode, node);
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

export function findNodeWithNextValue(node, referenceValue, currentSelectedNode, previousNode = null) {
    let nodeWithNextValue = currentSelectedNode;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        parent = findNodeWithNextValue(parent, referenceValue, currentSelectedNode, node);
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
        left = findNodeWithNextValue(left, referenceValue, currentSelectedNode, node);
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
        right = findNodeWithNextValue(right, referenceValue, currentSelectedNode, node);
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

export function sumNodesValues(node, previousNode = null) {
    let value = node.value;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        value += sumNodesValues(parent, node);
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        value += sumNodesValues(left, node);
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        value += sumNodesValues(right, node);
    }
    return value;
}

export function countNumberOfNodes(node, previousNode = null) {
    let count = 0;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        count += countNumberOfNodes(parent, node);
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        count += countNumberOfNodes(left, node);
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        count += countNumberOfNodes(right, node);
    }
    count++;
    return count;
}

export function averageNodesValue(node) {
    let sum = sumNodesValues(node);
    let count = countNumberOfNodes(node);
    return sum / count;
}

export function buildArrayFromDisorderedTree(node, previousNode = null) {
    let value = [node.value];
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = getParentNode(node);
        value = value.concat(buildArrayFromDisorderedTree(parent, node));
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = getLeftNode(node);
        value = value.concat(buildArrayFromDisorderedTree(left, node));
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = getRightNode(node);
        value = value.concat(buildArrayFromDisorderedTree(right, node));
    }
    return value;
}


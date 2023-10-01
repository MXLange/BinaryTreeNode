function goToParent(node) {
    return node.parentNode;
}

function goLeft(node) {
    return node.leftNode;
}

function goRight(node) {
    return node.rightNode;
}

export function findSmaller(node, previousNode = null) {
    let nodeWithSmallerValue = node;
    let parent = null;
    let left = null;
    let right = null;
    if (node.parentNode && previousNode !== node.parentNode) {
        parent = goToParent(node);
        parent = findSmaller(parent, node);
        if (parent.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = goLeft(node);
        left = findSmaller(left, node);
        if (left.value < nodeWithSmallerValue.value) {
            nodeWithSmallerValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = goRight(node);
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
        parent = goToParent(node);
        parent = findBiggest(parent, node);
        if (parent.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = parent;
        }
    }
    if (node.leftNode && previousNode !== node.leftNode) {
        left = goLeft(node);
        left = findBiggest(left, node);
        if (left.value > nodeWithBiggestValue.value) {
            nodeWithBiggestValue = left;
        }
    }
    if (node.rightNode && previousNode !== node.rightNode) {
        right = goRight(node);
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
        parent = goToParent(node);
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
        left = goLeft(node);
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
        right = goRight(node);
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
        parent = goToParent(node);
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
        left = goLeft(node);
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
        right = goRight(node);
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
export default class NodeBST {
    value = null;
    right = null;
    left = null;

    constructor(value) {
        if(!value) {
            throw new Error("Value is required")
        }
        this.value = value;
    }
}


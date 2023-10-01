export default class Node {
    value = null;
    parentNode = null;
    rightNode = null;
    leftNode = null;

    constructor(value) {
        if(!value) {
            throw new Error("Value is required")
        }
        this.value = value;
    }
}
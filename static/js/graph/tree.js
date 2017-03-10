/* Cyclic graph */

class Tree {
    constructor() {
        this.rootNode = null;
    }

    get root() {
        return this.rootNode;
    }

    iterator(callbackDown) {
        return Tree.iteratorByNode(this.rootNode, callbackDown);
    }

    static iteratorByNode(node, callbackDown) {
        return {
            currentNode: node,
            stackImpl: [
                0
            ],
            stopNodeImpl: node.parentNode,
            callBackIfDown: callbackDown,
            nextNode: function() {
                if(!this.currentNode) {
                    return null;
                }

                let return_value = this.currentNode;
                let lastValueStack = this.stackImpl[this.stackImpl.length - 1];

                if(!(this.currentNode.nextNode.length > lastValueStack)) {
                    this.stackImpl.pop();

                    this.currentNode = (function down(node, stack, stop_value, callback) {
                        let last = stack[stack.length - 1];
                        if(node.nextNode.length > last) {
                            return node;
                        } else {
                            stack.pop();

                            if(node.parentNode === stop_value) {
                                return null;
                            }

                            if(callback) {
                                callback(node, node.parentNode); // call system function
                            }
                            return down(node.parentNode, stack, stop_value);
                        }

                    })(this.currentNode.parentNode, this.stackImpl, this.stopNodeImpl, this.callBackIfDown);

                    lastValueStack = this.stackImpl[this.stackImpl.length - 1];
                }

                if(this.currentNode) {
                    this.stackImpl[this.stackImpl.length - 1]++;
                    this.stackImpl.push(0);
                    this.currentNode = this.currentNode.nextNode[lastValueStack];
                }

                return return_value;
            }
        }
    }

    addNode(data, node) {
        if(!this.rootNode) {
            this.rootNode = new NodeImpl(data, null);
            return this.rootNode;
        }

        let added = new NodeImpl(data, node);
        node.addNode(added);

        return added;
    }
}

function NodeImpl(data, parentNode) {
    this.nextNode = [];
    this.parentNode = parentNode;

    this.data = data;
}

NodeImpl.prototype.addNode = function(node) {
    this.nextNode.push(node);
    return this.nextNode;
};
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
            nextNode: function () {
                // debugger;
                if (!this.currentNode) {
                    return null;
                }

                let return_value = this.currentNode;
                let lastValueStack = this.stackImpl[this.stackImpl.length - 1];

                if (this.currentNode.nextNode.length <= lastValueStack) {
                    this.stackImpl.pop();
                    if(this.currentNode.parentNode != null)
                        this.callBackIfDown(this.currentNode, this.currentNode.parentNode);

                    this.currentNode = (function down(node, stack, stop_value, callback) {
                        if (node == null) {
                            return null;
                        }
                        let last = stack[stack.length - 1];
                        if (node.nextNode.length > last) {
                            return node;
                        } else {
                            stack.pop();

                            if (node.parentNode === stop_value) {
                                return null;
                            }

                            if (callback) {
                                callback(node, node.parentNode); // call system function
                            }
                            return down(node.parentNode, stack, stop_value, callback);
                        }

                    })(this.currentNode.parentNode, this.stackImpl, this.stopNodeImpl, this.callBackIfDown);

                    lastValueStack = this.stackImpl[this.stackImpl.length - 1];
                }

                if (this.currentNode) {
                    this.stackImpl[this.stackImpl.length - 1]++;
                    this.stackImpl.push(0);
                    this.currentNode = this.currentNode.nextNode[lastValueStack];
                }

                return return_value;
            }
        }
    }

    addNode(data, node) {
        if (!this.rootNode) {
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
    // Это нода
    this.data = data; // in data we need id игрока,цвет игрока, И КООРДИНАТЫ, КОТОРЫЕ В ДВУХМЕРНОМ МАССИВЕ
    // ЕЩЕ нужно хранить количество поинтов в данный момент
}

NodeImpl.prototype.addNode = function (node) {
    this.nextNode.push(node);
    return this.nextNode;
};

export default Tree;

/* Cyclic graph */

class Tree {
    constructor() {
        this.rootNode = null;
    }

    get root() {
        return this.rootNode;
    }

    addNode(data, parent){
        if(parent === null){
            this.rootNode = new NodeImpl(data, null);
            return this.rootNode;
        }
        let newNode = new NodeImpl(data, parent);
        parent.nextNode.push(newNode);
        return newNode;
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

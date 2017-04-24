import Tree from './tree';

class GraphTree {
    constructor(map) {
        this.world = map;

        this.tree = new Tree;
        this.currentVertex = null;

        this.shapes = new Map();
        this.graphLine = null;
    }

    get getTree() {
        return this.tree;
    }

    get getCurrentVertex() {
        return this.currentVertex;
    }

    addNewVertexToCurrent(data) {
        this.currentVertex = this.tree.addNode(data, this.currentVertex);
        return this.currentVertex;
    }

    addNewVertexByNode(data, node) {
        return this.tree.addNode(data, node)
    }

    setCurrentVertex(current) {
        this.currentVertex = current;
        return this.currentVertex;
    }

    goFromCurrentVertex(node){
        node.nextNode.push(this.currentVertex);
        return node;
    }

    destruct() {
        this.world.stage.removeChild(this.graphLine);
        console.log(this.shapes);
        this.shapes.forEach((value, key) => {
            key.destruct();
        });
    }

    setNode(tower) {
        let coordinatesX = tower.pointX, coordinatesY = tower.pointY;

        if(!this.shapes.has(tower)) {
            this.shapes.set(tower, 1 /* default */);
        }

        tower.setRealCoordinates(coordinatesX, coordinatesY);
        tower.draw();
    }

    showNodes() {
        let currentNode = this.tree.rootNode;
        let marker = new Set();

        this.graphLine = this.graphLine || this.world.newLine("red");
        this.graphLine.graphics.clear();
        this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");

        this.go = (function (current, marker) {
            if(current === null){
                return;
            }
            marker.add(current);
            this.setNode(current.data);
            current.nextNode.forEach((item)=>{
                if(!marker.has(item)) {
                    this.go(item, marker);
                } else {
                    this.drawWireBetweenTowers(current.data.point, item.data.point);
                }
            });
            if(current.parentNode)
                this.drawWireBetweenTowers(current.data.point, current.parentNode.data.point);
        });
        this.go.bind(this)(currentNode, marker);

        this.graphLine.graphics.endStroke();
    }

    drawWireBetweenTowers(to, from, anim) {
        debugger;
        to = this.world.area.getPixelPoint(to.x, to.y);
        from = this.world.area.getPixelPoint(from.x, from.y);
        let x = to.x, y = to.y;
        let l = Math.sqrt((x - from.x)**2 + (y - from.y)**2);

        const byLine = (lamda) => {
            return {x: (from.x + lamda * x) / (1 + lamda), y: (from.y + lamda * y) / (1 + lamda)};
        };

        let radius = conf.radiusTower + conf.betweenTowersPadding;
        let lamda = (l - radius) / radius;

        let fromPoint = byLine(1 / lamda);
        let toPoint = byLine(lamda);

        this.graphLine.graphics.moveTo(fromPoint.x, fromPoint.y);
        this.graphLine.graphics.lineTo(toPoint.x, toPoint.y);
        this.graphLine.graphics.moveTo(x, y);
    }
}

export default GraphTree;
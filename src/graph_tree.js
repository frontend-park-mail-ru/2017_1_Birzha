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
        this.graphLine = this.graphLine || this.world.newLine("red");
        this.graphLine.graphics.clear();

        let setBack = (node, parentNode) => {
            let pxPoint = this.world.area.getPixelPoint(parentNode.data.pointX, parentNode.data.pointY);
            // this.graphLine.graphics.moveTo(pxPoint.x, pxPoint.y);

            this.was_change = true;
            this.last_last_x = pxPoint.x;
            this.last_last_y = pxPoint.y;
        };

        let iter = this.tree.iterator(setBack.bind(this));

        this.last_x = 0;
        this.last_y = 0;

        this.was_change = false;
        this.last_last_x = 0;
        this.last_last_y = 0;

        for (;;) {
            this.was_change = false;
            let node = iter.nextNode();
            if (!node)
                break;

            // debugger;

            let nowPoint = this.world.area.getPixelPoint(node.data.pointX, node.data.pointY);

            if (node === this.tree.root) {
                this.last_x = nowPoint.x;
                this.last_y = nowPoint.y;

                this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                this.graphLine.graphics.moveTo(this.last_x, this.last_y);

                this.setNode(node.data);
                continue;
            }

            this.setNode(node.data);

            // debugger;
            this.drawWireBetweenTowers(nowPoint, {posX: this.last_x, posY: this.last_y});

            if(this.was_change) {
                this.last_x = this.last_last_x; // nowPoint.x;
                this.last_y = this.last_last_y; // nowPoint.y;
            } else {
                this.last_x = nowPoint.x;
                this.last_y = nowPoint.y;
            }
        }

        this.graphLine.graphics.endStroke();
    }

    drawWireBetweenTowers(to, from, anim) {
        let x = to.x, y = to.y;
        let l = Math.sqrt((x - from.posX)**2 + (y - from.posY)**2);

        const byLine = (lamda) => {
            return {posX: (from.posX + lamda * x) / (1 + lamda), posY: (from.posY + lamda * y) / (1 + lamda)};
        };

        let radius = conf.radiusTower + conf.betweenTowersPadding;
        let lamda = (l - radius) / radius;

        let fromPoint = byLine(1 / lamda);
        let toPoint = byLine(lamda);

        this.graphLine.graphics.moveTo(fromPoint.posX, fromPoint.posY);
        this.graphLine.graphics.lineTo(toPoint.posX, toPoint.posY);
        this.graphLine.graphics.moveTo(x, y);
    }
}

export default GraphTree;
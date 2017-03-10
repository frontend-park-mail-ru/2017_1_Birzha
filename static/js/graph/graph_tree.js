class GraphTree {
    constructor(map) {
        this.map = map;

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

    addNewVertexToCurrent(point) {
        this.currentVertex = this.tree.addNode(point, this.currentVertex);
        return this.currentVertex;
    }

    addNewVertexByNode(point, node) {
        return this.tree.addNode(point, node)
    }

    addNewVertexByMove(dx, dy) {
        let curX = this.currentVertex.data.x;
        let curY = this.currentVertex.data.y;

        this.currentVertex = this.tree.addNode({x: curX + dx, y: curY + dy}, this.currentVertex)
        return this.currentVertex;
    }

    destruct() {
        this.map.stage.removeChild(this.graphLine);
        console.log(this.shapes);
        this.shapes.forEach((value, key) => {
            this.map.stage.removeChild(value);
        });
    }

    showNodes() {
        this.graphLine = this.graphLine || this.map.newLine("red");
        this.graphLine.graphics.clear();

        let setBack = function(toNode, fromNode) {
            this.graphLine.graphics.moveTo(toNode.data.x, toNode.data.y);
        };

        let iter = this.tree.iterator(setBack.bind(this));

        let last_x, last_y;

        for(;;) {
            let data = iter.nextNode();
            if(!data)
                break;

            if(data === this.tree.root) {
                last_x = data.data.x;
                last_y = data.data.y;

                this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                this.graphLine.graphics.moveTo(last_x, last_y);

                if(this.shapes.has(data.data)) {
                    let drawObject = this.shapes.get(data.data);
                    let needX = data.data.x, needY = data.data.y;

                    if("image" in drawObject) {
                        console.log("^)");
                        needX -= drawObject.image.width / 2;
                        needY -= drawObject.image.height / 2;
                    }

                    this.shapes.get(data.data).x = needX;
                    this.shapes.get(data.data).y = needY;

                } else {
                    this.shapes.set(data.data, this.map.newShape({x: 0, y: 0}, 10, "blue"));
                }
                continue;
            }

            if(this.shapes.has(data.data)) {
                this.shapes.get(data.data).x = data.data.x;
                this.shapes.get(data.data).y = data.data.y;
            } else {
                this.shapes.set(data.data, this.map.newShape({x: 0, y: 0}, 10, "blue"));
            }

            this.graphLine.graphics.lineTo(data.data.x, data.data.y);

            last_x = data.data.x;
            last_y = data.data.y;
        }

        this.graphLine.graphics.endStroke();
    }
}
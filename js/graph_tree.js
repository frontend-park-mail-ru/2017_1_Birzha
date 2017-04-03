window.GraphTree =
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

        addNewVertexToCurrent(data) {
            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }

        addNewVertexByNode(data, node) {
            return this.tree.addNode(data, node)
        }

        addNewVertexByMove(dx, dy) {
            let data = this.currentVertex.data;
            data.x += dx;
            data.x += dy;

            this.currentVertex = this.tree.addNode(data, this.currentVertex);
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
            debugger;
            let setBack = function (toNode, fromNode) {
                let pxPoint = area.getPixelPoint(toNode.data.x, toNode.data.y);
                this.graphLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

            for (; ;) {
                let node = iter.nextNode();
                if (!node)
                    break;

                if (node === this.tree.root) {
                    let pxPoint = area.getPixelPoint(node.data.x, node.data.y);
                    last_x = pxPoint.x;
                    last_y = pxPoint.y;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    if (this.shapes.has(node.data)) { // TODO create changes objects
                        let drawObject = this.shapes.get(node.data);
                        let needX = node.data.x, needY = node.data.y;

                        if ("image" in drawObject) {
                            console.log("^)");
                            needX -= drawObject.image.width / 2;
                            needY -= drawObject.image.height / 2;
                        }

                        let pxPoint = area.getPixelPoint(needX, needY);
                        this.shapes.get(node.data).x = pxPoint.x;
                        this.shapes.get(node.data).y = pxPoint.y;

                    } else {
                        this.shapes.set(node.data, this.map.newShape({x: 0, y: 0}, 10, "blue"));
                    }
                    continue;
                }

                if (this.shapes.has(node.data)) {
                    let pxPoint = area.getPixelPoint(node.data.x, node.data.y);
                    this.shapes.get(node.data).x = pxPoint.x;
                    this.shapes.get(node.data).y = pxPoint.y;
                } else {
                    this.shapes.set(node.data, this.map.newShape({x: 0, y: 0}, 10, "blue"));
                }

                let pxPoint = area.getPixelPoint(node.data.x, node.data.y);
                this.graphLine.graphics.lineTo(pxPoint.x, pxPoint.y);

                last_x = pxPoint.x;
                last_y = pxPoint.y;
            }

            this.graphLine.graphics.endStroke();
        }
    }
;
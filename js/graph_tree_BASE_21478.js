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

        addNewVertexToCurrent(point) {
            this.currentVertex = this.tree.addNode(point, this.currentVertex);
            return this.currentVertex;
        }

        addNewVertexByNode(point, node) {
            return this.tree.addNode(point, node)
        }

        addNewVertexByMove(dx, dy) {
            let curX = this.currentVertex.data.posX;
            let curY = this.currentVertex.data.posY;

            this.currentVertex = this.tree.addNode({posX: curX + dx, posY: curY + dy}, this.currentVertex);
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

            let setBack = function (toNode, fromNode) {
                this.graphLine.graphics.moveTo(toNode.data.posX, toNode.data.posY);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

            for (; ;) {
                let data = iter.nextNode();
                if (!data)
                    break;

                if (data === this.tree.root) {
                    last_x = data.data.posX;
                    last_y = data.data.posY;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    if (this.shapes.has(data.data)) { // TODO create changes objects
                        let drawObject = this.shapes.get(data.data);
                        let needX = data.data.posX, needY = data.data.posY;

                        if ("image" in drawObject) {
                            console.log("^)");
                            needX -= drawObject.image.width / 2;
                            needY -= drawObject.image.height / 2;
                        }

                        this.shapes.get(data.data).posX = needX;
                        this.shapes.get(data.data).posY = needY;

                    } else {
                        this.shapes.set(data.data, this.map.newShape({posX: 0, posY: 0}, 10, "blue"));
                    }
                    continue;
                }

                if (this.shapes.has(data.data)) {
                    this.shapes.get(data.data).posX = data.data.posX;
                    this.shapes.get(data.data).posY = data.data.posY;
                } else {
                    this.shapes.set(data.data, this.map.newShape({posX: 0, posY: 0}, 10, "blue"));
                }

                this.graphLine.graphics.lineTo(data.data.posX, data.data.posY);

                last_x = data.data.posX;
                last_y = data.data.posY;
            }

            this.graphLine.graphics.endStroke();
        }
    }
;
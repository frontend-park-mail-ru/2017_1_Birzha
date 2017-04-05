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
            data.y += dy;

            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }

        destruct() {
            this.map.stage.removeChild(this.graphLine);
            console.log(this.shapes);
            this.shapes.forEach((value, key) => {
                value.destruct();
            });
        }

        setNode(keyAndValues) {
            let points = keyAndValues.points;
            let needX = keyAndValues.posX, needY = keyAndValues.posY;

            let type = keyAndValues.type || 0;

            let town;
            if(this.shapes.has(keyAndValues)) {
                town = this.shapes.get(keyAndValues);
            } else {
                town = new Tower(this.map, needX, needY, type, points);
                this.shapes.set(keyAndValues, town);
            }

            town.setCoordinates(needX, needY);
            town.draw();
        }

        showNodes() {
            this.graphLine = this.graphLine || this.map.newLine("red");
            this.graphLine.graphics.clear();
            debugger;
            let setBack = function (toNode, fromNode) {
                let pxPoint = area.getPixelPoint(toNode.data.posX, toNode.data.posY);
                this.graphLine.graphics.moveTo(pxPoint.posX, pxPoint.posY);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

<<<<<<< HEAD
            for (;;) {
                let data = iter.nextNode();
                if (!data)
=======
            for (; ;) {
                let node = iter.nextNode();
                if (!node)
>>>>>>> b86312144995d2a479dc7a3bc9a87e10eb106592
                    break;

                if (node === this.tree.root) {
                    let pxPoint = area.getPixelPoint(node.data.posX, node.data.posY);
                    last_x = pxPoint.posX;
                    last_y = pxPoint.posY;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

<<<<<<< HEAD
                    this.setNode(data.data);
                    continue;
                }

                this.setNode(data.data);

                this.drawWireBetweenTowers(data.data, {posX: last_x, posY: last_y});
=======
                    if (this.shapes.has(node.data)) { // TODO create changes objects
                        let drawObject = this.shapes.get(node.data);
                        let needX = node.data.posX, needY = node.data.posY;

                        if ("image" in drawObject) {
                            console.log("^)");
                            needX -= drawObject.image.width / 2;
                            needY -= drawObject.image.height / 2;
                        }

                        let pxPoint = area.getPixelPoint(needX, needY);
                        this.shapes.get(node.data).posX = pxPoint.posX;
                        this.shapes.get(node.data).posY = pxPoint.posY;

                    } else {
                        this.shapes.set(node.data, this.map.newShape({posX: 0, posY: 0}, 10, "blue"));
                    }
                    continue;
                }

                if (this.shapes.has(node.data)) {
                    let pxPoint = area.getPixelPoint(node.data.posX, node.data.posY);
                    this.shapes.get(node.data).posX = pxPoint.posX;
                    this.shapes.get(node.data).posY = pxPoint.posY;
                } else {
                    this.shapes.set(node.data, this.map.newShape({posX: 0, posY: 0}, 10, "blue"));
                }

                let pxPoint = area.getPixelPoint(node.data.posX, node.data.posY);
                this.graphLine.graphics.lineTo(pxPoint.posX, pxPoint.posY);
>>>>>>> b86312144995d2a479dc7a3bc9a87e10eb106592

                last_x = pxPoint.posX;
                last_y = pxPoint.posY;
            }

            this.graphLine.graphics.endStroke();
        }

        drawWireBetweenTowers(to, from, anim) {
            let x = to.posX, y = to.posY;
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
    };
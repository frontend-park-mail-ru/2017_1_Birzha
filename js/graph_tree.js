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
            data.posX += dx;
            data.posX += dy;

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

        setNode(keyAndValues, nowPoint) {
            debugger;

            let points = keyAndValues.points;
            let coordinatesX = keyAndValues.x, coordinatesY = keyAndValues.y;
            let posX = keyAndValues.x, posY = keyAndValues.y;

            let type = keyAndValues.type || 0;

            let town;
            if(this.shapes.has(keyAndValues)) {
                town = this.shapes.get(keyAndValues);
            } else {
                town = new Tower(this.map, posX, posY, type, points);
                this.shapes.set(keyAndValues, town);
            }

            town.setRealCoordinates(coordinatesX, coordinatesY);
            town.draw();
        }

        showNodes() {
            this.graphLine = this.graphLine || this.map.newLine("red");
            this.graphLine.graphics.clear();

            let setBack = function (toNode, fromNode) {
                let pxPoint = area.getPixelPoint(toNode.data.x, toNode.data.y);
                this.graphLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

            for (;;) {
                let node = iter.nextNode();
                if (!node)
                    break;

                debugger;

                let nowPoint = area.getPixelPoint(node.data.x, node.data.y);

                if (node === this.tree.root) {
                    last_x = nowPoint.x;
                    last_y = nowPoint.y;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    this.setNode(node.data);
                    continue;
                }

                this.setNode(node.data);

                this.drawWireBetweenTowers(nowPoint, {posX: last_x, posY: last_y});

                last_x = nowPoint.x;
                last_y = nowPoint.y;
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
    };
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

            let setBack = function (toNode, fromNode) {
                this.graphLine.graphics.moveTo(toNode.data.posX, toNode.data.posY);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

            for (;;) {
                let data = iter.nextNode();
                if (!data)
                    break;

                if (data === this.tree.root) {
                    last_x = data.data.posX;
                    last_y = data.data.posY;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    this.setNode(data.data);
                    continue;
                }

                this.setNode(data.data);

                this.drawWireBetweenTowers(data.data, {posX: last_x, posY: last_y});

                last_x = data.data.posX;
                last_y = data.data.posY;
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
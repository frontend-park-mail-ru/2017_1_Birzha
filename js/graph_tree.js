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
            let curX = this.currentVertex.data.x;
            let curY = this.currentVertex.data.y;

            this.currentVertex = this.tree.addNode({x: curX + dx, y: curY + dy}, this.currentVertex);
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
            let needX = keyAndValues.x, needY = keyAndValues.y;

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
                this.graphLine.graphics.moveTo(toNode.data.x, toNode.data.y);
            };

            let iter = this.tree.iterator(setBack.bind(this));

            let last_x, last_y;

            for (;;) {
                let data = iter.nextNode();
                if (!data)
                    break;

                if (data === this.tree.root) {
                    last_x = data.data.x;
                    last_y = data.data.y;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    this.setNode(data.data);
                    continue;
                }

                this.setNode(data.data);

                this.drawWireBetweenTowers(data.data, {x: last_x, y: last_y});

                last_x = data.data.x;
                last_y = data.data.y;
            }

            this.graphLine.graphics.endStroke();
        }

        drawWireBetweenTowers(to, from, anim) {
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
    };
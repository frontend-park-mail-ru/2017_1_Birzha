window.UserObject =
    class UserObject extends window.EnemyObject {
        constructor(map, point, nameUser, userId) {
            super(map, point, nameUser);

            map.setCallBack("stagemousemove", this.eventMove.bind(this));

            this.probablyLine = this.map.newLine("black");

            this.probablyCircle = this.map.newShape(null, this.userSize, "DeepSkyBlue", false);
            this.probablyCircle.on("click", this.eventPutNewVertex.bind(this));
            this.userId = userId;

            this.myGraph = new GraphTree(map);
            let data = {
                x: this.myPosition.x,
                y: this.myPosition.y,
                points: 0,
                userId: this.userId
            };
            this.myGraph.addNewVertexToCurrent(data);
            area.markSelectedCell(data.x, data.y);
            let e = new Event("upd", {bubbles: true, cancelable: false});
            this.map.canvas.dispatchEvent(e);
        }

        eventMove(event) {
            this.visible = true;

            this.probablyCircle.x = event.stageX;
            this.probablyCircle.y = event.stageY;

            //
            let pxPoint = area.getPixelPoint(this.positionX, this.positionY);
            this.probablyLine.graphics.clear();
            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);

            this.probablyLine.graphics.lineTo(event.stageX, event.stageY);
            this.probablyLine.graphics.endStroke();

            this.map.update(); // TODO tick
        }

        eventPutNewVertex(event) {
            let newX = parseInt(event.target.x), newY = parseInt(event.target.y);
            let newPos = area.getCellPosition(newX, newY);
            let newData = {
                x: newPos.x,
                y: newPos.y,
                points: 0,
                userId: this.userId
            };
            this.myGraph.addNewVertexToCurrent(newData);
            area.markSelectedCell(newPos.x, newPos.y);

            this.positionX = newPos.x;
            this.positionY = newPos.y;
            let e = new Event("upd", {bubbles: true, cancelable: false});
            this.map.canvas.dispatchEvent(e);
        }

        drawObject() {
            this.myGraph.showNodes();
        }

        set visible(flag) {
            this.probablyCircle.visibility = flag;
        }
    }
;

window.UserObject =
    class UserObject extends window.EnemyObject {
        constructor(map, point, nameUser) {
            super(map, point, nameUser);

            map.setCallBack("stagemousemove", this.eventMove.bind(this));

            this.probablyLine = this.map.newLine("black");

            this.probablyCircle = this.map.newShape(null, this.userSize, "DeepSkyBlue", false);
            this.probablyCircle.on("click", this.eventPutNewVertex.bind(this));
            debugger;
            this.myGraph = new GraphTree(map);
            this.myGraph.addNewVertexToCurrent(this.myPosition);
        }

        eventMove(event) {
            this.visible = true;

            this.probablyCircle.x = event.stageX;
            this.probablyCircle.y = event.stageY;

            //
            this.probablyLine.graphics.clear();
            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
            let pxPoint = area.getPixelPoint(this.positionX, this.positionY);
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);

            this.probablyLine.graphics.lineTo(event.stageX, event.stageY);
            this.probablyLine.graphics.endStroke();

            this.map.update(); // TODO tick
        }

        eventPutNewVertex(event) {
            let newX = parseInt(event.target.x), newY = parseInt(event.target.y);
            let newPos = area.getCellPosition(newX, newY);
            this.myGraph.addNewVertexToCurrent(newPos);

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

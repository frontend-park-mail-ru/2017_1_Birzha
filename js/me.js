window.UserObject =
    class UserObject extends window.EnemyObject {
        constructor(map, point, nameUser) {
            super(map, point, nameUser);

        //    map.setCallBack("stagemousemove", this.eventMove.bind(this));

            this.probablyLine = this.map.newLine("black");
            this.positionX = this.myPosition.x;
            this.positionY = this.myPosition.y;
            let pxPoint = this.map.area.getPixelPoint(this.positionX, this.positionY);

            this.probablyCircle = this.map.newShape(null, this.userSize, "DeepSkyBlue", false);
            this.map.canvas.addEventListener("mousedown", this.eventPutNewVertex.bind(this));
            this.myGraph = new GraphTree(map);
            this.myGraph.addNewVertexToCurrent(this.myPosition);
            document.addEventListener("mousemove", this.eventMouseMove.bind(this));
            this.map.canvas.requestPointerLock();
            scrollTo(0,0);
            this.map.setOffsetForCenter(pxPoint.x, pxPoint.y);
            controls.addPlayerToScoreBoard("me", 123);

        }
        eventMouseMove(event) {
            this.visible = true;
            let pxPoint = this.map.area.getPixelPoint(this.positionX, this.positionY);

            this.last_mv = this.last_mv || {x: 0, y: 0};

            let mv = {
                x: this.last_mv.x - event.movementX ,
                y: this.last_mv.y - event.movementY
            };
            if(pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.map.width)
                return;
            if(pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.map.height)
                return;
            this.probablyCircle.x = pxPoint.x - mv.x;
            this.probablyCircle.y = pxPoint.y - mv.y;
            //
            this.probablyLine.graphics.clear();
            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            this.probablyLine.graphics.lineTo(this.probablyCircle.x, this.probablyCircle.y);
            this.probablyLine.graphics.endStroke();

            this.last_mv.x = mv.x;
            this.last_mv.y = mv.y;

            this.map.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
            this.map.update(); // TODO tick
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
            scrollTo(0,0);
            this.map.update(); // TODO tick
        }

        eventPutNewVertex(event) {
            let pxPoint = this.map.area.getPixelPoint(this.positionX, this.positionY);
            let newX = pxPoint.x - this.last_mv.x , newY = pxPoint.y - this.last_mv.y;
            let newPos = area.getCellPosition(newX, newY);
            this.myGraph.addNewVertexToCurrent(newPos);

            this.positionX = newPos.x;
            this.positionY = newPos.y;
            this.last_mv.x = 0;
            this.last_mv.y = 0;
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

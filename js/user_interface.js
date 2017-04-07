class UserInterface {
    constructor(world, packCallback) {
        this.world = world; // get area
        document.addEventListener("mousemove", this.eventMove.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.world.canvas.addEventListener("mousedown", this.eventPutNewVertex.bind(this));

        this.packCallback = packCallback;

        this.world.update();
        this.world.area.world.stage.update();
    }

    eventMove(event) {
        let pxPoint = this.packCallback["getRealPosition"]();

        this.last_mv = this.last_mv || {x: 0, y: 0};

        let mv = {
            x: this.last_mv.x - event.movementX ,
            y: this.last_mv.y - event.movementY
        };
        if(pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.world.area.fullSize.x)
            return;
        if(pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.world.area.fullSize.y)
            return;


        let cellPos = this.world.area.getCellPosition(pxPoint.x - mv.x, pxPoint.y - mv.y);
        let fullLength = conf.rectSize * 2 + conf.borderSize * 6;
        if(fullLength < Math.abs(mv.x) || (fullLength < Math.abs(mv.y))) {
            this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
        } else
            this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);

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

        this.world.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
        this.world.update(); // TODO tick
    }

    eventPutNewVertex(event) {
        let fullLength = conf.rectSize * 2 + conf.borderSize * 6;
        if(fullLength < Math.abs(this.last_mv.x) || (fullLength < Math.abs(this.last_mv.y))) {
            return;
        }
        let pxPoint = this.packCallback["getRealPosition"]();
        let newX = pxPoint.x - this.last_mv.x , newY = pxPoint.y - this.last_mv.y;
        let newPos = this.world.area.getCellPosition(newX, newY);

        this.packCallback["addTower"](newPos);
        this.world.area.markSelectedCell(newPos.x, newPos.y);
        this.world.update();
        this.world.area.world.stage.update();

        this.positionX = newPos.x;
        this.positionY = newPos.y;
        this.last_mv.x = 0;
        this.last_mv.y = 0;
    }
}

window.UserInterface = UserInterface;
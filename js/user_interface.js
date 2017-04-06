class UserInterface {
    constructor(world, packCallback) {
        this.world = world; // get area
        this.world.setCallBack("stagemousemove", this.eventMove.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.probablyCircle.on("click", this.eventPutNewVertex.bind(this));

        this.packCallback = packCallback;
    }

    eventMove(event) {
        this.probablyCircle.x = event.stageX;
        this.probablyCircle.y = event.stageY;
        this.probablyLine.graphics.clear();
        this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");

        let {x, y} = this.packCallback["getRealPosition"]();
        this.probablyLine.graphics.moveTo(x, y);

        this.probablyLine.graphics.lineTo(event.stageX, event.stageY);
        this.probablyLine.graphics.endStroke();

        this.world.update();
    }

    eventPutNewVertex(event) {
        let newX = parseInt(event.target.x), newY = parseInt(event.target.y);
        let newPos = this.world.area.getCellPosition(newX, newY);

        this.packCallback["addTower"](newPos);

        this.world.update();
    }
}

window.UserInterface = UserInterface
class UserInterface {
    constructor(world, packCallback, startPos) {
        this.world = world; // get area
        document.addEventListener("mousemove", this.eventManager.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.world.canvas.addEventListener("click", this.eventManager.bind(this));

        this.packCallback = packCallback;
        this.startPos = startPos;

        this.world.update();
        this.world.area.world.stage.update();

        this.last_mv = {x: 0, y: 0};

        this.pointerLockStatus = false;
        document.addEventListener("pointerlockchange", ()=>{
            this.pointerLockStatus = !this.pointerLockStatus;
        }, false);

        this.currentPos = this.startPos;
    }

    eventMove(event) {
        let pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
        this.last_mv = this.last_mv || {x: 0, y: 0};

        let mv = {
            x: this.last_mv.x - event.movementX ,
            y: this.last_mv.y - event.movementY
        };
        if(pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.world.area.fullSize.x-1)
            return;
        if(pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.world.area.fullSize.y-1)
            return;

        let cellPos = this.world.area.getCellPosition(pxPoint.x - mv.x, pxPoint.y - mv.y);
        let fullLength = conf.rectSize * 2 + conf.borderSize * 6;

        this.probablyCircle.x = pxPoint.x - mv.x;
        this.probablyCircle.y = pxPoint.y - mv.y;

        this.probablyLine.graphics.clear();
        if(this.currentMode === 'moving') {
            if(fullLength < Math.abs(mv.x) || (fullLength < Math.abs(mv.y))) {
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
            } else
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);

            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            this.probablyLine.graphics.lineTo(this.probablyCircle.x, this.probablyCircle.y);
            this.probablyLine.graphics.endStroke();
        } else if(this.currentMode === 'choosing') {
            if(this.world.arrayMap[cellPos.x][cellPos.y]) {
                if (this.world.arrayMap[cellPos.x][cellPos.y].data.client_id !== this.packCallback['getClientId']()) {
                    this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
                }
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);
            } else
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
        }
        this.last_mv.x = mv.x;
        this.last_mv.y = mv.y;

        this.world.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
        this.world.update(); // TODO tick
    }

    putNewVertex() {
        let fullLength = conf.rectSize * 2 + conf.borderSize * 6;
        if(fullLength < Math.abs(this.last_mv.x) || (fullLength < Math.abs(this.last_mv.y))) {
            return;
        }
        let pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
        let newX = pxPoint.x - this.last_mv.x , newY = pxPoint.y - this.last_mv.y;
        let newPos = this.world.area.getCellPosition(newX, newY);

        this.packCallback["addTower"](newPos);
        this.world.area.markSelectedCell(newPos.x, newPos.y);

        this.world.update();

        this.last_mv.x = 0;
        this.last_mv.y = 0;
        this.currentPos = newPos;
    }

    chooseNewVertex() {
        let newX = this.probablyCircle.x, newY = this.probablyCircle.y;
        let newPos = this.world.area.getCellPosition(newX, newY);
        let i = this.packCallback['getClientId']();
        if(this.world.arrayMap[newPos.x][newPos.y]) {
            if (this.world.arrayMap[newPos.x][newPos.y].data.client_id !== this.packCallback['getClientId']()) {
                return;
            }
        } else
            return;
        this.currentPos = newPos;
        this.probablyCircle.x = newX;
        this.probablyCircle.y = newY;
        this.packCallback['setCurrentNode'](newPos);

        this.world.area.markSelectedCell(newPos.x, newPos.y);

        this.world.update();

        this.last_mv.x = 0;
        this.last_mv.y = 0;
    }

    eventManager(event){
        if(event.type === 'click' && event.which === 1 && this.pointerLockStatus === false){
            this.currentMode = 'choosing';
            this.world.canvas.requestPointerLock();
            return;
        }

        if(this.packCallback["getPerforming"]()) {
            if (event.type === 'click' && event.which === 1 && this.currentMode === 'choosing') {
                this.chooseNewVertex(event);
                this.currentMode = 'moving';
                return;
            }
            if (event.type === 'click' && event.which === 1 && this.currentMode === 'moving') {
                this.putNewVertex(event);
                return;
            }
        }

        if (event.type === 'click' && event.which === 3 && this.currentMode === 'moving') {
            this.probablyLine.graphics.clear();
            this.currentMode = 'choosing';
        }
        if(event.type === 'mousemove' && this.pointerLockStatus){
            this.eventMove(event);
        }

    }
}

export default UserInterface;
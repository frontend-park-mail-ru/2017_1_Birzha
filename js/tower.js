class Tower {
    constructor(world, pointX, pointY, typeOfTower, units) {
        this.world = world;
        this.pointX = pointX; // TODO to normal
        this.pointY = pointY;

        let pxPoint = this.world.area.getPixelPoint(pointX, pointY);
        this.realX = pxPoint.x;
        this.realY = pxPoint.y;

        this.typeOfTower = typeOfTower;
        this.cache = null;

        this.units = units;

        this._client_id = null;
    }

    get client_id() {
        return this._client_id;
    }

    set client_id(value) {
        this._client_id = value;
    }


    draw() {
        switch(this.typeOfTower) {
            case towerType.DEFAULT:
                this.drawStandartImpl();
                break;
            case towerType.BONUS:
                this.drawBonus();
                break;
            default:
                break;
        }
    }

    setRealCoordinates(x, y){
        let pxPoint = this.world.area.getPixelPoint(x, y);
        this.realX = pxPoint.x;
        this.realY = pxPoint.y;
    }

    setCell(pointX, pointY) {
        this.pointX = pointX;
        this.pointY = pointY;
    }

    setTextCoordinates(x, y) {
        if(this.cache == null)
            return;

        this.cache.text.x = x;
        this.cache.text.y = y;

        if(this.units)
            this.cache.text.text = this.units;
    }

    setTowerCoordinates(x, y) {
        if(this.cache == null)
            return;

        this.cache.circle.x = x;
        this.cache.circle.y = y;
    }

    destruct() {
        if(this.cache) {
            this.world.stage.removeChild(this.cache.circle);
            this.world.stage.removeChild(this.cache.text);
        }
    }

    drawStandartImpl() {
        if(this.cache == null) {
            this.cache = {};

            let shape = new createjs.Shape();
            shape.graphics.beginStroke("#ff0000").drawCircle(0, 0, conf.radiusTower);

            this.cache.circle = shape;

            this.cache.text = new createjs.Text(this.units, "20px Arial", "#ff7700");
            this.cache.text.textBaseline = "middle";
            this.cache.text.textAlign = "center";

            this.setTextCoordinates(this.realX, this.realY);
            this.setTowerCoordinates(this.realX, this.realY);

            this.world.appendOnMap(this.cache.circle);
            this.world.appendOnMap(this.cache.text);
        }

        this.setTextCoordinates(this.realX, this.realY);
        this.setTowerCoordinates(this.realX, this.realY);
    }

    drawBonus() {
        if(this.cache == null) {
            this.cache = {};
            let shape = new createjs.Shape();
            shape.graphics.beginStroke("#000000").drawCircle(0, 0, conf.radiusTower);

            this.cache.circle = shape;

            this.cache.text = new createjs.Text(this.units, "20px Arial", "#ff7700");
            this.cache.text.textBaseline = "middle";
            this.cache.text.textAlign = "center";

            this.setTextCoordinates(this.realX, this.realY);
            this.setTowerCoordinates(this.realX, this.realY);

            this.world.appendOnMap(this.cache.circle);
            this.world.appendOnMap(this.cache.text);
        }

        this.setTextCoordinates(this.realX, this.realY);
        this.setTowerCoordinates(this.realX, this.realY);
    }
}

export default Tower;

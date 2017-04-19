class Tower {
    constructor(world, pointX, pointY, typeOfTower, units, clientId, nick) {
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

    get point() {
        return {
            x: this.pointX,
            y: this.pointY
        }
    }

    decUnits(value) {
        this.units -= value;
    }

    setPerforming(flag) {
        // debugger;

        if(this.cache == null)
            return;

        if(flag)
            Tower.setShapeTower(this.cache.circle.graphics, "#00ff00", true);
        else {
            let style = this.getStyle();
            Tower.setShapeTower(this.cache.circle.graphics, style.color, style.fill);
        }
    }

    getStyle() {
        let color = null;
        let fill = null;

        switch(this.typeOfTower) {
            case towerType.DEFAULT:
                color = "#ff0000";
                fill = false;
                break;
            case towerType.BONUS:
                color = "#cccccc";
                fill = true;
                break;
            case towerType.ENEMY:
                color = "#000000";
                fill = true;
                break;
            default:
                console.log("wtf!!");
                return;
        }

        return {
            color: color,
            fill: fill
        };
    }

    draw() {
        let style = this.getStyle();
        this.drawStandartImpl(style.color, style.fill);
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

    static setShapeTower(graphics, color, fill) {
        if(fill)
            graphics.clear().beginFill(color).drawCircle(0, 0, conf.radiusTower);
        else
            graphics.clear().beginStroke(color).drawCircle(0, 0, conf.radiusTower)
    }

    drawStandartImpl(color, fill) {
        if(this.cache == null) {
            this.cache = {};

            let shape = new createjs.Shape();
            Tower.setShapeTower(shape.graphics, color, fill);

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

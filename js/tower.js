class Tower {
    constructor(map, x, y, typeOfTower, points) {
        this.map = map;
        this.x = x; // TODO to normal
        this.y = y;

        this.points = points;

        this.typeOfTower = typeOfTower;
        this.cache = null;
    }

    draw() {
        switch(this.typeOfTower) {
            case 0:
                this.drawStandartImpl();
                break;
            default:
                break;
        }
    }

    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }

    setTextCoordinates(x, y, text) {
        if(this.cache == null)
            return;

        this.cache.text.x = x;
        this.cache.text.y = y;

        if(text)
            this.cache.text.text = text;
    }

    setTowerCoordinates(x, y) {
        if(this.cache == null)
            return;

        this.cache.circle.x = x;
        this.cache.circle.y = y;
    }

    destruct() {
        if(this.cache) {
            this.map.stage.removeChild(this.cache.circle);
            this.map.stage.removeChild(this.cache.text);
        }
    }

    drawStandartImpl() {
        if(this.cache != null) {
            this.setTextCoordinates(this.x, this.y);
            this.setTowerCoordinates(this.x, this.y);
        } else {
            this.cache = {};

            let shape = new createjs.Shape();
            shape.graphics.beginStroke("#ff0000").drawCircle(0, 0, conf.radiusTower);

            this.cache.circle = shape;

            this.cache.text = new createjs.Text("12", "20px Arial", "#ff7700");
            this.cache.text.textBaseline = "middle";
            this.cache.text.textAlign = "center";

            this.map.appendOnMap(this.cache.circle);
            this.map.appendOnMap(this.cache.text);
        }
    }
}

window.Town = Tower;
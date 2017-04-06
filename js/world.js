'use strict';

class World {
    constructor(area) {
        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas-game";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 1;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.background = "transparent";

        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = document.documentElement.clientWidth;

        document.body.appendChild(this.canvas);

        this.world = new createjs.Stage(this.canvas.id);
        createjs.Touch.enable(this.world);
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.area = area;
    }

    get stage() {
        return this.world;
    }

    get basicCenter() {
        return {x: this.world.canvas.width / 2, y: this.world.canvas.height / 2};
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }

    update() {
        this.stage.update();
    }

    setCallBack(event, func) {
        this.world.on(event, func)
    }

    appendOnMap(child) {
        this.world.stage.addChild(child); // TODO normal coor
    }

    /** Fabric draw **/
    newShape(position, radius, color, visible) {
        let circle = new createjs.Shape();
        circle.visibility = visible || true;

        let pos = position || {x: 0, y: 0};

        circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
        this.world.stage.addChild(circle);
        return circle;
    }

    newLine(color, visible) {
        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(3);
        line.visibility = visible || true;

        this.world.addChild(line);
        return line;
    }

    newImage(file, visible) {
        /*var box = new createjs.Shape();
         box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100);
         box.graphics.drawCircle(0, 0, 100);
         box.cache(0, 0, 100, 100);

         let image = new createjs.Bitmap(file);
         image.filters = [
         new createjs.AlphaMapFilter(box.cacheCanvas)
         ];*/

        let image = new createjs.Bitmap(file);

        this.world.addChild(image);
        return image;
    }

}

window.World = World;
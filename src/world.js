'use strict';

class World {
    constructor(elementDOM, area) {
        this.canvas = document.createElement("canvas");

        this.canvas.id = "canvas-game";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 1;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.background = "transparent";
        this.canvas.style.left = "0px";

        this.canvas.height = area.canvas.height;
        this.canvas.width = area.canvas.width;
        this.canvas.style.top = area.canvas.style.top;
        this.canvas.style.left = area.canvas.style.left;
        this.offset = {
            x: 0,
            y: 0
        };

        elementDOM.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas.id);
        this.map = new createjs.Container();
        this.stage.addChild(this.map);

        createjs.Touch.enable(this.map);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.clientHeight = document.documentElement.clientHeight;
        this.clientWidth = document.documentElement.clientWidth;
        this.area = area;

        this.arrayMap = [];
        for(let i = 0; i < this.area.rectSize; i++) {
            this.arrayMap.push(new Array(this.area.rectSize));
        }
        this.zoom = this.area.zoom;
    }

    get basicCenter() {
        return {x: this.map.canvas.width / 2, y: this.map.canvas.height / 2};
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
        this.map.on(event, func)
    }

    appendOnMap(child) {
        this.map.addChild(child); // TODO normal coor
    }

    /** Fabric draw **/
    newShape(position, radius, color, visible) {
        let circle = new createjs.Shape();
        circle.visibility = visible || true;

        let pos = position || {x: 0, y: 0};

        circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
        this.map.addChild(circle);
        return circle;
    }

    newLine(color, visible) {
        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(3);
        line.visibility = visible || true;

        this.map.addChild(line);
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

        this.map.addChild(image);
        return image;
    }

    setOffset(x,y){
        this.offset.x = x;
        this.offset.y = y;
        this.map.setTransform(x,y);
        this.area.setOffset(x,y);
    }

    getRelativeCoord(x, y){
        return {x: x - this.offset.x, y: y - this.offset.y}
    }

    setOffsetForCenter(x,y){
        this.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));
        this.area.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));

        let cellPoint = this.area.getCellPosition(x,y);
        this.area.setVisibles(cellPoint.x, cellPoint.y);
    }

    setZoom(zoom){
        debugger;
        this.map.scaleX = this.map.scaleY = zoom;
        this.area.world.scaleX = this.area.world.scaleY = zoom;
     //   this.stage.canvas.style.zoom = zoom;
     //   this.area.stage.canvas.style.zoom = zoom;
        // this.stage.canvas.height /= zoom;
        // this.stage.canvas.width /= zoom;
        // this.area.stage.canvas.height /= zoom;
        // this.area.stage.canvas.width /= zoom;
        this.stage.update();
        this.area.stage.update();
        this.zoom = zoom;
        this.area.zoom = zoom;
    }

}

export default World;
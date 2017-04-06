'use strict';
window.World =
    class World {
        constructor(area) {
            this.canvas = document.createElement("canvas");
            this.canvas.id = "canvas-game";
            this.canvas.style.position = "absolute";
            this.canvas.style.zIndex = 1;
            this.canvas.style.top = 0;
            this.canvas.style.left = 0;
            this.canvas.style.background = "transparent";

            this.canvas.height = area.canvas.height;
            this.canvas.width = area.canvas.width;
            this.canvas.style.top = area.canvas.style.top;
            this.canvas.style.left = area.canvas.style.left;
            this.offset = {
                x: 0,
                y: 0
            };

            document.body.appendChild(this.canvas);

            this.map = new createjs.Stage(this.canvas.id);
            createjs.Touch.enable(this.map);
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.clientHeight = document.documentElement.clientHeight;
            this.clientWidth = document.documentElement.clientWidth;
            this.area = area;
        }

        get stage() {
            return this.map;
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
            this.map.stage.addChild(child); // TODO normal coor
        }

        /** Fabric draw **/
        newShape(position, radius, color, visible) {
            let circle = new createjs.Shape();
            circle.visibility = visible || true;

            let pos = position || {x: 0, y: 0};

            circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
            this.map.stage.addChild(circle);
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
            this.canvas.style.left = x + "px";
            this.canvas.style.top = y + "px";
            area.setOffset(x,y);
        }

        getRelativeCoord(x, y){
            return {x: x - this.offset.x, y: y - this.offset.y}
        }

        setOffsetForCenter(x,y){
            this.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));
            this.area.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));
        }

    }
;
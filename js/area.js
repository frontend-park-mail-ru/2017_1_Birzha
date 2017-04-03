'use strict';
window.Area =
    class Area {
        constructor() {
            this.canvas = document.createElement("canvas");
            this.canvas.id = "canvas-area";
            this.canvas.style.position = "absolute";
            this.canvas.style.zIndex = 0;
            this.canvas.style.top = 0;
            this.canvas.style.left = 0;

            this.canvas.height = document.documentElement.clientHeight;
            this.canvas.width = document.documentElement.clientWidth;

            document.body = document.createElement("body");
            document.body.appendChild(this.canvas);

            this.map = new createjs.Stage(this.canvas.id);
            createjs.Touch.enable(this.map);
            this.width = this.canvas.width;
            this.height = this.canvas.height;

            this.rectSize = 50;
            this.borderSize = 8;

            this.initArea();
            this.map.stage.update();

        }

        initArea() {
            let rectSize = this.rectSize;
            let borderSize = this.borderSize;
            let xCount = (this.width / rectSize | 0) + 1;
            let yCount = (this.height / rectSize | 0) + 1;
            let cell = new createjs.Shape();
            for (let i = 0; i < xCount; i++) {
                for (let j = 0; j < yCount; j++) {
                    cell.graphics.beginFill("#fffbf7").drawRect(i * rectSize, j * rectSize, rectSize, rectSize).beginFill("#dbffd0").drawRect(i * rectSize + borderSize, j * rectSize + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
                }
            }
            this.map.stage.addChild(cell);
        }

        getExactPosition(x, y) {
            let cx = x / this.rectSize | 0;
            let cy = y / this.rectSize | 0;
            cx *= this.rectSize;
            cy *= this.rectSize;
            cx += this.rectSize / 2 | 0;
            cy += this.rectSize / 2 | 0;
            cx += this.borderSize / 2;
            cy += this.borderSize / 2;
            return {x: cx, y: cy};
        }

        getCellPosition(x, y) {
            let cx = x / this.rectSize | 0;
            let cy = y / this.rectSize | 0;
            return {x: cx, y: cy};
        }

        getPixelPoint(x, y) {
            let px = x * this.rectSize + (this.rectSize + this.borderSize) / 2;
            let py = y * this.rectSize + (this.rectSize + this.borderSize) / 2;
            return {x: px, y: py}
        }

        markSelectedCell(x, y) {
            let rectSize = this.rectSize;
            let borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            let cell = new createjs.Shape();
            cell.graphics.beginFill("#beffb1").drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
            this.map.stage.addChild(cell);
            this.map.stage.update();
        }
    }
;
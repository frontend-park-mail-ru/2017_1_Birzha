window.EnemyObject =
    class EnemyObject extends window.DrawerObject {
        constructor(map, point, nameUser, color) {
            super(map);
            this.name = nameUser;

            this.posCenter = map.basicCenter;
            this.posCenter = area.getCellPosition(this.posCenter.x, this.posCenter.y);
            point = area.getCellPosition(point.x, point.y);
            this.positionX = point.x || this.posCenter.x;
            this.positionY = point.y || this.posCenter.y;

            this.userSize = 5; // CONST

            this.userCircle = null;
        }

        get myPosition() {
            return {x: this.positionX, y: this.positionY};
        }

        drawObject() {
            let pxPos = area.getPixelPoint(this.positionX, this.positionY);
            this.userCircle = this.map.newShape({
                x: pxPos.x,
                y: pxPos.y
            }, this.userSize, color || "DeepSkyBlue");
        }

        animation(dx, dy) {
            this.positionX += dx;
            this.positionY += dy;
        }
    }
;
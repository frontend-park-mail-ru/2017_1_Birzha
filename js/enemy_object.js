window.EnemyObject =
    class EnemyObject extends window.DrawerObject {
        constructor(map, point, nameUser, color) {
            super(map);
            this.name = nameUser;

            let posCenter = map.basicCenter;
            posCenter = area.getCellPosition(posCenter.x, posCenter.y);

            point = point || {x: posCenter.x, y: posCenter.y};
            this.positionX = point.x;
            this.positionY = point.y;

            this.userSize = 5; // CONST

            this.userCircle = null;
        }

        get myPosition() {
            return {x: this.positionX, y: this.positionY};
        }

        drawObject() {
            this.userCircle = this.map.newShape({
                x: this.positionX,
                y: this.positionY
            }, this.userSize, color || "DeepSkyBlue");
        }

        animation(dx, dy) {
            this.positionX += dx;
            this.positionY += dy;
        }
    }
;
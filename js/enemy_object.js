window.EnemyObject =
    class EnemyObject extends window.DrawerObject {
        constructor(map, point, nameUser, color) {
            super(map);
            this.name = nameUser;

            let posCenter = map.basicCenter;
            posCenter = area.getExactPosition(posCenter.x, posCenter.y);
            this.positionX = point.x || posCenter.x;
            this.positionY = point.y || posCenter.y;

            this.userSize = 5; // CONST

            this.userCircle = null;
        }

        get myPosition() {
            return {x: this.positionX, y: this.positionY};
        }

        drawObject() {
            this.userCircle = this.map.newShape({
                x: posCenter.x,
                y: posCenter.y
            }, this.userSize, color || "DeepSkyBlue");
        }

        animation(dx, dy) {
            this.positionX += dx;
            this.positionY += dy;
        }
    }
;
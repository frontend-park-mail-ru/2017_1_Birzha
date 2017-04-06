
class GameObject {
    constructor(world, point, nameUser) {
        this.world = world;
        this.name = nameUser;
    }

    drawObject() {
        console.log("Draw NoObject!");
    }

    animation(dx, dy) {
        console.log("Animate NoObject!");
    }
}

window.GameObject = GameObject;
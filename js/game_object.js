class GameObject {
    constructor(world, clientID) {
        this.world = world;
        this.clientID = clientID;
    }

    drawObject() {
        console.log("Draw NoObject!");
    }

    animation(dx, dy) {
        console.log("Animate NoObject!");
    }
}

export default GameObject;
class GameObject {
    constructor(world, clientId, nickName) {
        this.world = world;
        this.clientId = clientId;
        this.nickName = nickName;
    }

    drawObject() {
        console.log("Draw NoObject!");
    }

    animation(dx, dy) {
        console.log("Animate NoObject!");
    }
}

export default GameObject;
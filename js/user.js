class User extends GameObject {
    constructor(connection, world, point, nameUser) {
        super(world, nameUser);

        this.userInterface = new UserInterface(world, {
            "getRealPosition": this.myRealPosition.bind(this),
            "addTower": this.addNewTower.bind(this)
        });

        this.userAction = new UserAction(connection);

        /*** Events ***/
        // connection.eventListen("bonus", (json) => {
        //     // parse json and call newBonus
        // });
        /**************/
        this.myGraph = new GraphTree(world);

        let tower = new Tower(this.world, point.x, point.y, towerType.DEFAULT, conf.defaultStartUnit);
        this.currentNode = this.myGraph.addNewVertexToCurrent(tower);

        this.drawObject();
    }

    /**
     *
     * @param pointNewTower
     */
    addNewTower(pointNewTower) {
        let tower = new Tower(this.world, pointNewTower.x, pointNewTower.y, towerType.DEFAULT, this.currentNode.data.units / 2);
        this.currentNode = this.myGraph.addNewVertexToCurrent(tower);

        this.positionRealX = pointNewTower.x;
        this.positionRealY = pointNewTower.y;

        this.drawObject();
    }

    createVertextData(position, units) {
        if(typeof position !== "object")
            return null;

        position["units"] = units;
        return position
    }

    newBonus(position) {}

    myRealPosition() {
        return {x: this.currentNode.data.realX, y: this.currentNode.data.realY};
    }

    drawObject() {
        this.myGraph.showNodes();
    }
}

window.UserObject = User;

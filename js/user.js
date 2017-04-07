class User extends GameObject {
    constructor(connection, world, point, clientID) {
        super(world, clientID);

        this.arrayMap = world.arrayMap;
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

        let tower = this.generateMyTower(point, conf.defaultStartUnit);

        this.currentNode = this.myGraph.addNewVertexToCurrent(tower);
        this.addTowerToMap(point, this.currentNode);

        this.drawObject();
        this.world.canvas.requestPointerLock();

        //update camera
        this.world.setOffsetForCenter(point.x, point.y);
        scrollTo(0,0);
    }

    /**
     *
     * @param pointNewTower
     */
    addNewTower(pointNewTower) {
        let placeTower = this.getFromMap(pointNewTower);

        if (placeTower == null) {
            let tower = this.generateMyTower(pointNewTower, this.currentNode.data.units / 2);

            this.currentNode = this.myGraph.addNewVertexToCurrent(tower);
            this.addTowerToMap(pointNewTower, this.currentNode);
        } else {
            debugger;
            if (placeTower.constructor.name == "NodeImpl") {
                let newUnits = this.currentNode.data.units;

                this.currentNode.data.units /= 2;
                placeTower.data.units += newUnits;

                this.currentNode = this.myGraph.setCurrentVertex(placeTower);
            } else {
                // bonus
                let bonusUnits = placeTower.units;
                let tower = this.generateMyTower(pointNewTower, bonusUnits);

                placeTower.destruct();
                this.currentNode = this.myGraph.addNewVertexToCurrent(tower);

                this.addTowerToMap(pointNewTower, this.currentNode);
            }
        }
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

    generateMyTower(point, units) {
        let tower = new Tower(this.world, point.x, point.y, towerType.DEFAULT, units);
        tower.client_id = this.clientID;
        return tower;
    }

    addTowerToMap(point, tower) {
        this.world.arrayMap[point.x][point.y] = tower;
    }

    getFromMap(point) {
        // put only nodes
        let r = this.world.arrayMap[point.x][point.y];
        if(!r)
            return null;

        return r;
    }
}

window.UserObject = User;

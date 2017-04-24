import GraphTree from './graph_tree';

import UserAction from './user_action';
import UserInterface from './user_interface';

import GameObject from './game_object';

import Tower from './tower'

class User extends GameObject {
    constructor(connection, world, point, clientId, userNick, units) {
        super(world, clientId, userNick);

        this.arrayMap = world.arrayMap;
        this.userInterface = new UserInterface(world, {
            "getRealPosition": this.myRealPosition.bind(this),
            "addTower": this.addNewTower.bind(this),
            "setCurrentNode": this.setCurrentNode.bind(this),
            "getClientId": ()=>{ return this.clientId; }
        }, point);

        this.userAction = new UserAction(connection);

        console.log("My nick: " + userNick);

        /*** Events ***/
        // connection.eventListen(DATATYPE_HELLO, (json) => {
        //     console.log("My nick: " + json["nickname"]);
        // });
        /**************/
        this.myGraph = new GraphTree(world);

        let tower = this.generateMyTower(point, units || conf.defaultStartUnit);

        this.mainNode = this.myGraph.addNewVertexToCurrent(tower);
        this.currentNode = this.mainNode;
        this.addTowerToMap(point, this.mainNode);

        this.drawObject();

        //update camera
        this.world.area.markSelectedCell(point.x, point.y);
        let pxPoint = this.world.area.getPixelPoint(point.x, point.y);
        this.world.setOffsetForCenter(pxPoint.x, pxPoint.y);
        this.world.area.world.stage.update();
        this.world.update();
        scrollTo(0,0);
    }

    setPerforming(flag) {
        debugger;
        this.currentNode.data.setPerforming(flag);
    }

    /**
     *
     * @param pointNewTower
     */
    addNewTower(pointNewTower) {
        let placeTower = this.getFromMap(pointNewTower);
        this.setPerforming(false); // TODO if error

        if (placeTower == null) {
            let countInNewUnits = parseInt(this.currentNode.data.units / 2); // TODO /2 /4 / 6
            this.currentNode.data.decUnits(countInNewUnits);

            let tower = this.generateMyTower(pointNewTower, countInNewUnits);

            this.currentNode = this.myGraph.addNewVertexToCurrent(tower);
            this.addTowerToMap(pointNewTower, this.currentNode);

            this.userAction.createTown(this.currentNode.data.point, pointNewTower, countInNewUnits);

        } else { // TODO work fight
            if (placeTower.constructor.name === "NodeImpl") {
                let newUnits = this.currentNode.data.units;

                this.currentNode.data.units /= 2;
                placeTower.data.units += newUnits;

            //    this.currentNode = this.myGraph.addNewVertexToCurrent(placeTower);
                this.currentNode = this.myGraph.goFromCurrentVertex(placeTower);
            //    this.currentNode = this.myGraph.setCurrentVertex(placeTower);
            } else {
                // bonus
                let bonusUnits = placeTower.units;
                let tower = this.generateMyTower(pointNewTower, bonusUnits);

                this.userAction.createTown(this.currentNode.data.point, pointNewTower, bonusUnits);

                placeTower.destruct();
                this.currentNode = this.myGraph.addNewVertexToCurrent(tower);

                this.addTowerToMap(pointNewTower, this.currentNode);
            }
        }

        this.drawObject();
    }

    setCurrentNode(pointCurrentTower){
   //     debugger;
        let tower = this.getFromMap(pointCurrentTower);
        if(tower.data.client_id === this.clientId) {
            this.currentNode = tower;
            this.myGraph.setCurrentVertex(tower);
        }
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
        let tower = new Tower(this.world, point.x, point.y, towerType.DEFAULT,
            units, this.clientId, this.nickName);

        tower.client_id = this.clientId;
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

export default User;

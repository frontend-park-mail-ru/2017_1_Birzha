import GameObject from '../game_object';
import GraphTree from '../../graph/graph_tree';

import Tower from '../models/tower';

/*
example info: {"nickname":"Nick2696","id":5784,"units":0,"beginX":50,"beginY":95,"readyForGameStart":true}
 */

class Enemy extends GameObject {
    constructor(connection, world, info) {
        super(world, info.id, info.nickname);

        let point = {x: info.beginX, y: info.beginY};

        this.connection = connection;

        this.enemyGraph = new GraphTree(world);

        let tower = this.generateEnemyTower(point, info.units);

        this.currentNode = this.enemyGraph.addNewVertexToCurrent(tower);
        this.addTowerToMap(point, this.currentNode);

        this.drawObject();
    }

    drawObject() {
        this.enemyGraph.showNodes();
    }

    animation(dx, dy) {}

    addTowerToMap(point, tower) {
        this.world.arrayMap[point.x][point.y] = tower;
    }

    generateEnemyTower(point, units) {
        let tower = new Tower(this.world, point.x, point.y, towerType.ENEMY,
            units, this.clientId, this.nickName);

        tower.client_id = this.nickName;
        return tower;
    }

    /* example: {"xfrom":3,"yfrom":1,"xto":5,"yto":2,"unitsCount":50,"parentUnitsCount":0} */
    createNewEnemyVertex(info) {
        // debugger;
        let pointFrom = { x: info["xfrom"], y: info["yfrom"] };
        let pointTo = { x: info["xto"], y: info["yto"] };
        let genUnits = info["unitsCount"];

        let lastNode = this.currentNode;

        let tower = this.generateEnemyTower(pointTo, genUnits);

        let fromNode = this.world.arrayMap[pointFrom.x][pointFrom.y];
        this.enemyGraph.setCurrentVertex(fromNode);
        this.currentNode = this.enemyGraph.addNewVertexToCurrent(tower);
        this.addTowerToMap(pointTo, this.currentNode);

        lastNode.data.units = info["parentUnitsCount"];
    }

    setPerforming(flag) {
        this.enemyGraph.shapes.forEach((val, item)=>{
            debugger;
            item.setPerforming(flag);
        });
    }
}

export default Enemy;
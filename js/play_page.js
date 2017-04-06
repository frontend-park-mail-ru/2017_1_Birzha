'use strict';

class PlayPage extends BasePage {
    constructor(world) {
        super(world);
        /*
         this.userService = userService;
         this.userService.eventReceive = this.updateAllUsers.bind(this);
         */


        this.enemies = [];
        this.user = null;

        this.connection = null;
        this.resource = null;
    }


    startPage(connection, resource) {
        // if(connection === null)
        //    return RES_ERROR;


        this.connection = connection;
        this.resource = resource;

        this.initScene("player1");

        return RES_OK;
    }

    initScene(nameUser) {
        // TODO get position from server
        window.controls = new Controls();
        this.user = new User(null, this.world, {x: 3, y: 3}, nameUser || "Wonder");
        window.controls.addPlayerToScoreBoard("Alex", 13412);
        window.controls.addPlayerToScoreBoard("Alg", 12423);
        window.controls.addPlayerToScoreBoard("Sergey", 15352);
    }

    updateAllUsers(json) {
        // TODO Noraml method`
        /*
        console.log("receive");
        let objects = json["newUsersPositions"];
        for (let key in objects) {
            console.log(objects[key]["NewPoint"]["x"]);
            console.log(objects[key]["NewPoint"]["y"]);
            this.enemies.push(new User(this.world, {
                x: objects[key]["NewPoint"]["x"],
                y: objects[key]["NewPoint"]["y"]
            }));
        }
        */
    }
}

window.PlayPage = PlayPage;
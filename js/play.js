import { UserObject } from 'me'
import { ServerConnect } from 'server'

export class UserService {
    constructor(finishConnect) {
    //    this.socket = new ServerConnect("ws://192.168.0.56:8080", finishConnect);

   //     this.socket.onMessage = this.onMessage.bind(this);

        debugger;
        this.eventMessage = null;
    }

    onMessage(json) {
        console.log(json);

        if(json["method"] == "update" && this.eventMessage)
            this.eventMessage(json);

        if(json["method"] == "whoami")
            console.log(json["ClientID"]);

    }

    changePosition(dx, dy) {

    }

    set eventReceive(event) {
        this.eventMessage = event;
    }
}

export class PlayPage extends BasePage {
    constructor(map, userService) {
        super(map);
/*
        this.userService = userService;
        this.userService.eventReceive = this.updateAllUsers.bind(this);
*/
        this.map = map;
        this.enemies =  [];
        this.userObject = null;

    }


    startPage(resource) {
        this.initScene("player1");
        this.map.canvas.addEventListener("upd", this.upd.bind(this));
    }

    initScene(nameUser) {
        this.userObject = new UserObject(this.base, nameUser || "Wonder");
    }

    upd() {
        /* draw enimies */
        this.enemies.forEach(function(items) {
            items.drawObject();
        });
        /****************/

        this.userObject.drawObject();
        this.userObject.drawObject();
        this.base.update();
    }

    updateAllUsers(json) {
        // TODO Noraml method`
        console.log("receive");
        let objects = json["newUsersPositions"];
        for(let key in objects) {
            console.log(objects[key]["NewPoint"]["x"]);
            console.log(objects[key]["NewPoint"]["y"]);
            this.enemies.push(new UserObject(this.base, {
                x: objects[key]["NewPoint"]["x"],
                y: objects[key]["NewPoint"]["y"]
            }));
        }
    }
}
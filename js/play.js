class UserService {
    constructor(finishConnect) {
        this.socket = new ServerConnect("ws://192.168.0.56:8080", finishConnect);

        this.socket.onMessage = this.onMessage.bind(this);

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

class PlayPage extends BasePage {
    constructor(map, userService) {
        super(map);

        this.userService = userService;
        this.userService.eventReceive = this.updateAllUsers.bind(this);

        this.enemies =  [];
        this.userObject = null;
    }

    startPage(resource) {
        this.initScene("player1");

        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        createjs.Ticker.setInterval(100);
        createjs.Ticker.setFPS(40);
    }

    initScene(nameUser) {
        this.userObject = new UserObject(this.base, nameUser || "Wonder");
    }

    tick(event) {
        /* draw enimies */
        this.enemies.forEach(function(items) {
            items.drawObject();
        });
        /****************/

        this.userObject.drawObject();
        this.base.update();
    }

    updateAllUsers(json) {
        // TODO Noraml method
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
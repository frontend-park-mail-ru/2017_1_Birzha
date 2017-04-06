class Connection {
    constructor(finishConnect) {
        this.socket = new ServerConnect("ws://192.168.0.56:8080", finishConnect);
        this.socket.onMessage = this.onMessage.bind(this);

        this.eventMessage = null;
        this.methodMap = {};
    }

    eventListen(nameMethod, callback) {
        this.methodMap[nameMethod] = callback;
    }

    deleteListen(nameMethod) {
        delete this.methodMap[nameMethod];
    }

    onMessage(json) {
        console.log("Get json: " + json);
        if(json["method"] in this.methodMap) {
            this.methodMap[json["method"]](json);
        }
    }

    send(json, callback) {
        this.socket.sendData(json, callback);
    }
}

window.UserService = Connection;


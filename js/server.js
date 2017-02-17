'use strict';

class ServerConnect {
    /**
     * @param server as string
     */
    constructor(server, opened) {
        this.statusServer = false; // TODO change

        this.socket = new WebSocket(server);
        this.socket.onopen = opened;
    }

    /**
     * @param json_data as Object
     * @param callback  as function
     */
    sendData(json_data, callback) {
        let needSend = ServerConnect.toJson(json_data);
        this.socket.send(needSend);
    }

    /**
     * @param func as function(event)
     */
    set onMessage(func) {
        this.socket.onmessage = function(event) {
            func(ServerConnect.fromJson(event.data));
        }
    }

    static toJson(obj) {
        return JSON.stringify(obj);
    }

    static fromJson(text) {
        return JSON.parse(text);
    }
}
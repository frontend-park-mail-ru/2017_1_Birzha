import ServerConnect from './server'

class Connection {
    constructor(finishConnect) {
        this.socket = new ServerConnect(Connection.parseHost(conf.ip[conf.baseIP]), finishConnect);
        this.socket.onMessage = this.onMessage.bind(this);

        this.eventMessage = null;
        this.methodMap = {};
    }

    addEventListen(nameMethod, callback) {
        if(!(nameMethod in this.methodMap)) {
            this.methodMap[nameMethod] = [];
        }

        return this.methodMap[nameMethod].push(callback) - 1;
    }

    // TODO
    deleteListen(nameMethod) {
        for(let i in this.methodMap[nameMethod]) {
            delete this.methodMap[nameMethod][i];
        }
    }

    deleteListenIndex(nameMethod, id) {
        if(nameMethod in this.methodMap) {
            this.methodMap[nameMethod].splice(id, id);
            console.log(this.methodMap[nameMethod]);
            return true;
        }

        console.log("wtf!");
        return false;
    }

    onMessage(json) {
        console.log("Get json: " + JSON.stringify(json));
        if(json["datatype"] in this.methodMap) {
            this.methodMap[json["datatype"]].map( (func) => func(json) );
        }
    }

    send(action, json) {
        json = json || {};
        json.action = action;

        this.socket.sendData(json);
    }

    static parseHost(ip) {
        return "ws://" + ip.host + ":" + ip.port + ip.path;
    }
}

export default Connection;


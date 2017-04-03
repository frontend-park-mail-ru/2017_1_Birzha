'use strict';
window.UserService =
    class UserService {
        constructor(finishConnect) {
            //    this.socket = new ServerConnect("ws://192.168.0.56:8080", finishConnect);

            //     this.socket.onMessage = this.onMessage.bind(this);

            debugger;
            this.eventMessage = null;
        }

        onMessage(json) {
            console.log(json);

            if (json["method"] == "update" && this.eventMessage)
                this.eventMessage(json);

            if (json["method"] == "whoami")
                console.log(json["ClientID"]);

        }

        changePosition(dx, dy) {

        }

        set eventReceive(event) {
            this.eventMessage = event;
        }
    }
;
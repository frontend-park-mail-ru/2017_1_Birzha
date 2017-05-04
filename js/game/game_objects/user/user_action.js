class UserAction {
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param world
     * @param from
     * @param to
     * @param unitCounts ~ int
     */
    createTown(from, to, unitCounts) {
        if(!this.connection)
            return;

        this.connection.send(GAME_UPDATE_MY_MOVE, {
            move: {
                xfrom: from.x,
                yfrom: from.y,
                xto: to.x,
                yto: to.y,
                unitsCount: unitCounts,
                type: 1
            }
        });

        let id = this.connection.addEventListen(DATATYPE_PLAYERMOVE, (json) => {
            console.log("Print DATATYPE_PLAYERMOVE in userAction" + id);
            if(json["type"] === 0) {
                this.connection.send(GAME_ACCEPT_MY_MOVE);
                this.connection.deleteListenIndex(DATATYPE_PLAYERMOVE, id);
            } else {
                console.log("wtf!");
            }
        });

        console.log(id);
    }

    setStop(world) {

    }
}

export default UserAction;
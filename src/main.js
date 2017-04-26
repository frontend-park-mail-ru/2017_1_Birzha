'use strict';

import Area from './area';
import World from './world';

import Loader from './loader';

import MenuPage from './menu_page';
import PlayPage from './play_page';

import Connection from './connection';
import Room from './room';

window.DATATYPE_ROOMINFO = 1;
window.DATATYPE_PLAYERMOVE = 2;
window.DATATYPE_NEWBONUS = 3;
window.DATATYPE_ERROR = 4;
window.DATATYPE_HELLO = 5;

window.READY_FOR_ROOM_SEARCH = 1;
window.READY_FOR_GAME_START = 2;
window.GAME_UPDATE_MY_MOVE = 3;
window.GAME_ACCEPT_MY_MOVE = 4;

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.STATUS_CREATING = 0;
window.STATUS_PLAYING = 1;
window.STATUS_READY = 2;

window.conf = {
    ip: [ {host: "172.16.83.124", port: 8081, path: "/game "},
          {host: "192.168.43.107", port: 8081, path: "/game"},
          {host: "172.16.90.18", port: 8081, path: "/game"},
          {host: "172.20.10.3", port: 8081, path: "/game"},
          {host: "192.168.1.2", port: 8081, path: "/game"}
    ],
    baseIP: 4,

    countUsersInRoom: 2,

    // UI
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0,
    BONUS: 1,
    ENEMY: 2
};

function startGame(elementDOM) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    let connectionService = null;

    let room = null;

    const iAmReady = function () {
        if(room === null) {
            alert("room ~ null");
            return;
        }

   //     world.canvas.requestPointerLock(); // for lock user

        room.iAmReady();
    };

    let area = new Area(elementDOM);

    let world = new World(elementDOM, area);
    let menuPage = new MenuPage(world, iAmReady);


    new Loader(needFilesForProjectManifest, (result) => {
        console.log(result);
        menuPage.startPage(result);
    });

    connectionService = new Connection((status) => {
        if(status === RES_ERROR) {
            alert("error connect server!"); // error
            return;
        }

        let playPage = new PlayPage(world, connectionService, null); // TODO loading

        connectionService.addEventListen(DATATYPE_HELLO, (json) => {
            let id = json["id"];
            let nickname = json["nickname"];

            if(!id || !nickname) {
                alert("error");
                return;
            }

            room = new Room(connectionService, menuPage, id, nickname, (room) => {
                room.deleteListenRoomInfo();

                menuPage.stopPage(); // destruct room choose

                playPage.startPage(room);

                world.update();
            });

        });

    });
}

export default startGame;
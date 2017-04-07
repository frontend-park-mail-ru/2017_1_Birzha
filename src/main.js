'use strict';

import Area from './area';
import World from './world';

import Loader from './loader';

import MenuPage from './menu_page';
import PlayPage from './play_page';

import Connection from './connection';

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.conf = {
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0,
    BONUS: 1
};

function startGame(elementDOM) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    const startGame = function () {
        menuPage.stopPage();

        const run = function () {
            new PlayPage(world).startPage(null);
            world.update();
        };
        run();
        //  userService = new Connection(run);
    };

    let area = new Area(elementDOM);

    let world = new World(elementDOM, area);
    let menuPage = new MenuPage(world, startGame);

    new Loader(needFilesForProjectManifest, function (result) {
        console.log(result);

        menuPage.startPage(result);
    });

}

export default startGame;
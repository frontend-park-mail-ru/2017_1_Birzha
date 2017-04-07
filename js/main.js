'use strict';

const RES_OK = 0;
const RES_ROLLBACK = 1;
const RES_ERROR = 2;

window.conf = {
    reactSize: 100,
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

(function (window) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    const startGame = function() {
        menuPage.stopPage();

        const run = function() {
            new PlayPage(world).startPage(null);
            world.update();
        };
        run();
        //  userService = new Connection(run);
    };

    let area = new Area();

    let world = new World(area);
    let menuPage = new MenuPage(world, startGame);

    new Loader(needFilesForProjectManifest, function(result) {
        console.log(result);

        menuPage.startPage(result);
    });

})(window);
'use strict';
(function (window) {
    const World = window.World;
    const Area = window.Area;
    const MenuPage = window.MenuPage;
    const PlayPage = window.PlayPage;
    const Loader = window.Loader;

    window.area = new Area();

    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    const startGame = function() {
        menuPage.stopPage();
        debugger;
        const run = function() {
            new PlayPage(world).startPage(null);
            world.update();
        };
        run();
        //  userService = new UserService(run);
    };

    let world = new World(area);
    let menuPage = new MenuPage(world, startGame);

    new Loader(needFilesForProjectManifest, function(result) {
        console.log(result);

        menuPage.startPage(result);
    });

})(window);
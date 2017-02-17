const startProjectWithResource = function(resourse) {
    base = new World("cyclic-canvas");
    // base.initScene("new-user");

    let cenX = base.basicCenter.x, cenY = base.basicCenter.y;

    children = [];

    buttonMenu = base.newImage(resourse.getResult("playButton"));
    buttonMenu.x = cenX -  buttonMenu.image.width / 2;
    buttonMenu.y = cenY - buttonMenu.image.height / 2;

    buttonMenu.on('click', function() {
        // New scene !!!

        createjs.Ticker.setPaused(true);
        createjs.Ticker.removeEventListener("tick", tick);

        console.log("!");

        menuGraph.destruct();
        base.stage.removeChild(buttonMenu);
        base.stage.clear();

        base.update();
        base.initScene();
    });

    menuGraph = new GraphTree(base);
    children.push(menuGraph.addNewVertexToCurrent({x: cenX + 100, y: cenY + 100}));
    children.push(menuGraph.addNewVertexByMove(50, 50));
    children.push(menuGraph.addNewVertexByNode({x: 50, y: 100}, menuGraph.getCurrentVertex));
    children.push(menuGraph.addNewVertexByMove(10, 30));
    children.push(menuGraph.addNewVertexByMove(100, -50));

    menuShapes = [
        {angle: 0, left: 0, right: base.getWidth / 2.5, top: 0, down: base.getHeight / 2.5},
        {angle: 0, left: 0, right: base.getWidth / 2.5, top: 0, down: base.getHeight / 2.5},
        {angle: 0, left: base.getWidth / 1.5, right: base.getWidth, top: 0, down: base.getHeight / 2.5},
        {angle: 0, left: 0, right: base.getWidth / 2.5, top: base.getHeight / 1.5, down: base.getHeight},
        {angle: 0, left: base.getWidth / 1.5, right: base.getWidth, top: base.getHeight / 1.5, down: base.getHeight}
    ];

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setInterval(100);
    createjs.Ticker.setFPS(40);


    ticker = 0;
    function tick(event) {
        // console.log(createjs.Ticker.getMeasuredFPS());
        if(!createjs.Ticker.getPaused()) {
            ticker++;

            children.forEach(function(item, index) {
                if(ticker % 10 == 0)
                    menuShapes[index].angle = randomInteger(0, 360) * (Math.PI / 180);

                item.data.x += 3 * Math.cos(menuShapes[index].angle);
                item.data.y += 3 * Math.sin(menuShapes[index].angle);
            });
            flag = false;

            menuGraph.showNodes(resourse);
            base.update();
        }
    }
};
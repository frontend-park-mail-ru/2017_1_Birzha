window.MenuPage  =
    class MenuPage extends window.BasePage {
        constructor(map, callBackIfRun) {
            super(map);
            this.callbackIfRun = callBackIfRun;

            this.children = [];

            this.buttonMenu = null;
            this.menuShapes = null;

            this.ticker = 0;
        }

        startPage(resource) {
            console.log(resource);
            let cenX = this.base.basicCenter.x, cenY = this.base.basicCenter.y;

            this.buttonMenu = this.base.newImage(resource.getResult("playButton"));
            this.buttonMenu.x = cenX - this.buttonMenu.image.width / 2;
            this.buttonMenu.y = cenY - this.buttonMenu.image.height / 2;

            const onClickRun = (event) => {
                this.callbackIfRun();
            };
            this.buttonMenu.on('click', onClickRun.bind(this));

            let children = [];

            this.menuGraph = new GraphTree(this.base);
            let cellPos = area.getCellPosition(cenX, cenY);
            children.push(this.menuGraph.addNewVertexToCurrent({x: cellPos.x + 3, y: cellPos.y + 4}));
            children.push(this.menuGraph.addNewVertexByMove(5, 5));
            children.push(this.menuGraph.addNewVertexByNode({x: 5, y: 10}, this.menuGraph.getCurrentVertex));
            children.push(this.menuGraph.addNewVertexByMove(7, 13));
            children.push(this.menuGraph.addNewVertexByMove(7, -5));
            this.children = children;

            this.menuShapes = [
                {angle: 0, left: 0, right: this.base.getWidth / 2.5, top: 0, down: this.base.getHeight / 2.5},
                {angle: 100, left: 0, right: this.base.getWidth / 2.5, top: 0, down: this.base.getHeight / 2.5},
                {
                    angle: 300,
                    left: this.base.getWidth / 1.5,
                    right: this.base.getWidth,
                    top: 0,
                    down: this.base.getHeight / 2.5
                },
                {
                    angle: 40,
                    left: 0,
                    right: this.base.getWidth / 2.5,
                    top: this.base.getHeight / 1.5,
                    down: this.base.getHeight
                },
                {
                    angle: 200,
                    left: this.base.getWidth / 1.5,
                    right: this.base.getWidth,
                    top: this.base.getHeight / 1.5,
                    down: this.base.getHeight
                }
            ];

            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
            createjs.Ticker.setInterval(100);
            createjs.Ticker.setFPS(40);
        }

        stopPage() {
            createjs.Ticker.setPaused(true);
            createjs.Ticker.removeEventListener("tick", this.tick);

            this.menuGraph.destruct();
            this.base.stage.removeChild(this.buttonMenu);
            this.base.stage.clear();

            this.base.update();
        }

        tick(event) {
            // console.log(createjs.Ticker.getMeasuredFPS());
            const randomInteger = window.randomInteger;
            if (!createjs.Ticker.getPaused()) {
                this.ticker++;

                let menuShapes = this.menuShapes;

                this.children.forEach(function (item, index) {
                    menuShapes[index].angle += window.randomInteger(-20, 20) * (Math.PI / 180); // randomInteger(0, 360) * (Math.PI / 180);

                    item.data.x += Math.cos(menuShapes[index].angle);
                    item.data.y += Math.sin(menuShapes[index].angle);
                });

                this.menuGraph.showNodes();
                this.base.update();
            }
        }
    }
;
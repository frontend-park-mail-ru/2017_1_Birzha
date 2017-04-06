window.MenuPage  =
    class MenuPage extends BasePage {
        constructor(world, callBackIfRun) {
            super(world);
            this.callbackIfRun = callBackIfRun;

            this.children = [];

            this.buttonMenu = null;
            this.menuShapes = null;

            this.ticker = 0;
        }

        startPage(resource) {
            let cellCenter = this.world.area.getExactPosition(this.world.basicCenter.x, this.world.basicCenter.y);
            let cenX = cellCenter.x, cenY = cellCenter.y;
            this.world.setOffsetForCenter(cenX, cenY);
            scrollTo(0,0);
            document.body.style.overflow = "hidden";

            this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
            this.buttonMenu.x = cenX - this.buttonMenu.image.width / 2;
            this.buttonMenu.y = cenY - this.buttonMenu.image.height / 2;

            const onClickRun = (event) => {
                this.callbackIfRun();
            };
            this.buttonMenu.on('click', onClickRun.bind(this));

            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
            createjs.Ticker.setInterval(100);
            createjs.Ticker.setFPS(40);
        }

        stopPage() {
            createjs.Ticker.setPaused(true);
            createjs.Ticker.removeEventListener("tick", this.tick);

            // this.menuGraph.destruct();
            this.world.stage.removeChild(this.buttonMenu);
            this.world.stage.clear();

            this.world.update();
        }

        tick(event) {
            // console.log(createjs.Ticker.getMeasuredFPS());
            const randomInteger = window.randomInteger;
            if (!createjs.Ticker.getPaused()) {
                this.ticker++;
                this.world.update();
            }
        }
    }
;
import { randomInteger } from './system';

import BasePage from './base_page';

class MenuPage extends BasePage {
    constructor(world, callBackIfRun) {
        super(world);
        this.callbackIfRun = callBackIfRun;

        this.children = [];

        this.buttonMenu = null;
        this.menuShapes = null;

        this.ticker = 0;

        this.enableRotation = false;
    }

    startPage(resource) {
        let cellCenter = this.world.area.getExactPosition(this.world.area.fullSize.x/2, this.world.area.fullSize.y/2);
        let cenX = cellCenter.x, cenY = cellCenter.y;
        this.world.setOffsetForCenter(cenX, cenY);
        scrollTo(0,0);
        document.body.style.overflow = "hidden";

        this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
        this.buttonMenu.x = cenX;
        this.buttonMenu.y = cenY;
        this.buttonMenu.regX = this.buttonMenu.image.width / 2;
        this.buttonMenu.regY = this.buttonMenu.image.height / 2;

        this.world.update();
        this.world.area.world.stage.update();

        debugger;
        this.buttonAnimate = function(event){
            debugger;
            this.buttonMenu.rotation += 2;
            this.world.update();
        };

        const onClickRun = (event) => {
            this.callbackIfRun();
        };

        this.buttonMenu.on('click', onClickRun.bind(this));
    }

    stopPage() {
        this.world.stage.removeChild(this.buttonMenu);
        this.world.stage.clear();

        this.world.update();
    }

    setEnableRotation(flag) {
        debugger;
        if(flag && !createjs.Ticker.hasEventListener("tick")) {
            createjs.Ticker.addEventListener("tick", this.buttonAnimate.bind(this));
            createjs.Ticker.setInterval(10);
            createjs.Ticker.setFPS(60);
        } else {
            createjs.Ticker.removeEventListener("tick", this.buttonAnimate);
            createjs.Ticker.paused = true;
        }
        this.world.update();
    }
}

export default MenuPage;
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
    }

    startPage(resource) {
        let cellCenter = this.world.area.getExactPosition(this.world.area.fullSize.x/2, this.world.area.fullSize.y/2);
        let cenX = cellCenter.x, cenY = cellCenter.y;
        this.world.setOffsetForCenter(cenX, cenY);
        scrollTo(0,0);
        document.body.style.overflow = "hidden";

        this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
        this.buttonMenu.x = cenX - this.buttonMenu.image.width / 2;
        this.buttonMenu.y = cenY - this.buttonMenu.image.height / 2;
        this.world.update();
        this.world.area.world.stage.update();

        const onClickRun = (event) => {
            this.callbackIfRun();
        };
        this.buttonMenu.on('click', onClickRun.bind(this));
    }

    stopPage() {
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

export default MenuPage;
import BaseView from './baseView';

import startGame from '../src/main'

class GameView extends BaseView {
    constructor(node) {
        super(node);
    }

    show() {
        super.show();

        let div = document.getElementById("site-interface");
        div.style.visibility = 'hidden';

        startGame(this.node);
    }
    hide() {
        super.hide();
        let div = document.getElementById("site-interface");
        div.style.visibility = "visible";

    }

}

export default GameView;


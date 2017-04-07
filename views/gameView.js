import BaseView from './baseView';

import startGame from '../src/main'

class GameView extends BaseView {
    constructor(node) {
        super(node);
    }

    show() {
        super.show();

        let div = document.getElementById("site-interface");
        div.style.display = "none";

        startGame(this.node);
    }
}

export default GameView;


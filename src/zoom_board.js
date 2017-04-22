/**
 * Created by algys on 19.04.17.
 */

/**
 * Created by algys on 18.04.17.
 */

class ZoomBoard{
    constructor(){
        this.menuBoard = document.createElement("div");
        this.menuBoard.className = "ZoomBoard";
        this.menuBoard.id = "board";

        let buttonPlus = document.createElement("div");
        buttonPlus.id = "plus";
        buttonPlus.className = "fa fa-plus fa-3x";

        let buttonMinus = document.createElement("div");
        buttonMinus.id = "minus";
        buttonMinus.className = "fa fa-minus fa-3x";

        this.menuBoard.appendChild(buttonPlus);
        this.menuBoard.appendChild(buttonMinus);
        document.body.appendChild(this.menuBoard);

        this.scores = new Map();
    }
}

export default ZoomBoard;
/**
 * Created by algys on 18.04.17.
 */



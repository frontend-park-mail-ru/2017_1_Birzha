import ScoreBoard from './score_board'
import MenuBoard from './menu_board'
import ZoomBoard from './zoom_board'

class Controls{
    constructor(){
        this.scoreBoard = new ScoreBoard();
        this.menuBoard = new MenuBoard();
        this.zoomBoard = new ZoomBoard();
    }
}

export default Controls;

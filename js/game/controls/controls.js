import ScoreBoard from './boards/score_board'
import MenuBoard from './boards/menu_board'
import ZoomBoard from './boards/zoom_board'

class Controls{
    constructor(){
        this.scoreBoard = new ScoreBoard();
        this.menuBoard = new MenuBoard();
        this.zoomBoard = new ZoomBoard();
    }
}

export default Controls;

/**
 * Created by algys on 18.04.17.
 */

class MenuBoard{
    constructor(){
        this.menuBoard = document.createElement("div");
        this.menuBoard.className = "MenuBoard";
        this.menuBoard.id = "board";

        let buttonHome = document.createElement("div");
        buttonHome.id = "home";
        buttonHome.className = "fa fa-home fa-3x";

        let buttonMenu = document.createElement("div");
        buttonMenu.id = "menu";
        buttonMenu.className = "fa fa-bars fa-3x";

        let buttonSetting = document.createElement("div");
        buttonSetting.id = "setting";
        buttonSetting.className = "fa fa-cog fa-3x";


        this.menuBoard.appendChild(buttonMenu);
        this.menuBoard.appendChild(buttonHome);
        this.menuBoard.appendChild(buttonSetting);
        document.body.appendChild(this.menuBoard);

        this.scores = new Map();
    }

}

export default MenuBoard;
/**
 * Created by algys on 18.04.17.
 */


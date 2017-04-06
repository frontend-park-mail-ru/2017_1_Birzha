/**
 * Created by algys on 05.04.17.
 */

class Controls{
    constructor(){
        this.initScoreBoard();
    }

    initScoreBoard(){
        this.scoreBoard = document.createElement("div");
        this.scoreBoard.style.position = "absolute";
        this.scoreBoard.style.zIndex = 2;
        this.scoreBoard.style.right = "20px";
        this.scoreBoard.style.top = "20px";
        this.scoreBoard.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        this.scoreBoard.style.padding = "10px";
        this.scoreBoard.style.width = "250px";
        this.scoreBoard.style.height = "140px";
        this.scoreBoard.style.borderRadius = "8px";
        let scoreBoardTitle = document.createElement("div");
        scoreBoardTitle.style.textAlign = "center";
        scoreBoardTitle.style.padding = "0 0 20px 0";
        let title_el = document.createElement("span");
        title_el.style.margin = "auto";
        title_el.style.font = "26pt/10pt sans-serif";
        title_el.textContent = "ScoreBoard";
        scoreBoardTitle.appendChild(title_el);
        this.scoreBoard.appendChild(scoreBoardTitle);
        document.body.appendChild(this.scoreBoard);
        this.scores = new Map();
    }

    addPlayerToScoreBoard(nickname, score){
        let scoreBoardLine = document.createElement("div");
        let score_el = document.createElement("span");
        score_el.style.margin = "5px 10px 0px 60px";
        score_el.style.width = "50px";
        score_el.style.textAlign = "left";
        score_el.style.font = "20pt/10pt sans-serif";
        score_el.textContent = score;
        let nickname_el = document.createElement("span");
        nickname_el.style.margin = "5px 15px 0px 10px";
        nickname_el.style.width = "50px";
        nickname_el.style.textAlign = "left";
        nickname_el.style.font = "20pt/10pt sans-serif";
        nickname_el.textContent = nickname;
        let number_el = document.createElement("span");
        number_el.style.margin = "5px 5px 0px 10px";
        number_el.style.width = "50px";
        number_el.style.textAlign = "left";
        number_el.style.font = "20pt/10pt sans-serif";
        number_el.textContent = this.scores.size + 1 + ".";
        scoreBoardLine.appendChild(number_el);
        scoreBoardLine.appendChild(nickname_el);
        scoreBoardLine.appendChild(score_el);
        scoreBoardLine.style.borderBottom = "1px solid black";
        this.scores.set(nickname, scoreBoardLine);
        this.scoreBoard.appendChild(scoreBoardLine);
    }


}
window.Controls = Controls;

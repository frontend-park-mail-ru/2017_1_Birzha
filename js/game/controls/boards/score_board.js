class ScoreBoard{
    constructor() { // TODO get connection
        this.scoreBoard = document.createElement("div");
        this.scoreBoard.className = "ScoreBoard";
        this.scoreBoard.id = "board";

        let scoreBoardTitle = document.createElement("div");
        scoreBoardTitle.id = "title";
        scoreBoardTitle.textContent = "ScoreBoard";

        let separatorUnderTitle = document.createElement("div");
        separatorUnderTitle.id = "separator";

        this.scoreBoard.appendChild(scoreBoardTitle);
        this.scoreBoard.appendChild(separatorUnderTitle);
        document.body.appendChild(this.scoreBoard);

        this.scores = new Map();
    }

    addPlayerToScoreBoard(nickname, score){
        let scoreBoardLine = document.createElement("div");
        scoreBoardLine.id = "line";

        let score_el = document.createElement("div");
        score_el.className = "score-value";
        score_el.textContent = score;

        let nickname_el = document.createElement("div");
        nickname_el.className = "score-nickname";
        nickname_el.textContent = nickname;

        let number_el = document.createElement("div");
        number_el.className = "score-number";
        number_el.textContent = this.scores.size + 1 + ".";

        scoreBoardLine.appendChild(number_el);
        scoreBoardLine.appendChild(nickname_el);
        scoreBoardLine.appendChild(score_el);

        this.scoreBoard.appendChild(scoreBoardLine);
        this.scores.set(nickname, scoreBoardLine);
    }

    changeValue(nickname, newScore) {
        if(!(nickname in this.scores)) {
            return false;
        }

        let scoreBoardLine = this.scores.get(nickname);
        let score = scoreBoardLine.getElementsByClassName("score-value")[0];
        if(!score)
            return false;

        score.textContent = newScore;
        return true;
    }
}

export default ScoreBoard;
/**
 * Created by algys on 18.04.17.
 */

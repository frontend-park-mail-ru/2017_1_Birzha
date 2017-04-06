/**
 * Created by algys on 05.04.17.
 */

class Controls{
    constructor(){
        this.score = document.createElement("div");
        this.score.style.position = "absolute";
        this.score.style.zIndex = 2;
        this.score.style.right = "20px";
        this.score.style.top = "20px";
        this.score.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        this.score.style.padding = "10px";
        this.score.style.width = "140px";
        this.score.style.height = "50px";
        this.score.style.borderRadius = "8px";

        document.body.appendChild(this.score);
    }

    setScore(score){
        this.score.textContent = score;
    }
}
window.Controls = Controls;

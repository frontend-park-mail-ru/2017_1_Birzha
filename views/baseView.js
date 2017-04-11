class BaseView {

    constructor(node) {
        this.node = node;
    }

    /**
     * Метод показывает view
     */
    show() {
        this.node.hidden = false;
        this.node.style.display = "contents";
    }

    hide() {
        this.node.hidden = true;
        //this.node.style.display = "none";
    }
}

export default BaseView;
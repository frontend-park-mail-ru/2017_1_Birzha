class BaseView {

    constructor(node) {
        this.node = node;
    }

    /**
     * Метод показывает view
     */
    show() {
        this.node.hidden = false;
    }

    hide() {
        this.node.hidden = true;
    }
}

export default BaseView;
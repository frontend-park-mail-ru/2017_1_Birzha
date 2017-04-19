'use strict';

import Button from '../button/button';

class Menu {

    /**
     * Конструктор класса Form
     */
    constructor (options = { data: {} }) {
        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    render () {
        this._updateHtml()
        this._installControls();
    }


    /**
     * Обновить html компонента
     */
    _updateHtml () {
        this.el.innerHTML = `
            <form class="form-horizontal col-md-6">
                <div class="js-controls">
                </div>
            </form>
        `;
    }

    /**
     * Вставить управляющие элементы в форму
     */
    _installControls () {
        let { controls = [] } = this.data;

        controls.forEach(data => {
            let control = new Button(data).render();
            this.el.querySelector('.js-controls').appendChild(control.el);
        });
    }

    /**
     * Подписка на событие
     * @param {string} type - имя события
     * @param {function} callback - коллбек
     */
    on (type, callback) {
        this.el.addEventListener(type, callback);
    }

}

export default Menu;
(function () {

    class Router {

        /**
         * @constructor Router
         * @param {Node} node
         */
        constructor(node) {
            this.node = node;
            this.routes = {};
        }

        /**
         * Регистрация маршрута
         * @param {string} route
         * @param {BaseView} view
         */
        register(route, view) {
            this.routes[route] = view;
        }

        _getViewByRoute(href) {
            return this.routes[href];
        }


        onRouteChange(event) {

            if (!event.target instanceof HTMLAnchorElement) {
                return;
            }

            if (this.go(event.target.getAttribute('href'))) {
                event.preventDefault();
            }

        }

        /**
         * Запустить процес маршрутизации
         */
        start() {

            this.node
                .addEventListener('click', event => this.onRouteChange(event));


            this.currentView = this._getViewByRoute(location.pathname);
        }

        /**
         * Перетий по маршруту
         * @param {string} path
         * @return {boolean} - если есть маршрурт
         */
        go(path) {
            //alert(path);
            let view = this._getViewByRoute(path);

            if (!view) {
                return false;
            }

            if (this.currentView === view) {
                return true;
            }

            view.show();
            window.history.pushState({ page: 1 }, 'Title 1', path);

            if(this.currentView) {
                this.currentView.hide();
            }

            this.currentView = view;
            return true;
        }

        startPage(url){
            let view = this._getViewByRoute(url);
            view.show();
        }

    }

    window.Router = Router;
})();
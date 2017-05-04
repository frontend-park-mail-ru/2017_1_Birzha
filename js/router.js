class Router {
    constructor(node) {
        this.node = node;
        this.routes = {};
    }

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
        if(path == '/back'){
            window.history.back();
            return true;
        }

        let view = this._getViewByRoute(path);

        if(!path)
            return false;

        if (!view) {
            debugger;
            view = this.routes['/'];
            location.pathname = '/';
            path = '/';
        }

        if (this.currentView === view) {
            return true;
        }

        view.show();
        let back = location.pathname;
        if(back != path) {
            window.history.pushState(null, '', path);
        }
        if(this.currentView) {
            this.currentView.hide();
        }

        this.currentView = view;
        return true;
    }

    startPage(url){
        debugger;
        let view = this._getViewByRoute(url);
        if (!view) {
            debugger;
            view = this.routes['/'];
            location.pathname = '/';
            url = '/';
        }
        view.show();
        //let obj = { page: 1 };
        window.history.pushState(null, '', url);

        window.onpopstate = function (event) {
            console.log(location.pathname);
            this.go(location.pathname);
        }.bind(this);
    }

}

export default Router;

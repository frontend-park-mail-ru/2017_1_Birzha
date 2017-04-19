/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseView = function () {
    function BaseView(node) {
        _classCallCheck(this, BaseView);

        this.node = node;
    }

    /**
     * Метод показывает view
     */


    _createClass(BaseView, [{
        key: "show",
        value: function show() {
            this.node.hidden = false;
            this.node.style.display = "contents";
        }
    }, {
        key: "hide",
        value: function hide() {
            this.node.hidden = true;
            //this.node.style.display = "none";
        }
    }]);

    return BaseView;
}();

exports.default = BaseView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function () {
    function Button(options) {
        _classCallCheck(this, Button);

        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement('button');
    }

    _createClass(Button, [{
        key: 'setAttrs',
        value: function setAttrs(attrs) {
            var _this = this;

            Object.keys(attrs).forEach(function (name) {
                _this.el.setAttribute(name, attrs[name]);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.el.innerHTML = this.text;
            this.el.classList.add('button');
            this.setAttrs(this.attrs);
            return this;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.el.outerHTML;
        }
    }, {
        key: 'getText',
        value: function getText() {
            var text = this.text;
            return text;
        }
    }]);

    return Button;
}();

exports.default = Button;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tower = function () {
    function Tower(world, pointX, pointY, typeOfTower, units, clientId, nick) {
        _classCallCheck(this, Tower);

        this.world = world;
        this.pointX = pointX; // TODO to normal
        this.pointY = pointY;

        var pxPoint = this.world.area.getPixelPoint(pointX, pointY);
        this.realX = pxPoint.x;
        this.realY = pxPoint.y;

        this.typeOfTower = typeOfTower;
        this.cache = null;

        this.units = units;

        this._client_id = null;
    }

    _createClass(Tower, [{
        key: "decUnits",
        value: function decUnits(value) {
            this.units -= value;
        }
    }, {
        key: "setPerforming",
        value: function setPerforming(flag) {
            // debugger;

            if (this.cache == null) return;

            if (flag) Tower.setShapeTower(this.cache.circle.graphics, "#00ff00", true);else {
                var style = this.getStyle();
                Tower.setShapeTower(this.cache.circle.graphics, style.color, style.fill);
            }
        }
    }, {
        key: "getStyle",
        value: function getStyle() {
            var color = null;
            var fill = null;

            switch (this.typeOfTower) {
                case towerType.DEFAULT:
                    color = "#ff0000";
                    fill = false;
                    break;
                case towerType.BONUS:
                    color = "#cccccc";
                    fill = true;
                    break;
                case towerType.ENEMY:
                    color = "#000000";
                    fill = true;
                    break;
                default:
                    console.log("wtf!!");
                    return;
            }

            return {
                color: color,
                fill: fill
            };
        }
    }, {
        key: "draw",
        value: function draw() {
            var style = this.getStyle();
            this.drawStandartImpl(style.color, style.fill);
        }
    }, {
        key: "setRealCoordinates",
        value: function setRealCoordinates(x, y) {
            var pxPoint = this.world.area.getPixelPoint(x, y);
            this.realX = pxPoint.x;
            this.realY = pxPoint.y;
        }
    }, {
        key: "setCell",
        value: function setCell(pointX, pointY) {
            this.pointX = pointX;
            this.pointY = pointY;
        }
    }, {
        key: "setTextCoordinates",
        value: function setTextCoordinates(x, y) {
            if (this.cache == null) return;

            this.cache.text.x = x;
            this.cache.text.y = y;

            if (this.units) this.cache.text.text = this.units;
        }
    }, {
        key: "setTowerCoordinates",
        value: function setTowerCoordinates(x, y) {
            if (this.cache == null) return;

            this.cache.circle.x = x;
            this.cache.circle.y = y;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            if (this.cache) {
                this.world.stage.removeChild(this.cache.circle);
                this.world.stage.removeChild(this.cache.text);
            }
        }
    }, {
        key: "drawStandartImpl",
        value: function drawStandartImpl(color, fill) {
            if (this.cache == null) {
                this.cache = {};

                var shape = new createjs.Shape();
                Tower.setShapeTower(shape.graphics, color, fill);

                this.cache.circle = shape;

                this.cache.text = new createjs.Text(this.units, "20px Arial", "#ff7700");
                this.cache.text.textBaseline = "middle";
                this.cache.text.textAlign = "center";

                this.setTextCoordinates(this.realX, this.realY);
                this.setTowerCoordinates(this.realX, this.realY);

                this.world.appendOnMap(this.cache.circle);
                this.world.appendOnMap(this.cache.text);
            }

            this.setTextCoordinates(this.realX, this.realY);
            this.setTowerCoordinates(this.realX, this.realY);
        }
    }, {
        key: "client_id",
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            this._client_id = value;
        }
    }, {
        key: "point",
        get: function get() {
            return {
                x: this.pointX,
                y: this.pointY
            };
        }
    }], [{
        key: "setShapeTower",
        value: function setShapeTower(graphics, color, fill) {
            if (fill) graphics.clear().beginFill(color).drawCircle(0, 0, conf.radiusTower);else graphics.clear().beginStroke(color).drawCircle(0, 0, conf.radiusTower);
        }
    }]);

    return Tower;
}();

exports.default = Tower;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePage = function () {
    function BasePage(world) {
        _classCallCheck(this, BasePage);

        this.world = world;
    }

    _createClass(BasePage, [{
        key: "startPage",
        value: function startPage(resource) {}
    }, {
        key: "stopPage",
        value: function stopPage() {}
    }]);

    return BasePage;
}();

exports.default = BasePage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
    function GameObject(world, clientId, nickName) {
        _classCallCheck(this, GameObject);

        this.world = world;
        this.clientId = clientId;
        this.nickName = nickName;
    }

    _createClass(GameObject, [{
        key: "drawObject",
        value: function drawObject() {
            console.log("Draw NoObject!");
        }
    }, {
        key: "animation",
        value: function animation(dx, dy) {
            console.log("Animate NoObject!");
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tree = __webpack_require__(30);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphTree = function () {
    function GraphTree(map) {
        _classCallCheck(this, GraphTree);

        this.world = map;

        this.tree = new _tree2.default();
        this.currentVertex = null;

        this.shapes = new Map();
        this.graphLine = null;
    }

    _createClass(GraphTree, [{
        key: "addNewVertexToCurrent",
        value: function addNewVertexToCurrent(data) {
            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }
    }, {
        key: "addNewVertexByNode",
        value: function addNewVertexByNode(data, node) {
            return this.tree.addNode(data, node);
        }
    }, {
        key: "setCurrentVertex",
        value: function setCurrentVertex(current) {
            this.currentVertex = current;
            return this.currentVertex;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            this.world.stage.removeChild(this.graphLine);
            console.log(this.shapes);
            this.shapes.forEach(function (value, key) {
                key.destruct();
            });
        }
    }, {
        key: "setNode",
        value: function setNode(tower) {
            var coordinatesX = tower.pointX,
                coordinatesY = tower.pointY;

            if (!this.shapes.has(tower)) {
                this.shapes.set(tower, 1 /* default */);
            }

            tower.setRealCoordinates(coordinatesX, coordinatesY);
            tower.draw();
        }
    }, {
        key: "showNodes",
        value: function showNodes() {
            var _this = this;

            this.graphLine = this.graphLine || this.world.newLine("red");
            this.graphLine.graphics.clear();

            var setBack = function setBack(node, parentNode) {
                var pxPoint = _this.world.area.getPixelPoint(parentNode.data.pointX, parentNode.data.pointY);
                // this.graphLine.graphics.moveTo(pxPoint.x, pxPoint.y);

                _this.was_change = true;
                _this.last_last_x = pxPoint.x;
                _this.last_last_y = pxPoint.y;
            };

            var iter = this.tree.iterator(setBack.bind(this));

            this.last_x = 0;
            this.last_y = 0;

            this.was_change = false;
            this.last_last_x = 0;
            this.last_last_y = 0;

            for (;;) {
                this.was_change = false;
                var node = iter.nextNode();
                if (!node) break;

                // debugger;

                var nowPoint = this.world.area.getPixelPoint(node.data.pointX, node.data.pointY);

                if (node === this.tree.root) {
                    this.last_x = nowPoint.x;
                    this.last_y = nowPoint.y;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(this.last_x, this.last_y);

                    this.setNode(node.data);
                    continue;
                }

                this.setNode(node.data);

                // debugger;
                this.drawWireBetweenTowers(nowPoint, { posX: this.last_x, posY: this.last_y });

                if (this.was_change) {
                    this.last_x = this.last_last_x; // nowPoint.x;
                    this.last_y = this.last_last_y; // nowPoint.y;
                } else {
                    this.last_x = nowPoint.x;
                    this.last_y = nowPoint.y;
                }
            }

            this.graphLine.graphics.endStroke();
        }
    }, {
        key: "drawWireBetweenTowers",
        value: function drawWireBetweenTowers(to, from, anim) {
            var x = to.x,
                y = to.y;
            var l = Math.sqrt((x - from.posX) ** 2 + (y - from.posY) ** 2);

            var byLine = function byLine(lamda) {
                return { posX: (from.posX + lamda * x) / (1 + lamda), posY: (from.posY + lamda * y) / (1 + lamda) };
            };

            var radius = conf.radiusTower + conf.betweenTowersPadding;
            var lamda = (l - radius) / radius;

            var fromPoint = byLine(1 / lamda);
            var toPoint = byLine(lamda);

            this.graphLine.graphics.moveTo(fromPoint.posX, fromPoint.posY);
            this.graphLine.graphics.lineTo(toPoint.posX, toPoint.posY);
            this.graphLine.graphics.moveTo(x, y);
        }
    }, {
        key: "getTree",
        get: function get() {
            return this.tree;
        }
    }, {
        key: "getCurrentVertex",
        get: function get() {
            return this.currentVertex;
        }
    }]);

    return GraphTree;
}();

exports.default = GraphTree;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function () {
    function About(names) {
        _classCallCheck(this, About);

        this.about = template();
    }

    _createClass(About, [{
        key: 'getElement',
        value: function getElement() {
            return this.about;
        }
    }]);

    return About;
}();

exports.default = About;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginForm = function () {

    /**
     * Конструктор класса Form
     */
    function LoginForm() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, LoginForm);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Вернуть поля формы
         * @return {string}
         */

    }, {
        key: '_getFields',
        value: function _getFields() {
            var _data$fields = this.data.fields,
                fields = _data$fields === undefined ? [] : _data$fields;


            return fields.map(function (field) {
                return '<div class="login-form"><input type="' + field.type + '" name="' + field.name + '" placeholder="' + field.placeholder + '" class="form-control login-form__input"></div>';
            }).join(' ');
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <div class="col-md-3"></div>\n                <form class="form-horizontal col-md-6 login-form">\n                <h1>' + (this.data.title || '') + '</h1>\n                <div class="form-group form-input">\n                    ' + this._getFields() + '\n                </div>\n                <div class="js-controls">\n                </div>\n                <div class="create_new_account_link" style="margin-top: 10px;" id="RegisterPageId" >\n                    <a href="/logout">\n                        Create new account\n                     </a>\n                 </div>\n                </form>\n            <div class="col-md-3"></div>\n        ';
        }

        /**
         * Вставить управляющие элементы в форму
         */

    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }

        /**
         * Взять данные формы
         * @return {object}
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            var form = this.el.querySelector('form');
            var elements = form.elements;
            var fields = {};

            Object.keys(elements).forEach(function (element) {
                var name = elements[element].name;
                var value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }
    }, {
        key: 'getControlls',
        value: function getControlls() {
            return this.data.controls;
        }
    }]);

    return LoginForm;
}();

exports.default = LoginForm;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {

    /**
     * Конструктор класса Form
     */
    function Menu() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, Menu);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <form class="form-horizontal col-md-6">\n                <div class="js-controls">\n                </div>\n            </form>\n        ';
        }

        /**
         * Вставить управляющие элементы в форму
         */

    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }
    }]);

    return Menu;
}();

exports.default = Menu;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegistrationForm = function () {

    /**
     * Конструктор класса Form
     */
    function RegistrationForm() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: {} };

        _classCallCheck(this, RegistrationForm);

        this.data = options.data;
        this.el = options.el;

        this.render();
    }

    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {
            this._updateHtml();
            this._installControls();
        }

        /**
         * Вернуть поля формы
         * @return {string}
         */

    }, {
        key: '_getFields',
        value: function _getFields() {
            var _data$fields = this.data.fields,
                fields = _data$fields === undefined ? [] : _data$fields;


            return fields.map(function (field) {
                return '<div class="registration-form"><input type="' + field.type + '" name="' + field.name + '" placeholder="' + field.placeholder + '" class="form-control registration-form__input"></div>';
            }).join(' ');
        }

        /**
         * Обновить html компонента
         */

    }, {
        key: '_updateHtml',
        value: function _updateHtml() {
            this.el.innerHTML = '\n            <form class="form-horizontal col-md-6">\n                <h1>' + (this.data.title || '') + '</h1>\n                <div class="form-group form-input">\n                    ' + this._getFields() + '\n                </div>\n                <div class="js-controls">\n                </div>\n                <div id="BackButton" style="padding-top: 20px;">\n                    <a href="/login">Back</a>\n                </div>\n            </form>\n        ';
        }

        /**
         * Вставить управляющие элементы в форму
         */

    }, {
        key: '_installControls',
        value: function _installControls() {
            var _this = this;

            var _data$controls = this.data.controls,
                controls = _data$controls === undefined ? [] : _data$controls;


            controls.forEach(function (data) {
                var control = new _button2.default(data).render();
                _this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */

    }, {
        key: 'on',
        value: function on(type, callback) {
            this.el.addEventListener(type, callback);
        }

        /**
         * Взять данные формы
         * @return {object}
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            var form = this.el.querySelector('form');
            var elements = form.elements;
            var fields = {};

            Object.keys(elements).forEach(function (element) {
                var name = elements[element].name;
                var value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }
    }, {
        key: 'getControlls',
        value: function getControlls() {
            return this.data.controls;
        }
    }]);

    return RegistrationForm;
}();

exports.default = RegistrationForm;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by algys on 10.03.17.
 */
/*
 Example:

 myHeaders = new Headers({
 "Content-Type": "text/plain",
 "Content-Length": content.length.toString(),
 "X-Custom-Header": "ProcessThisImmediately",
 });

 fetch(myRequest)
 .then(function(response) {
 return response.blob();
 });

 .then(function(myBlob) {
 var objectURL = URL.createObjectURL(myBlob);
 myImage.src = objectURL;
 });

 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

var Request = function () {
    function Request(server) {
        _classCallCheck(this, Request);

        this.server = server;

        this.funcs = [function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw new Error();
            }
        }];

        this.baseCatch = function (error) {
            console.log('[FAIL] ', error);
        };

        this.json = '{}';
    }

    _createClass(Request, [{
        key: 'addResponse',
        value: function addResponse(_func) {
            this.funcs.push(_func);
            return this;
        }
    }, {
        key: 'addJson',
        value: function addJson(_params) {
            this.json = JSON.stringify(_params);
            return this;
        }
    }, {
        key: 'error',
        value: function error(_errorCallback) {
            this.baseCatch = _errorCallback;
            return this;
        }
    }, {
        key: 'request',
        value: function request(path, data) {
            data = data || {};

            if (!(data['method'] && data['method'] in ALLOWED_METHODS)) data['method'] = data['method'] || 'GET';

            data['headers'] = data['headers'] || { "Content-Type": "application/json" };
            data['mode'] = data['mode'] || 'CORS';
            data['cache'] = data['cache'] || 'default';

            data['body'] = this.json;

            var fetchPromise = fetch(this.server + path, data);

            var me = this;
            this.funcs.map(function (el, index) {
                fetchPromise.then(el);
            });

            fetchPromise.catch(me.baseCatch); // TODO catch
        }
    }]);

    return Request;
}();

exports.default = Request;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router(node) {
        _classCallCheck(this, Router);

        this.node = node;
        this.routes = {};
    }

    /**
     * Регистрация маршрута
     * @param {string} route
     * @param {BaseView} view
     */


    _createClass(Router, [{
        key: 'register',
        value: function register(route, view) {
            this.routes[route] = view;
        }
    }, {
        key: '_getViewByRoute',
        value: function _getViewByRoute(href) {
            return this.routes[href];
        }
    }, {
        key: 'onRouteChange',
        value: function onRouteChange(event) {

            if (!event.target instanceof HTMLAnchorElement) {
                return;
            }

            if (this.go(event.target.getAttribute('href'))) {
                event.preventDefault();
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            this.node.addEventListener('click', function (event) {
                return _this.onRouteChange(event);
            });

            this.currentView = this._getViewByRoute(location.pathname);
        }

        /**
         * Перетий по маршруту
         * @param {string} path
         * @return {boolean} - если есть маршрурт
         */

    }, {
        key: 'go',
        value: function go(path) {
            if (path == '/back') {
                window.history.back();
                //let back = location.pathname;
                //this.go(back);
                return true;
            }

            var view = this._getViewByRoute(path);

            if (!view) {
                return false;
            }

            if (this.currentView === view) {
                return true;
            }

            view.show();
            var back = location.pathname;
            if (back != path) {
                window.history.pushState(null, '', path);
            }
            if (this.currentView) {
                this.currentView.hide();
            }

            this.currentView = view;
            return true;
        }
    }, {
        key: 'startPage',
        value: function startPage(url) {
            for (var key in this.routes) {
                var _view = this._getViewByRoute(key);
                _view.hide();
            }
            var view = this._getViewByRoute(url);
            view.show();
            //let obj = { page: 1 };
            window.history.pushState(null, '', url);

            window.onpopstate = function (event) {
                console.log(location.pathname);
                this.go(location.pathname);
            }.bind(this);
        }
    }]);

    return Router;
}();

exports.default = Router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutView = function (_BaseView) {
  _inherits(AboutView, _BaseView);

  function AboutView() {
    _classCallCheck(this, AboutView);

    return _possibleConstructorReturn(this, (AboutView.__proto__ || Object.getPrototypeOf(AboutView)).apply(this, arguments));
  }

  return AboutView;
}(_baseView2.default);

exports.default = AboutView;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

var _main = __webpack_require__(24);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameView = function (_BaseView) {
    _inherits(GameView, _BaseView);

    function GameView(node) {
        _classCallCheck(this, GameView);

        return _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this, node));
    }

    _createClass(GameView, [{
        key: 'show',
        value: function show() {
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'show', this).call(this);

            var div = document.getElementById("site-interface");
            div.style.visibility = 'hidden';

            (0, _main2.default)(this.node);
        }
    }, {
        key: 'hide',
        value: function hide() {
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), 'hide', this).call(this);
            var div = document.getElementById("site-interface");
            div.style.visibility = "visible";
        }
    }]);

    return GameView;
}(_baseView2.default);

exports.default = GameView;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderBoardView = function (_BaseView) {
  _inherits(LeaderBoardView, _BaseView);

  function LeaderBoardView() {
    _classCallCheck(this, LeaderBoardView);

    return _possibleConstructorReturn(this, (LeaderBoardView.__proto__ || Object.getPrototypeOf(LeaderBoardView)).apply(this, arguments));
  }

  return LeaderBoardView;
}(_baseView2.default);

exports.default = LeaderBoardView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginView = function (_BaseView) {
  _inherits(LoginView, _BaseView);

  function LoginView() {
    _classCallCheck(this, LoginView);

    return _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).apply(this, arguments));
  }

  return LoginView;
}(_baseView2.default);

exports.default = LoginView;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuView = function (_BaseView) {
  _inherits(MenuView, _BaseView);

  function MenuView() {
    _classCallCheck(this, MenuView);

    return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).apply(this, arguments));
  }

  return MenuView;
}(_baseView2.default);

exports.default = MenuView;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseView = __webpack_require__(0);

var _baseView2 = _interopRequireDefault(_baseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationView = function (_BaseView) {
  _inherits(RegistrationView, _BaseView);

  function RegistrationView() {
    _classCallCheck(this, RegistrationView);

    return _possibleConstructorReturn(this, (RegistrationView.__proto__ || Object.getPrototypeOf(RegistrationView)).apply(this, arguments));
  }

  return RegistrationView;
}(_baseView2.default);

exports.default = RegistrationView;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _request = __webpack_require__(10);

var _request2 = _interopRequireDefault(_request);

var _menuView = __webpack_require__(16);

var _menuView2 = _interopRequireDefault(_menuView);

var _loginView = __webpack_require__(15);

var _loginView2 = _interopRequireDefault(_loginView);

var _registrationView = __webpack_require__(17);

var _registrationView2 = _interopRequireDefault(_registrationView);

var _leaderboardView = __webpack_require__(14);

var _leaderboardView2 = _interopRequireDefault(_leaderboardView);

var _gameView = __webpack_require__(13);

var _gameView2 = _interopRequireDefault(_gameView);

var _aboutView = __webpack_require__(12);

var _aboutView2 = _interopRequireDefault(_aboutView);

var _login = __webpack_require__(7);

var _login2 = _interopRequireDefault(_login);

var _menu = __webpack_require__(8);

var _menu2 = _interopRequireDefault(_menu);

var _registration = __webpack_require__(9);

var _registration2 = _interopRequireDefault(_registration);

var _about = __webpack_require__(6);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    window.confServer = {};
    var url = window.location.pathname;

    fetch('js/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function (result) {
        window.confServer = result;
    }).catch(function (error) {
        return "Error";
    });

    var router = new _router2.default(window.document.documentElement);

    var menuView = new _menuView2.default(document.querySelector('.menu-view'));
    var loginView = new _loginView2.default(document.querySelector('.login-view'));
    var registrationView = new _registrationView2.default(document.querySelector('.registration-view'));
    var aboutView = new _aboutView2.default(document.querySelector('.about-view'));
    var leaderBoardView = new _leaderboardView2.default(document.querySelector('.leaderboard-view'));
    var gameView = new _gameView2.default(document.querySelector('.game-view'));

    router.register('/', menuView);
    router.register('/main', menuView);
    router.register('/login', loginView);
    router.register('/about', aboutView);
    router.register('/logout', registrationView);
    router.register('/leaderboard', leaderBoardView);
    router.register('/game', gameView);

    router.start();

    var login = document.querySelector('#login');
    var registration = document.querySelector('#registration');
    var menu = document.querySelector('#menu');

    var loginForm = new _login2.default({
        el: document.createElement('div'),
        data: {
            title: 'Login',
            fields: [{
                name: 'login',
                type: 'text',
                placeholder: 'Login...'
            }, {
                name: 'password',
                type: 'password',
                placeholder: ''
            }],
            controls: [{
                text: 'Login',
                attrs: {
                    type: 'submit',
                    class: 'btn btn-default login-form__button login-form__button_red'
                }
            }]
        }
    });

    var registrationForm = new _registration2.default({
        el: document.createElement('div'),
        data: {
            title: 'Registration',
            fields: [{
                name: 'login',
                type: 'text',
                placeholder: 'Login'
            }, {
                name: 'email',
                type: 'email',
                placeholder: 'Email'
            }, {
                name: 'password',
                type: 'password',
                placeholder: 'Password'
            }, {
                name: 'password_repeat',
                type: 'password',
                placeholder: 'Repeat'
            }],
            controls: [{
                text: 'Register',
                attrs: {
                    type: 'submit',
                    class: 'btn btn-default registration-form__button registration-form__button_red'
                }
            }]
        }
    });

    //login.appendChild(loginForm.el);
    //registration.appendChild(registrationForm.el);

    loginForm.on('submit', function (event) {
        event.preventDefault();

        var ifError = function ifError(error) {
            loginWarningElement.innerHTML = "error";
        };

        new _request2.default(confServer['server']).addResponse(function (json) {
            console.log(json);
        }).addJson(loginForm.getFormData()).error(function (err) {
            console.log("[ERROR] Error response in login");
            ifError("Ошибка сервера!");
        }).request('/login', {
            method: 'POST'
        });
    });

    registrationForm.on('submit', function (event) {
        event.preventDefault();

        var ifError = function ifError(error) {
            registrationWarningElement.innerHTML = error;
        };

        var regData = registrationForm.getFormData();

        if (regData['password'] !== regData['password_repeat']) {
            ifError("Password is not equals!");
            return;
        }

        delete regData['password_repeat'];

        new _request2.default(confServer['server']).addResponse(function (json) {
            console.log(json);
        }).addJson(regData).error(ifError).request('/user', {
            method: 'PUT'
        });
    });

    var aboutPage = document.getElementById('about');
    var leaderPage = document.getElementById('leaderboard');

    var loginWarningElement = document.getElementById("login_warning");
    var registrationWarningElement = document.getElementById("registration_warning");

    aboutPage.innerHTML = template();
    menu.innerHTML = MainTemplate();
    login.innerHTML = LoginTemplate();
    registration.innerHTML = RegistrationTemplate();
    leaderPage.innerHTML = LeaderBoardTemplate();

    router.startPage(url);
})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function () {
    function Area(elementDOM) {
        _classCallCheck(this, Area);

        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas-area";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 0;
        this.canvas.style.left = "0px";
        this.offset = {
            x: 0,
            y: 0
        };
        this.rectSize = conf.rectSize;
        this.borderSize = conf.borderSize;
        this.worldSize = 100;

        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = document.documentElement.clientWidth;

        this.fullSize = {
            x: this.rectSize * this.worldSize,
            y: this.rectSize * this.worldSize
        };

        elementDOM.appendChild(this.canvas);

        this.world = new createjs.Stage(this.canvas.id);
        createjs.Touch.enable(this.world);
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.initArea();
        this.world.stage.update();
    }

    _createClass(Area, [{
        key: "initArea",
        value: function initArea() {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            var xCount = document.documentElement.clientWidth / this.rectSize | 0;
            var yCount = document.documentElement.clientHeight / this.rectSize | 0;

            this.cells = [];

            for (var i = 0; i < this.worldSize; i++) {
                var t = [];
                for (var j = 0; j < this.worldSize; j++) {
                    var cell = new createjs.Shape();
                    cell.graphics.setStrokeStyle(this.borderSize).beginStroke("#fffbf7").drawRect(j * rectSize + borderSize / 2, i * rectSize + borderSize / 2, rectSize, rectSize).endStroke().beginFill("#dbffd0").drawRect(j * rectSize + borderSize, i * rectSize + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
                    if (j < xCount + 5 && i < yCount + 5) {
                        cell.visible = true;
                    } else {
                        cell.visible = false;
                    }
                    t.push(cell);
                    this.world.stage.addChildAt(cell);
                }
                this.cells.push(t);
            }

            this.rowEnds = {
                start: 0,
                end: yCount + 5
            };
            this.columnEnds = {
                start: 0,
                end: xCount + 5
            };
        }
    }, {
        key: "getExactPosition",
        value: function getExactPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            cx *= this.rectSize;
            cy *= this.rectSize;
            cx += this.rectSize / 2 | 0;
            cy += this.rectSize / 2 | 0;
            cx += this.borderSize / 2;
            cy += this.borderSize / 2;
            return { x: cx, y: cy };
        }
    }, {
        key: "getCellPosition",
        value: function getCellPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            return { x: cx, y: cy };
        }
    }, {
        key: "getPixelPoint",
        value: function getPixelPoint(x, y) {
            var px = x * this.rectSize + (this.rectSize + this.borderSize) / 2;
            var py = y * this.rectSize + (this.rectSize + this.borderSize) / 2;
            return { x: px, y: py };
        }
    }, {
        key: "markSelectedCell",
        value: function markSelectedCell(x, y) {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            var cell = new createjs.Shape();
            cell.graphics.beginFill("#beffb1").drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
            this.world.stage.addChild(cell);
            this.world.stage.update();
        }
    }, {
        key: "markCurrentCell",
        value: function markCurrentCell(x, y, type) {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            var color = "#ffa895";
            switch (type) {
                case 0:
                    color = "#beffb1";
                    break;
                case 1:
                    color = "#ffa895";
                    break;
            }
            if (this.currentCell) {
                this.world.stage.removeChild(this.currentCell);
            }
            this.currentCell = new createjs.Shape();
            this.currentCell.graphics.beginFill(color).drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
            this.world.stage.addChild(this.currentCell);
            this.world.stage.update();
        }
    }, {
        key: "setVisibles",
        value: function setVisibles(x, y) {
            var xCount = (document.documentElement.clientWidth / this.rectSize / 2 | 0) + 5;
            var yCount = (document.documentElement.clientHeight / this.rectSize / 2 | 0) + 5;

            if (x - xCount > 0) this.columnEnds.start = x - xCount;else this.columnEnds.start = 0;

            if (x + xCount < this.worldSize) this.columnEnds.end = x + xCount;else this.columnEnds.end = this.worldSize;

            if (y - yCount > 0) this.rowEnds.start = y - yCount;else this.rowEnds.start = 0;

            if (y + yCount < this.worldSize) this.rowEnds.end = y + yCount;else this.rowEnds.end = this.worldSize;

            for (var i = 0; i < this.worldSize; i++) {
                for (var j = 0; j < this.worldSize; j++) {
                    if (i < this.rowEnds.start || i > this.rowEnds.end) this.cells[i][j].visible = false;else if (j < this.columnEnds.start || j > this.columnEnds.end) {
                        this.cells[i][j].visible = false;
                    } else this.cells[i][j].visible = true;
                }
            }
        }
    }, {
        key: "setOffset",
        value: function setOffset(x, y) {
            this.offset.x = x;
            this.offset.y = y;
            this.world.setTransform(x, y);
            this.world.stage.update();
        }
    }, {
        key: "getRelativeCoord",
        value: function getRelativeCoord(x, y) {
            return { x: x - this.offset.x, y: y - this.offset.y };
        }
    }]);

    return Area;
}();

exports.default = Area;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = __webpack_require__(28);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function () {
    function Connection(finishConnect) {
        _classCallCheck(this, Connection);

        this.socket = new _server2.default(Connection.parseHost(conf.ip[conf.baseIP]), finishConnect);
        this.socket.onMessage = this.onMessage.bind(this);

        this.eventMessage = null;
        this.methodMap = {};
    }

    _createClass(Connection, [{
        key: "addEventListen",
        value: function addEventListen(nameMethod, callback) {
            if (!(nameMethod in this.methodMap)) {
                this.methodMap[nameMethod] = [];
            }

            return this.methodMap[nameMethod].push(callback) - 1;
        }

        // TODO

    }, {
        key: "deleteListen",
        value: function deleteListen(nameMethod) {
            for (var i in this.methodMap[nameMethod]) {
                delete this.methodMap[nameMethod][i];
            }
        }
    }, {
        key: "deleteListenIndex",
        value: function deleteListenIndex(nameMethod, id) {
            if (nameMethod in this.methodMap) {
                this.methodMap[nameMethod].splice(id, id);
                console.log(this.methodMap[nameMethod]);
                return true;
            }

            console.log("wtf!");
            return false;
        }
    }, {
        key: "onMessage",
        value: function onMessage(json) {
            console.log("Get json: " + JSON.stringify(json));
            if (json["datatype"] in this.methodMap) {
                this.methodMap[json["datatype"]].map(function (func) {
                    return func(json);
                });
            }
        }
    }, {
        key: "send",
        value: function send(action, json) {
            json = json || {};
            json.action = action;

            this.socket.sendData(json);
        }
    }], [{
        key: "parseHost",
        value: function parseHost(ip) {
            return "ws://" + ip.host + ":" + ip.port + ip.path;
        }
    }]);

    return Connection;
}();

exports.default = Connection;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = function () {
    function Controls() {
        _classCallCheck(this, Controls);

        this.initScoreBoard();
    }

    _createClass(Controls, [{
        key: "initScoreBoard",
        value: function initScoreBoard() {
            this.scoreBoard = document.createElement("div");
            this.scoreBoard.style.position = "absolute";
            this.scoreBoard.style.zIndex = 2;
            this.scoreBoard.style.right = "20px";
            this.scoreBoard.style.top = "20px";
            this.scoreBoard.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            this.scoreBoard.style.padding = "10px";
            this.scoreBoard.style.width = "250px";
            //  this.scoreBoard.style.height = "140px";
            this.scoreBoard.style.borderRadius = "8px";
            var scoreBoardTitle = document.createElement("div");
            scoreBoardTitle.style.textAlign = "center";
            scoreBoardTitle.style.padding = "0 0 20px 0";
            var title_el = document.createElement("span");
            title_el.style.margin = "auto";
            title_el.style.font = "26pt/10pt sans-serif";
            title_el.textContent = "ScoreBoard";
            scoreBoardTitle.appendChild(title_el);
            this.scoreBoard.appendChild(scoreBoardTitle);
            document.body.appendChild(this.scoreBoard);
            this.scores = new Map();
        }
    }, {
        key: "addPlayerToScoreBoard",
        value: function addPlayerToScoreBoard(nickname, score) {
            var scoreBoardLine = document.createElement("div");
            var score_el = document.createElement("span");
            score_el.style.boxSizing = "padding-box";
            score_el.style.margin = "5px 10px 0px 40px";
            score_el.style.width = "50px";
            score_el.style.textAlign = "left";
            score_el.style.font = "20pt/10pt sans-serif";
            score_el.textContent = score;
            var nickname_el = document.createElement("span");
            nickname_el.style.boxSizing = "padding-box";
            nickname_el.style.margin = "5px 15px 0px 10px";
            nickname_el.style.width = "50px";
            nickname_el.style.textAlign = "left";
            nickname_el.style.font = "20pt/10pt sans-serif";
            nickname_el.textContent = nickname;
            var number_el = document.createElement("span");
            number_el.style.boxSizing = "padding-box";
            number_el.style.margin = "5px 5px 0px 10px";
            number_el.style.width = "50px";
            number_el.style.textAlign = "left";
            number_el.style.font = "20pt/10pt sans-serif";
            number_el.textContent = this.scores.size + 1 + ".";
            scoreBoardLine.appendChild(number_el);
            scoreBoardLine.appendChild(nickname_el);
            scoreBoardLine.appendChild(score_el);
            scoreBoardLine.style.paddingTop = "20px";
            scoreBoardLine.style.borderBottom = "1px solid black";
            this.scores.set(nickname, scoreBoardLine);
            this.scoreBoard.appendChild(scoreBoardLine);
        }
    }]);

    return Controls;
}();

exports.default = Controls;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_object = __webpack_require__(4);

var _game_object2 = _interopRequireDefault(_game_object);

var _graph_tree = __webpack_require__(5);

var _graph_tree2 = _interopRequireDefault(_graph_tree);

var _tower = __webpack_require__(2);

var _tower2 = _interopRequireDefault(_tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
example info: {"nickname":"Nick2696","id":5784,"units":0,"beginX":50,"beginY":95,"readyForGameStart":true}
 */

var Enemy = function (_GameObject) {
    _inherits(Enemy, _GameObject);

    function Enemy(connection, world, info) {
        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, world, info.id, info.nickname));

        var point = { x: info.beginX, y: info.beginY };

        _this.connection = connection;

        _this.enemyGraph = new _graph_tree2.default(world);

        var tower = _this.generateEnemyTower(point, info.units);

        _this.currentNode = _this.enemyGraph.addNewVertexToCurrent(tower);
        _this.addTowerToMap(point, _this.currentNode);

        _this.drawObject();
        return _this;
    }

    _createClass(Enemy, [{
        key: 'drawObject',
        value: function drawObject() {
            this.enemyGraph.showNodes();
        }
    }, {
        key: 'animation',
        value: function animation(dx, dy) {}
    }, {
        key: 'addTowerToMap',
        value: function addTowerToMap(point, tower) {
            this.world.arrayMap[point.x][point.y] = tower;
        }
    }, {
        key: 'generateEnemyTower',
        value: function generateEnemyTower(point, units) {
            var tower = new _tower2.default(this.world, point.x, point.y, towerType.ENEMY, units, this.clientId, this.nickName);

            tower.client_id = this.nickName;
            return tower;
        }

        /* example: {"xfrom":3,"yfrom":1,"xto":5,"yto":2,"unitsCount":50,"parentUnitsCount":0} */

    }, {
        key: 'createNewEnemyVertex',
        value: function createNewEnemyVertex(info) {
            // debugger;
            var pointTo = { x: info["xto"], y: info["yto"] };
            var genUnits = info["unitsCount"];

            var lastNode = this.currentNode;

            var tower = this.generateEnemyTower(pointTo, genUnits);

            this.currentNode = this.enemyGraph.addNewVertexToCurrent(tower);
            this.addTowerToMap(pointTo, this.currentNode);

            lastNode.data.units = info["parentUnitsCount"];
        }
    }, {
        key: 'setPerforming',
        value: function setPerforming(flag) {
            if (this.currentNode != null) this.currentNode.data.setPerforming(flag);
        }
    }]);

    return Enemy;
}(_game_object2.default);

exports.default = Enemy;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader(srcManifest, callback) {
        _classCallCheck(this, Loader);

        this.queue = new createjs.LoadQueue(true);
        this.queue.loadManifest(srcManifest);
        this.queue.on("complete", this.handleLoadAllFile.bind(this));

        this.fromCallback = callback;
    }

    _createClass(Loader, [{
        key: "handleLoadAllFile",
        value: function handleLoadAllFile(event) {
            // Example work with queue
            /* queue.getResult(Name) */
            // TODO check errors

            this.fromCallback(this.queue);
        }
    }]);

    return Loader;
}();

exports.default = Loader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _area = __webpack_require__(19);

var _area2 = _interopRequireDefault(_area);

var _world = __webpack_require__(34);

var _world2 = _interopRequireDefault(_world);

var _loader = __webpack_require__(23);

var _loader2 = _interopRequireDefault(_loader);

var _menu_page = __webpack_require__(25);

var _menu_page2 = _interopRequireDefault(_menu_page);

var _play_page = __webpack_require__(26);

var _play_page2 = _interopRequireDefault(_play_page);

var _connection = __webpack_require__(20);

var _connection2 = _interopRequireDefault(_connection);

var _room = __webpack_require__(27);

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.DATATYPE_ROOMINFO = 1;
window.DATATYPE_PLAYERMOVE = 2;
window.DATATYPE_NEWBONUS = 3;
window.DATATYPE_ERROR = 4;
window.DATATYPE_HELLO = 5;

window.READY_FOR_ROOM_SEARCH = 1;
window.READY_FOR_GAME_START = 2;
window.GAME_UPDATE_MY_MOVE = 3;
window.GAME_ACCEPT_MY_MOVE = 4;

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.STATUS_CREATING = 0;
window.STATUS_PLAYING = 1;
window.STATUS_READY = 2;

window.conf = {
    ip: [{ host: "172.16.83.124", port: 8081, path: "/game " }, { host: "192.168.43.107", port: 8081, path: "/game" }],
    baseIP: 1,

    countUsersInRoom: 2,

    // UI
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0,
    BONUS: 1,
    ENEMY: 2
};

function startGame(elementDOM) {
    var needFilesForProjectManifest = [{ id: "playButton", src: "./img/play.png" }];

    var connectionService = null;

    var room = null;

    var iAmReady = function iAmReady() {
        if (room === null) {
            alert("room ~ null");
            return;
        }

        world.canvas.requestPointerLock(); // for lock user

        room.iAmReady();
    };

    var area = new _area2.default(elementDOM);

    var world = new _world2.default(elementDOM, area);
    var menuPage = new _menu_page2.default(world, iAmReady);

    new _loader2.default(needFilesForProjectManifest, function (result) {
        console.log(result);
        menuPage.startPage(result);
    });

    connectionService = new _connection2.default(function (status) {
        if (status === RES_ERROR) {
            alert("error connect server!"); // error
            return;
        }

        var playPage = new _play_page2.default(world, connectionService, null); // TODO loading

        connectionService.addEventListen(DATATYPE_HELLO, function (json) {
            var id = json["id"];
            var nickname = json["nickname"];

            if (!id || !nickname) {
                alert("error");
                return;
            }

            room = new _room2.default(connectionService, menuPage, id, nickname, function (room) {
                room.deleteListenRoomInfo();

                menuPage.stopPage(); // destruct room choose

                playPage.startPage(room);

                world.update();
            });
        });
    });
}

exports.default = startGame;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _system = __webpack_require__(29);

var _base_page = __webpack_require__(3);

var _base_page2 = _interopRequireDefault(_base_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuPage = function (_BasePage) {
    _inherits(MenuPage, _BasePage);

    function MenuPage(world, callBackIfRun) {
        _classCallCheck(this, MenuPage);

        var _this = _possibleConstructorReturn(this, (MenuPage.__proto__ || Object.getPrototypeOf(MenuPage)).call(this, world));

        _this.callbackIfRun = callBackIfRun;

        _this.children = [];

        _this.buttonMenu = null;
        _this.menuShapes = null;

        _this.ticker = 0;

        _this.enableRotation = false;
        return _this;
    }

    _createClass(MenuPage, [{
        key: 'startPage',
        value: function startPage(resource) {
            var _this2 = this;

            var cellCenter = this.world.area.getExactPosition(this.world.area.fullSize.x / 2, this.world.area.fullSize.y / 2);
            var cenX = cellCenter.x,
                cenY = cellCenter.y;
            this.world.setOffsetForCenter(cenX, cenY);
            scrollTo(0, 0);
            document.body.style.overflow = "hidden";

            this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
            this.buttonMenu.x = cenX - this.buttonMenu.image.width / 2;
            this.buttonMenu.y = cenY - this.buttonMenu.image.height / 2;
            this.world.update();
            this.world.area.world.stage.update();

            var onClickRun = function onClickRun(event) {
                _this2.callbackIfRun();
            };

            this.buttonMenu.on('click', onClickRun.bind(this));
        }
    }, {
        key: 'stopPage',
        value: function stopPage() {
            this.world.stage.removeChild(this.buttonMenu);
            this.world.stage.clear();

            this.world.update();
        }
    }, {
        key: 'setEnableRotation',
        value: function setEnableRotation(flag) {
            this.enableRotation = flag;

            // debugger;
            // this.buttonMenu.rotate(10);
            this.world.update();
        }
    }]);

    return MenuPage;
}(_base_page2.default);

exports.default = MenuPage;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(31);

var _user2 = _interopRequireDefault(_user);

var _tower = __webpack_require__(2);

var _tower2 = _interopRequireDefault(_tower);

var _controls = __webpack_require__(21);

var _controls2 = _interopRequireDefault(_controls);

var _base_page = __webpack_require__(3);

var _base_page2 = _interopRequireDefault(_base_page);

var _enemy = __webpack_require__(22);

var _enemy2 = _interopRequireDefault(_enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPage = function (_BasePage) {
    _inherits(PlayPage, _BasePage);

    function PlayPage(world, connection, resource) {
        _classCallCheck(this, PlayPage);

        var _this = _possibleConstructorReturn(this, (PlayPage.__proto__ || Object.getPrototypeOf(PlayPage)).call(this, world));

        _this.enemiesData = [];
        _this.enemiesObject = {};

        _this.user = null;

        _this.connection = connection;
        _this.resource = resource;

        _this.nowPerforming = null;
        return _this;
    }

    _createClass(PlayPage, [{
        key: 'splitUsers',
        value: function splitUsers(array, meId) {
            var me = null;

            for (var user in array) {
                if (array[user].id === meId) {
                    me = array[user];
                } else {
                    this.enemiesData.push(array[user]);
                }
            }

            return me;
        }
    }, {
        key: 'startPage',
        value: function startPage(room) {
            var _this2 = this;

            var perfomingPlayer = room.pid;

            var meData = this.splitUsers(room.players, room.meId);
            this.user = new _user2.default(this.connection, this.world, { x: meData.beginX, y: meData.beginY }, meData.id, meData.nickname || "NONAME", meData.units);

            /* if user step */
            if (perfomingPlayer == room.meId) {
                this.nowPerforming = this.user;
                this.user.setPerforming(true);
            }

            for (var index in this.enemiesData) {
                var enemyData = this.enemiesData[index];
                this.enemiesObject[enemyData.id] = new _enemy2.default(this.connection, this.world, enemyData);
                if (enemyData.id == perfomingPlayer) {
                    this.nowPerforming = this.enemiesObject[enemyData.id];
                    this.enemiesObject[enemyData.id].setPerforming(true);
                }
            }

            this.connection.addEventListen(DATATYPE_NEWBONUS, function (json) {
                var x = json["x"];
                var y = json["y"];
                var value = json["value"];

                var bonus = new _tower2.default(_this2.world, x, y, towerType.BONUS, value);
                bonus.draw();
                _this2.world.arrayMap[x][y] = bonus;
            });

            window.controls = new _controls2.default();
            window.controls.addPlayerToScoreBoard("Alex", 13412);
            window.controls.addPlayerToScoreBoard("Alg", 12423);
            window.controls.addPlayerToScoreBoard("Sergey", 15352);

            this.connection.addEventListen(DATATYPE_PLAYERMOVE, function (json) {
                // debugger;
                if (json["type"] != 1) return;

                if (!(json["playerid"] in _this2.enemiesObject)) {
                    /* dont draw me */
                    console.log("No Draw and update!");
                    return;
                }

                _this2.nowPerforming.setPerforming(false);

                console.log("Draw: " + _this2.enemiesObject[json["playerid"]]);

                _this2.enemiesObject[json["playerid"]].createNewEnemyVertex(json["moves"]["create"][0]); /* TODO kostyl*/
                _this2.enemiesObject[json["playerid"]].drawObject();
                _this2.world.update();
            });

            /* was kicked */
            this.connection.addEventListen(DATATYPE_ERROR, function (json) {
                alert("You was kicked!");
                _this2.stopPage();
            });

            /* event status server and pid*/
            this.connection.addEventListen(DATATYPE_ROOMINFO, function (json) {
                var status = json["status"];
                /* while exit and wait new game */
                if (status == STATUS_CREATING) {
                    // TODO to menu
                    // alert("exit game and new room");
                    return;
                } else if (status == STATUS_PLAYING && "pid" in json) {
                    var pid = json["pid"];

                    if (pid == _this2.user.clientId) {
                        _this2.nowPerforming = _this2.user;
                    } else if (pid in _this2.enemiesObject) {
                        _this2.nowPerforming = _this2.enemiesObject[pid];
                    }

                    _this2.nowPerforming.setPerforming(true);
                    _this2.world.update();
                } else {
                    alert("wtf!!!!");
                }
            });
        }
    }, {
        key: 'stopPage',
        value: function stopPage() {
            // TODO remove game scene and work with menupage
        }
    }, {
        key: 'updateAllUsers',
        value: function updateAllUsers(json) {
            // TODO Noraml method`
            /*
            console.log("receive");
            let objects = json["newUsersPositions"];
            for (let key in objects) {
                console.log(objects[key]["NewPoint"]["x"]);
                console.log(objects[key]["NewPoint"]["y"]);
                this.enemies.push(new User(this.world, {
                    x: objects[key]["NewPoint"]["x"],
                    y: objects[key]["NewPoint"]["y"]
                }));
            }
            */
        }
    }]);

    return PlayPage;
}(_base_page2.default);

exports.default = PlayPage;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Room = function () {
    function Room(connection, waitPage, id, nickName, runGame) {
        var _this = this;

        _classCallCheck(this, Room);

        this.meId = id;
        this.meNickName = nickName;

        this.players = new Array(conf.countUsersInRoom);

        this.roomId = -1;
        this.pid = -1;

        this.runGame = runGame;
        this.waitPage = waitPage;

        this.connection = connection;

        this.connection.addEventListen(DATATYPE_ROOMINFO, function (json) {
            var roomId = json["roomID"];
            var status = json["status"];
            var players = json["players"];
            var pID = json["pid"];

            _this.players = players;

            if (status == STATUS_PLAYING) {
                _this.roomId = roomId; // TODO change runID
                _this.pid = pID;

                _this.runGame(_this);
            }

            console.log("Get [room.js]: " + roomId);
        });

        this.connection.send(READY_FOR_ROOM_SEARCH);
    }

    _createClass(Room, [{
        key: "deleteListenRoomInfo",
        value: function deleteListenRoomInfo() {
            this.connection.deleteListen(DATATYPE_ROOMINFO);
        }
    }, {
        key: "iAmReady",
        value: function iAmReady() {
            this.connection.send(READY_FOR_GAME_START);

            this.waitPage.setEnableRotation(true);
        }
    }, {
        key: "addUser",
        value: function addUser(id, nickName) {
            this.usersNames.push({
                id: id,
                nickName: nickName
            });
        }
    }]);

    return Room;
}();

exports.default = Room;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerConnect = function () {
    /**
     * @param server as string
     * @param opened
     */
    function ServerConnect(server, opened) {
        _classCallCheck(this, ServerConnect);

        this.statusServer = false; // TODO change

        this.socket = new WebSocket(server);

        this.opened = opened;

        this.socket.onopen = function () {
            opened(RES_OK);
        };

        this.socket.onerror = function () {
            opened(RES_ERROR);
        };
    }

    /**
     * @param json_data as Object
     * @param callback  as function
     */


    _createClass(ServerConnect, [{
        key: "sendData",
        value: function sendData(json_data) {
            var needSend = ServerConnect.toJson(json_data);
            console.log("Send: " + needSend);
            this.socket.send(needSend);
        }

        /**
         * @param func as function(event)
         */

    }, {
        key: "onMessage",
        set: function set(func) {
            this.socket.onmessage = function (event) {
                func(ServerConnect.fromJson(event.data));
            };
        }
    }], [{
        key: "toJson",
        value: function toJson(obj) {
            return JSON.stringify(obj);
        }
    }, {
        key: "fromJson",
        value: function fromJson(text) {
            return JSON.parse(text);
        }
    }]);

    return ServerConnect;
}();

exports.default = ServerConnect;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

exports.randomInteger = randomInteger;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Cyclic graph */

var Tree = function () {
    function Tree() {
        _classCallCheck(this, Tree);

        this.rootNode = null;
    }

    _createClass(Tree, [{
        key: "iterator",
        value: function iterator(callbackDown) {
            return Tree.iteratorByNode(this.rootNode, callbackDown);
        }
    }, {
        key: "addNode",
        value: function addNode(data, node) {
            if (!this.rootNode) {
                this.rootNode = new NodeImpl(data, null);
                return this.rootNode;
            }

            var added = new NodeImpl(data, node);
            node.addNode(added);

            return added;
        }
    }, {
        key: "root",
        get: function get() {
            return this.rootNode;
        }
    }], [{
        key: "iteratorByNode",
        value: function iteratorByNode(node, callbackDown) {
            return {
                currentNode: node,
                stackImpl: [0],
                stopNodeImpl: node.parentNode,
                callBackIfDown: callbackDown,
                nextNode: function nextNode() {
                    // debugger;
                    if (!this.currentNode) {
                        return null;
                    }

                    var return_value = this.currentNode;
                    var lastValueStack = this.stackImpl[this.stackImpl.length - 1];

                    if (this.currentNode.nextNode.length <= lastValueStack) {
                        this.stackImpl.pop();
                        if (this.currentNode.parentNode != null) this.callBackIfDown(this.currentNode, this.currentNode.parentNode);

                        this.currentNode = function down(node, stack, stop_value, callback) {
                            if (node == null) {
                                return null;
                            }
                            var last = stack[stack.length - 1];
                            if (node.nextNode.length > last) {
                                return node;
                            } else {
                                stack.pop();

                                if (node.parentNode === stop_value) {
                                    return null;
                                }

                                if (callback) {
                                    callback(node, node.parentNode); // call system function
                                }
                                return down(node.parentNode, stack, stop_value, callback);
                            }
                        }(this.currentNode.parentNode, this.stackImpl, this.stopNodeImpl, this.callBackIfDown);

                        lastValueStack = this.stackImpl[this.stackImpl.length - 1];
                    }

                    if (this.currentNode) {
                        this.stackImpl[this.stackImpl.length - 1]++;
                        this.stackImpl.push(0);
                        this.currentNode = this.currentNode.nextNode[lastValueStack];
                    }

                    return return_value;
                }
            };
        }
    }]);

    return Tree;
}();

function NodeImpl(data, parentNode) {
    this.nextNode = [];
    this.parentNode = parentNode;
    // Это нода
    this.data = data; // in data we need id игрока,цвет игрока, И КООРДИНАТЫ, КОТОРЫЕ В ДВУХМЕРНОМ МАССИВЕ
    // ЕЩЕ нужно хранить количество поинтов в данный момент
}

NodeImpl.prototype.addNode = function (node) {
    this.nextNode.push(node);
    return this.nextNode;
};

exports.default = Tree;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graph_tree = __webpack_require__(5);

var _graph_tree2 = _interopRequireDefault(_graph_tree);

var _user_action = __webpack_require__(32);

var _user_action2 = _interopRequireDefault(_user_action);

var _user_interface = __webpack_require__(33);

var _user_interface2 = _interopRequireDefault(_user_interface);

var _game_object = __webpack_require__(4);

var _game_object2 = _interopRequireDefault(_game_object);

var _tower2 = __webpack_require__(2);

var _tower3 = _interopRequireDefault(_tower2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_GameObject) {
    _inherits(User, _GameObject);

    function User(connection, world, point, clientId, userNick, units) {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, world, clientId, userNick));

        _this.arrayMap = world.arrayMap;
        _this.userInterface = new _user_interface2.default(world, {
            "getRealPosition": _this.myRealPosition.bind(_this),
            "addTower": _this.addNewTower.bind(_this)
        });

        _this.userAction = new _user_action2.default(connection);

        console.log("My nick: " + userNick);

        /*** Events ***/
        // connection.eventListen(DATATYPE_HELLO, (json) => {
        //     console.log("My nick: " + json["nickname"]);
        // });
        /**************/
        _this.myGraph = new _graph_tree2.default(world);

        var tower = _this.generateMyTower(point, units || conf.defaultStartUnit);

        _this.currentNode = _this.myGraph.addNewVertexToCurrent(tower);
        _this.addTowerToMap(point, _this.currentNode);

        _this.drawObject();

        //update camera
        _this.world.area.markSelectedCell(point.x, point.y);
        var pxPoint = _this.world.area.getPixelPoint(point.x, point.y);
        _this.world.setOffsetForCenter(pxPoint.x, pxPoint.y);
        _this.world.area.world.stage.update();
        _this.world.update();
        scrollTo(0, 0);
        return _this;
    }

    _createClass(User, [{
        key: 'setPerforming',
        value: function setPerforming(flag) {
            this.currentNode.data.setPerforming(flag);
        }

        /**
         *
         * @param pointNewTower
         */

    }, {
        key: 'addNewTower',
        value: function addNewTower(pointNewTower) {
            var placeTower = this.getFromMap(pointNewTower);

            this.setPerforming(false); // TODO if error

            if (placeTower == null) {
                var countInNewUnits = parseInt(this.currentNode.data.units / 2); // TODO /2 /4 / 6
                this.currentNode.data.decUnits(countInNewUnits);

                var tower = this.generateMyTower(pointNewTower, countInNewUnits);

                var newNode = this.myGraph.addNewVertexToCurrent(tower);
                this.addTowerToMap(pointNewTower, this.currentNode);

                this.userAction.createTown(this.currentNode.data.point, pointNewTower, countInNewUnits);

                this.currentNode = newNode;
            } else {
                // TODO work fight
                if (placeTower.constructor.name == "NodeImpl") {
                    var newUnits = this.currentNode.data.units;

                    this.currentNode.data.units /= 2;
                    placeTower.data.units += newUnits;

                    this.currentNode = this.myGraph.setCurrentVertex(placeTower);
                } else {
                    // bonus
                    var bonusUnits = placeTower.units;
                    var _tower = this.generateMyTower(pointNewTower, bonusUnits);

                    this.userAction.createTown(this.currentNode.data.point, pointNewTower, bonusUnits);

                    placeTower.destruct();
                    this.currentNode = this.myGraph.addNewVertexToCurrent(_tower);

                    this.addTowerToMap(pointNewTower, this.currentNode);
                }
            }

            this.drawObject();
        }
    }, {
        key: 'createVertextData',
        value: function createVertextData(position, units) {
            if ((typeof position === 'undefined' ? 'undefined' : _typeof(position)) !== "object") return null;

            position["units"] = units;
            return position;
        }
    }, {
        key: 'newBonus',
        value: function newBonus(position) {}
    }, {
        key: 'myRealPosition',
        value: function myRealPosition() {
            return { x: this.currentNode.data.realX, y: this.currentNode.data.realY };
        }
    }, {
        key: 'drawObject',
        value: function drawObject() {
            this.myGraph.showNodes();
        }
    }, {
        key: 'generateMyTower',
        value: function generateMyTower(point, units) {
            var tower = new _tower3.default(this.world, point.x, point.y, towerType.DEFAULT, units, this.clientId, this.nickName);

            tower.client_id = this.nickName;
            return tower;
        }
    }, {
        key: 'addTowerToMap',
        value: function addTowerToMap(point, tower) {
            this.world.arrayMap[point.x][point.y] = tower;
        }
    }, {
        key: 'getFromMap',
        value: function getFromMap(point) {
            // put only nodes
            var r = this.world.arrayMap[point.x][point.y];
            if (!r) return null;

            return r;
        }
    }]);

    return User;
}(_game_object2.default);

exports.default = User;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserAction = function () {
    function UserAction(connection) {
        _classCallCheck(this, UserAction);

        this.connection = connection;
    }

    /**
     *
     * @param world
     * @param from
     * @param to
     * @param unitCounts ~ int
     */


    _createClass(UserAction, [{
        key: "createTown",
        value: function createTown(from, to, unitCounts) {
            var _this = this;

            if (!this.connection) return;

            this.connection.send(GAME_UPDATE_MY_MOVE, {
                moves: {
                    create: [{
                        xfrom: from.x,
                        yfrom: from.y,
                        xto: to.x,
                        yto: to.y,
                        unitsCount: unitCounts
                    }]
                }
            });

            var id = this.connection.addEventListen(DATATYPE_PLAYERMOVE, function (json) {
                console.log("Print DATATYPE_PLAYERMOVE in userAction" + id);
                if (json["type"] === 0) {
                    _this.connection.send(GAME_ACCEPT_MY_MOVE);
                    _this.connection.deleteListenIndex(DATATYPE_PLAYERMOVE, id);
                } else {
                    console.log("wtf!");
                }
            });

            console.log(id);
        }
    }, {
        key: "setStop",
        value: function setStop(world) {}
    }]);

    return UserAction;
}();

exports.default = UserAction;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInterface = function () {
    function UserInterface(world, packCallback) {
        _classCallCheck(this, UserInterface);

        this.world = world; // get area
        document.addEventListener("mousemove", this.eventMove.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.world.canvas.addEventListener("mousedown", this.eventPutNewVertex.bind(this));

        this.packCallback = packCallback;

        this.world.update();
        this.world.area.world.stage.update();

        this.last_mv = { x: 0, y: 0 };
    }

    _createClass(UserInterface, [{
        key: "eventMove",
        value: function eventMove(event) {
            var pxPoint = this.packCallback["getRealPosition"]();

            this.last_mv = this.last_mv || { x: 0, y: 0 };

            var mv = {
                x: this.last_mv.x - event.movementX,
                y: this.last_mv.y - event.movementY
            };
            if (pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.world.area.fullSize.x) return;
            if (pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.world.area.fullSize.y) return;

            var cellPos = this.world.area.getCellPosition(pxPoint.x - mv.x, pxPoint.y - mv.y);
            var fullLength = conf.rectSize * 2 + conf.borderSize * 6;
            if (fullLength < Math.abs(mv.x) || fullLength < Math.abs(mv.y)) {
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
            } else this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);

            this.probablyCircle.x = pxPoint.x - mv.x;
            this.probablyCircle.y = pxPoint.y - mv.y;
            //
            this.probablyLine.graphics.clear();
            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            this.probablyLine.graphics.lineTo(this.probablyCircle.x, this.probablyCircle.y);
            this.probablyLine.graphics.endStroke();

            this.last_mv.x = mv.x;
            this.last_mv.y = mv.y;

            this.world.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
            this.world.update(); // TODO tick
        }
    }, {
        key: "eventPutNewVertex",
        value: function eventPutNewVertex(event) {
            this.world.canvas.requestPointerLock();

            var fullLength = conf.rectSize * 2 + conf.borderSize * 6;
            if (fullLength < Math.abs(this.last_mv.x) || fullLength < Math.abs(this.last_mv.y)) {
                return;
            }
            var pxPoint = this.packCallback["getRealPosition"]();
            var newX = pxPoint.x - this.last_mv.x,
                newY = pxPoint.y - this.last_mv.y;
            var newPos = this.world.area.getCellPosition(newX, newY);

            this.packCallback["addTower"](newPos);
            this.world.area.markSelectedCell(newPos.x, newPos.y);

            this.world.update();

            this.positionX = newPos.x;
            this.positionY = newPos.y;
            this.last_mv.x = 0;
            this.last_mv.y = 0;
        }
    }]);

    return UserInterface;
}();

exports.default = UserInterface;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
    function World(elementDOM, area) {
        _classCallCheck(this, World);

        this.canvas = document.createElement("canvas");

        this.canvas.id = "canvas-game";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 1;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.background = "transparent";
        this.canvas.style.left = "0px";

        this.canvas.height = area.canvas.height;
        this.canvas.width = area.canvas.width;
        this.canvas.style.top = area.canvas.style.top;
        this.canvas.style.left = area.canvas.style.left;
        this.offset = {
            x: 0,
            y: 0
        };

        elementDOM.appendChild(this.canvas);

        this.map = new createjs.Stage(this.canvas.id);
        createjs.Touch.enable(this.map);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.clientHeight = document.documentElement.clientHeight;
        this.clientWidth = document.documentElement.clientWidth;
        this.area = area;

        this.arrayMap = [];
        for (var i = 0; i < this.area.rectSize; i++) {
            this.arrayMap.push(new Array(this.area.rectSize));
        }
    }

    _createClass(World, [{
        key: "update",
        value: function update() {
            this.stage.update();
        }
    }, {
        key: "setCallBack",
        value: function setCallBack(event, func) {
            this.map.on(event, func);
        }
    }, {
        key: "appendOnMap",
        value: function appendOnMap(child) {
            this.map.stage.addChild(child); // TODO normal coor
        }

        /** Fabric draw **/

    }, {
        key: "newShape",
        value: function newShape(position, radius, color, visible) {
            var circle = new createjs.Shape();
            circle.visibility = visible || true;

            var pos = position || { x: 0, y: 0 };

            circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
            this.map.stage.addChild(circle);
            return circle;
        }
    }, {
        key: "newLine",
        value: function newLine(color, visible) {
            var line = new createjs.Shape();
            line.graphics.setStrokeStyle(3);
            line.visibility = visible || true;

            this.map.addChild(line);
            return line;
        }
    }, {
        key: "newImage",
        value: function newImage(file, visible) {
            /*var box = new createjs.Shape();
             box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100);
             box.graphics.drawCircle(0, 0, 100);
             box.cache(0, 0, 100, 100);
              let image = new createjs.Bitmap(file);
             image.filters = [
             new createjs.AlphaMapFilter(box.cacheCanvas)
             ];*/

            var image = new createjs.Bitmap(file);

            this.map.addChild(image);
            return image;
        }
    }, {
        key: "setOffset",
        value: function setOffset(x, y) {
            this.offset.x = x;
            this.offset.y = y;
            this.map.setTransform(x, y);
            this.area.setOffset(x, y);
        }
    }, {
        key: "getRelativeCoord",
        value: function getRelativeCoord(x, y) {
            return { x: x - this.offset.x, y: y - this.offset.y };
        }
    }, {
        key: "setOffsetForCenter",
        value: function setOffsetForCenter(x, y) {
            this.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));
            this.area.setOffset(-(x - (this.clientWidth / 2 | 0)), -(y - (this.clientHeight / 2 | 0)));

            var cellPoint = this.area.getCellPosition(x, y);
            this.area.setVisibles(cellPoint.x, cellPoint.y);
        }
    }, {
        key: "stage",
        get: function get() {
            return this.map;
        }
    }, {
        key: "basicCenter",
        get: function get() {
            return { x: this.map.canvas.width / 2, y: this.map.canvas.height / 2 };
        }
    }, {
        key: "getWidth",
        get: function get() {
            return this.width;
        }
    }, {
        key: "getHeight",
        get: function get() {
            return this.height;
        }
    }]);

    return World;
}();

exports.default = World;

/***/ })
/******/ ]);
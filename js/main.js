import Router from './router';
import Request from './request';

import MenuView from '../views/menuView'
import LoginView from '../views/loginView'
import RegistrationView from '../views/registrationView';
import LeaderBoardView from '../views/leaderboardView';
import GameView from '../views/gameView';
import AboutView from '../views/aboutView';

import LoginForm from '../blocks/login/login';
import Menu from '../blocks/menu/menu';
import RegistrationForm from '../blocks/register/registration';

(function () {
    window.confServer = {};
    let url = window.location.pathname;

    fetch('js/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function(result) {
        window.confServer = result;
    }).catch(error => "Error");



    let router = new Router(window.document.documentElement);

    let menuView = new MenuView(document.querySelector('.menu-view'));
    let loginView = new LoginView(document.querySelector('.login-view'));
    let registrationView = new RegistrationView(document.querySelector('.registration-view'));
    let aboutView = new AboutView(document.querySelector('.about-view'));
    let leaderBoardView = new LeaderBoardView(document.querySelector('.leaderboard-view'));
    let gameView = new GameView(document.querySelector('.game-view'));

    router.register('/', menuView);
    router.register('/main', menuView);
    router.register('/login', loginView);
    router.register('/about', aboutView);
    router.register('/logout', registrationView);
    router.register('/leaderboard', leaderBoardView);
    router.register('/game', gameView);

    router.start();

    let login = document.querySelector('#login');
    let registration = document.querySelector('#registration');
    let menu = document.querySelector('#menu');

    let menuForm = new Menu({
        el: document.createElement('div'),
        data: {
            controls: [
                {
                    text: 'Play',
                    attrs: {
                        type: 'click',
                        class: 'btn btn-success btn-block',
                        id: 'playPressed',
                        href: '/game'
                    }
                },
                {
                    text: 'LeaderBoard',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-info btn-block',
                        id: 'leaderboardPressed',
                        href: '/leaderboard'
                    }
                },
                {
                    text: 'Logout',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-danger btn-block',
                        id: 'logoutPressed',
                        href: '/login'
                    }
                }
            ]
        }
    });

    let loginForm = new LoginForm({
        el: document.createElement('div'),
        data: {
            title: 'Login',
            fields: [
                {
                    name: 'login',
                    type: 'text',
                    placeholder: 'Login...'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: ''
                }
            ],
            controls: [
                {
                    text: 'Login',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-default login-form__button login-form__button_red'
                    }
                }
            ]
        }
    });

    let registrationForm = new RegistrationForm({
        el: document.createElement('div'),
        data: {
            title: 'Registration',
            fields: [
                {
                    name: 'login',
                    type: 'text',
                    placeholder: 'Login'
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                },
                {
                    name: 'password_repeat',
                    type: 'password',
                    placeholder: 'Repeat'
                }
            ],
            controls: [
                {
                    text: 'Register',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-default registration-form__button registration-form__button_red'
                    }
                }
            ]
        }
    });


    login.appendChild(loginForm.el);
    registration.appendChild(registrationForm.el);
    menu.appendChild(menuForm.el);

    loginForm.on('submit', event => {
        event.preventDefault();

        const ifError = function(error) {
            loginWarningElement.innerHTML = "error";
        };

        new Request(confServer['server'])
            .addResponse(function (json) {
                console.log(json);
            })
            .addJson(loginForm.getFormData())
            .error(function (err) {
                console.log("[ERROR] Error response in login");
                ifError("Ошибка сервера!");
            })
            .request('/login', {
                method: 'POST'
            });
    });

    registrationForm.on('submit', event => {
        event.preventDefault();

        const ifError = function(error) {
            registrationWarningElement.innerHTML = error;
        };

        let regData = registrationForm.getFormData();

        if(regData['password'] !== regData['password_repeat']) {
            ifError("Password is not equals!");
            return;
        }

        delete regData['password_repeat'];

        new Request(confServer['server'])
            .addResponse(function (json) {
                console.log(json);
            })
            .addJson(regData)
            .error(ifError)
            .request('/user', {
                method: 'PUT'
            });

    });

    const aboutPage = document.getElementById('about');

    let loginWarningElement = document.getElementById("login_warning");
    let registrationWarningElement = document.getElementById("registration_warning");


    aboutPage.innerHTML = template();


    router.startPage(url);
})();

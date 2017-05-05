import Router from './router';

import MenuView from './views/menuView'
import LoginView from './views/loginView'
import RegistrationView from './views/registrationView';
import LeaderBoardView from './views/leaderboardView';
import GameView from './views/gameView';
import AboutView from './views/aboutView';

import LoginForm from './blocks/login/login';
import Menu from './blocks/menu/menu';
import About from './blocks/about/about'
import RegistrationForm from './blocks/register/registration';

import Auth from './auth';

import serviceWorkerLoader from '../worker_loader';

(function () {
    window.confServer = {};
    let url = window.location.pathname;

    serviceWorkerLoader();

    fetch('js/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function(result) {
        window.confServer = result;
    }).catch(error => "Error");

    let auth = new Auth();
    let router = new Router(window.document.documentElement);

    let menuView = new MenuView(document.querySelector('.menu-view'));
    let loginView = new LoginView(document.querySelector('.login-view'));
    let registrationView = new RegistrationView(document.querySelector('.registration-view'));
    let aboutView = new AboutView(document.querySelector('.about-view'));
    let leaderBoardView = new LeaderBoardView(document.querySelector('.leaderboard-view'));
    let gameView = new GameView(document.querySelector('.game-view'));

    router.register('/', loginView);
    router.register('/login', loginView);
    router.register('/about', aboutView);
    router.register('/logout', registrationView);
    router.register('/leaderboard', leaderBoardView);



    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options) {
        options = options || {};

        let expires = options.expires;

        if (typeof expires === "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        let updatedCookie = name + "=" + value;

        for (let propName in options) {
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    debugger;
    if(getCookie('logged')==='true'){
        console.log("Already login !");
        router.register('/', menuView);
        router.register('/main', menuView);
        router.register('/game', gameView);
        router.go("/main");
    }
    document.getElementById('registered').textContent = getCookie('login');

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
                        type: 'click',
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
                        id: 'logoutPressed'
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
                    placeholder: 'Login'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
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

    let btnLogout = document.getElementById("logoutPressed");
    debugger;
    btnLogout.onclick = (event)=>{
        event.preventDefault();
        setCookie('logged', 'false');
        setCookie('login', 'Guest');
        auth.logout(
            ()=>{
                router.go('/login');
            },
            ()=>{
                console.log("Error, logout !");
            }
        );
    };

    loginForm.on('submit', event => {
        event.preventDefault();
        let loginData = loginForm.getFormData();

        auth.auth(loginData,
            ()=>{
            debugger;
                auth.getMe(
                    (user)=>{
                        console.log("Success login !");
                        router.register('/', menuView);
                        router.register('/main', menuView);
                        router.register('/game', gameView);
                        router.go("/main");

                        document.cookie = "logged=true";
                        document.cookie = 'login=' + user.login;
                        document.getElementById('registered').textContent = user.login;
                    },
                    ()=>{

                    }
                )
            },
            ()=>{
                console.log("Fail login !");
            }
        );
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

        auth.register(regData,
            ()=>{
                console.log("Success login !");
                router.go("/login");
            },
            ()=>{
                console.log("Fail login !");
            }
        );

    });

    const aboutPage = document.getElementById('about');

    let loginWarningElement = document.getElementById("login_warning");
    let registrationWarningElement = document.getElementById("registration_warning");

    let about = new About();
    aboutPage.innerHTML = about.getElement();


    router.startPage(url);
})();

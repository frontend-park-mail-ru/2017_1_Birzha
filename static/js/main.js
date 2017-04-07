(function () {
    window.conf = {};
    let Button = window.Button;
    let url = window.location.pathname;

    fetch('/static/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function(result) {
        window.conf = result;
    }).catch(error => "Error");

    const Router = window.Router;
    const MenuView = window.menuView;
    const LoginView = window.loginView;
    const RegistrationView = window.registrationView;
    const LeaderboardView = window.leaderboardView;
    const GameView = window.gameView;
    const AboutView = window.aboutView;

    let router = new Router(window.document.documentElement);

    let menuView = new MenuView(document.querySelector('.menu-view'));
    let loginView = new LoginView(document.querySelector('.login-view'));
    let registrationView = new RegistrationView(document.querySelector('.registration-view'));
    let aboutView = new AboutView(document.querySelector('.about-view'));
    let leaderboardView = new LeaderboardView(document.querySelector('.leaderboard-view'));
    let gameView = new GameView(document.querySelector('.game-view'));

    router.register('/', menuView);
    router.register('/main', menuView);
    router.register('/login', loginView);
    router.register('/about', aboutView);
    router.register('/logout', registrationView);
    router.register('/leaderboard', leaderboardView);
    router.register('/game', gameView);

    router.start();

    let login = document.querySelector('#login');
    let registration = document.querySelector('#registration');
    let menu = document.querySelector('#menu');

    let loginPage = document.querySelector('#login');
    let registrationPage = document.querySelector('#registrationPage');
    const menuPage = document.querySelector('#menuPage');

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
                        class: 'btn btn-default'
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
                    name: 'firstName',
                    type: 'text',
                    placeholder: 'Firstname'
                },
                {
                    name: 'lastName',
                    type: 'text',
                    placeholder: 'Lastname'
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
                        class: 'btn btn-default'
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

        new Request(conf['server'])
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

        new Request(conf['server'])
            .addResponse(function (json) {
                console.log(json);
            })
            .addJson(regData)
            .error(ifError)
            .request('/user', {
                method: 'PUT'
            });

    });


    const leaderPage = document.getElementById('leaderboard');
    const gamePage = document.getElementById('game');
    const aboutPage = document.getElementById('about');
    const FlagRegistered = document.getElementById('Registered');

    let loginWarningElement = document.getElementById("login_warning");
    let registrationWarningElement = document.getElementById("registration_warning");

    const pages = [loginPage, registrationPage, menuPage, leaderPage, gamePage, aboutPage];
    const changeScreen = function (linker) {
        pages.map((el) => {
            el.hidden = (el != linker);
        });
    };
    aboutPage.innerHTML = template();

    leaderPage.hidden = true;
    gamePage.hidden = true;
    aboutPage.hidden = true;
    menuPage.hidden = true;
    loginPage.hidden = true;
    registrationPage.hidden = true;

    router.startPage(url);
})();

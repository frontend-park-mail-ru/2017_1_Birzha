(function () {
    window.conf = {};

    fetch('/static/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function(result) {
        window.conf = result;
    }).catch(error => "Error");

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
                        id: 'playPressed'
                    }
                },
                {
                    text: 'LeaderBoard',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-info btn-block',
                        id: 'leaderboardPressed'
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

    const buttonPlay = document.querySelector('#playPressed');
    const buttonLogout = document.getElementById('logoutPressed');
    const buttonLeader = document.getElementById('leaderboardPressed');
    const AboutReference = document.getElementById('aboutReference');
    const AcyclicReference = document.getElementById('AcyclicReference');
    const RegisterReference = document.getElementById('RegisterPageId');

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

    buttonPlay.addEventListener('click', function (event) {
        event.preventDefault();
        changeScreen(gamePage);
    });

    buttonLogout.addEventListener('click', function (event) {
        event.preventDefault();
        changeScreen(loginPage);
    });

    buttonLeader.addEventListener('click', function (event) {
        event.preventDefault();
        changeScreen(leaderPage);
    });

    AcyclicReference.addEventListener('click', function (event) {
        event.preventDefault();
        changeScreen(menuPage);
    });

    AboutReference.addEventListener('click', function (event) {

        event.preventDefault();

        FlagRegistered.innerHTML = 'Nick_name'; // TODO Nick name
        changeScreen(aboutPage);
    });

    RegisterReference.addEventListener('click', function (event) {

        FlagRegistered.innerHTML = '';
        changeScreen(registrationPage);
    });

    changeScreen(menuPage);

})();

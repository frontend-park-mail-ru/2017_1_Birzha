(function () {

let confData = JSON.parse($("#conf").html());

let login = document.querySelector('#login');
let registration = document.querySelector('#registration');
let menu = document.querySelector('#menu');

let loginPage = document.querySelector('#login');
let registrationPage = document.querySelector('#registrationPage');
const menuPage = document.querySelector('#menuPage');

let menuForm = new Form({
    el: document.createElement('div'),
    data: {
        title: '',
        fields: [],
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

let server = confData['server'];

loginForm.on('submit', event => {
    event.preventDefault();

    const ifError = function(error) {
        $("#login_warning").html("error");
    };

    new Request(server)
        .addResponse(function (json) {
            console.log(json);
        })
        .addJson(loginForm.getFormData())
        .error(function () {
            
        })
        .error(ifError)
        .request('/login', {
            method: 'POST'
        });
});

registrationForm.on('submit', event => {
    event.preventDefault();

    const ifError = function(error) {
        $("#registration_warning").html(error);
    };

    let regData = registrationForm.getFormData();

    if(regData['password'] !== regData['password_repeat']) {
        ifError("Password is not equals!");
        return;
    }

    delete regData['password_repeat'];

    new Request(server)
        .addResponse(function (json) {
            console.log(json);
        })
        .addJson(regData)
        .error(ifError)
        .request('/user', {
            method: 'PUT'
        });

    loginPage.hidden = true;
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


leaderPage.hidden = true;
gamePage.hidden = true;
aboutPage.hidden = true;

buttonPlay.addEventListener('click', function (event) {

    event.preventDefault();

    loginPage.hidden = true;
    registrationPage.hidden = true;
    menuPage.hidden = true;

    leaderPage.hidden = true;
    gamePage.hidden = false;
    aboutPage.hidden = true;
});

buttonLogout.addEventListener('click', function (event) {

    event.preventDefault();

    loginPage.hidden = false;
    registrationPage.hidden = true;
    menuPage.hidden = true;

    leaderPage.hidden = true;
    gamePage.hidden = true;
    aboutPage.hidden = true;
});

buttonLeader.addEventListener('click', function (event) {

    event.preventDefault();

    loginPage.hidden = true;
    registrationPage.hidden = true;
    menuPage.hidden = true;

    leaderPage.hidden = false;
    gamePage.hidden = true;
    aboutPage.hidden = true;
});


AcyclicReference.addEventListener('click', function (event) {

    event.preventDefault();

    loginPage.hidden = true;
    registrationPage.hidden = true;
    menuPage.hidden = false;

    leaderPage.hidden = true;
    gamePage.hidden = true;
    aboutPage.hidden = true;
});

AboutReference.addEventListener('click', function (event) {

    event.preventDefault();

    FlagRegistered.innerHTML = 'Nick_name';
    loginPage.hidden = true;
    registrationPage.hidden = true;
    menuPage.hidden = true;

    leaderPage.hidden = true;
    gamePage.hidden = true;
    aboutPage.hidden = false;
});

RegisterReference.addEventListener('click', function (event) {

    FlagRegistered.innerHTML = '';
    loginPage.hidden = true;
    registrationPage.hidden = false;
    menuPage.hidden = true;

    leaderPage.hidden = true;
    gamePage.hidden = true;
    aboutPage.hidden = true;
});

loginPage.hidden = true;
registrationPage.hidden = true;
menuPage.hidden = false;

})();
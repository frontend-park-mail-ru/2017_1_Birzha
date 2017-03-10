let login = document.querySelector('#login');
let registration = document.querySelector('#registration');
let menu = document.querySelector('#menu')

let loginPage = document.querySelector('#loginPage');
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
                    type: 'submit',
                    class: 'btn btn-success btn-block',
                    id: 'playPressed'
                }
            },
            {
                text: 'LeaderBoard',
                attrs: {
                    type: 'submit',
                    class: 'btn btn-info btn-block',
                    id: 'leaderbordPressed'
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

let loginForm = new Form({
    el: document.createElement('div'),
    data: {
        title: 'Login',
        fields: [
            {
                name: 'user',
                type: 'text',
                placeholder: 'name'
            },
            {
                name: 'email',
                type: 'email',
                placeholder: 'email'
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

let registrationForm = new Form({
    el: document.createElement('div'),
    data: {
        title: 'Registration',
        fields: [
            {
                name: 'user',
                type: 'text',
                placeholder: 'name'
            },
            {
                name: 'email',
                type: 'email',
                placeholder: 'email'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'enter your Password'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'repeate your Password'
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


loginForm.on('submit', event => {
    event.preventDefault();
    loginPage.hidden = true;
    registrationPage.hidden = false;
});

registrationForm.on('submit', event => {
    event.preventDefault();
    loginPage.hidden = true;
    registrationPage.hidden = true;
});


login.appendChild(loginForm.el);
registration.appendChild(registrationForm.el);
menu.appendChild(menuForm.el);

loginPage.hidden = true;
registrationPage.hidden = true;
menuPage.hidden = false;


const leader = document.getElementById('leaderboard');
const game = document.getElementById('game');
const about = document.getElementById('about');
const FlagRegistered = document.getElementById('Registered');

leader.hidden = true;
game.hidden = true;
about.hidden = true;
FlagRegistered.innerHTML = 'Player Nick';

const buttonPlay = document.getElementById('playPressed');
const buttonLogout = document.getElementById('logoutPressed');
const buttonLeader = document.getElementById('leaderbordPressed');
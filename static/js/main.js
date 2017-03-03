/**
 * Created by daniarkadyrbekov on 28.02.17.
 */
'use strict';

// Получаем ссылки на элементы страницы
const menu = document.getElementById('menu');
const login = document.getElementById('login');
const leader = document.getElementById('leaderboard');
const game = document.getElementById('game');
const about = document.getElementById('about');
const register = document.getElementById('register');
const FlagRegistered = document.getElementById('Registered');

// Элементы page#1
const buttonPlay = document.getElementById('playPressed');
const buttonLogout = document.getElementById('logoutPressed');
const buttonLeader = document.getElementById('leaderbordPressed');
const AboutReference = document.getElementById('aboutReference');
const buttonLogin = document.getElementById('loginPressed');
const RegisterReference = document.getElementById('RegisterPageId');
const RegisterPressed = document.getElementById('RegisterPressed');

// Скрываем вторую страницу
leader.hidden = true;
login.hidden = true;
game.hidden = true;
about.hidden = true;
register.hidden = true;


// Добавляем обработчик события на кнопку "логина"
buttonPlay.addEventListener('click', function (event) {

    // Переключаем страницы
    menu.hidden = true;
    leader.hidden = true;
    login.hidden = true;
    about.hidden = true;
    register.hidden = true;
    game.hidden = false;
    FlagRegistered.innerHTML = 'Player_Nick';
});

buttonLogout.addEventListener('click', function (event) {

    // Переключаем страницы
    menu.hidden = true;
    leader.hidden = true;
    login.hidden = false;
    game.hidden = true;
    about.hidden = true;
    register.hidden = true;
    FlagRegistered.innerHTML = 'Player_Nick';
});

buttonLeader.addEventListener('click', function (event) {

    // Переключаем страницы
    menu.hidden = true;
    leader.hidden = false;
    login.hidden = true;
    game.hidden = true;
    about.hidden = true;
    register.hidden = true;
    FlagRegistered.innerHTML = 'Player_Nick';
});

AboutReference.addEventListener('click', function (event) {

    // Переключаем страницы
    menu.hidden = true;
    leader.hidden = true;
    login.hidden = true;
    game.hidden = true;
    about.hidden = false;
    register.hidden = true;
    FlagRegistered.innerHTML = 'Player_Nick';
});

buttonLogin.addEventListener('click', function (event) {

    const inputLogin = document.getElementById('inputLogin');
    const inputPassword = document.getElementById('inputPassword');

    if( (inputLogin.value != '') && (inputPassword.value != '') ){
        menu.hidden = true;
        leader.hidden = true;
        login.hidden = true;
        game.hidden = false;
        about.hidden = true;
        register.hidden = true;
        FlagRegistered.innerHTML = 'Player_Nick';
    }
    else{
        alert('Invalid Data');
    }
});

RegisterReference.addEventListener('click', function (event) {

    FlagRegistered.innerHTML = '';
    menu.hidden = true;
    leader.hidden = true;
    login.hidden = true;
    about.hidden = true;
    register.hidden = false;
    game.hidden = true;
});

RegisterPressed.addEventListener('click', function (event) {
    const inputEmail = document.getElementById('inputEmail');
    const inputLogin = document.getElementById('inputLogin2');
    const inputPassword = document.getElementById('inputPassword2');
    const inputPasswordR = document.getElementById('inputPasswordR');

    if(inputLogin.value != '' && inputEmail != '' && inputPassword != inputPasswordR){
        FlagRegistered.innerHTML = '';
        menu.hidden = true;
        leader.hidden = true;
        login.hidden = true;
        about.hidden = true;
        register.hidden = false;
        game.hidden = true;
    }else {
        alert('Invalid Data');
    }
});
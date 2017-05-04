'use strict';

const expr = require("express");

const app = expr();

app.use(expr.static('./'));

app.get('/login', function (req, res){
    res.sendfile('./index.html');
});

app.get('/logout', function (req, res){
    res.sendfile('./index.html');
});

app.get('/main', function (req, res){
    res.sendfile('./index.html');
});

app.get('/about', function (req, res){
    res.sendfile('./index.html');
});

app.get('/leaderboard', function (req, res){
    res.sendfile('./index.html');
});

app.get('/game', function (req, res){
    res.sendfile('./index.html');
});

app.get(/.*/, function (req, res){
    res.sendfile('./index.html');
});

app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
    console.log(`Example app listening on port ${process.env.PORT || 3000} !`);
});
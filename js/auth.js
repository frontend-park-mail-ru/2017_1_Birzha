/**
 * Created by algys on 13.04.17.
 */

import Request from './request'

class Auth{
    constructor(){
        this.isAuth = false;
    }

    getMe(){
        let user = null;
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                console.log(response);
                response.json().then(function(data){
                    user = data;
                });
            }.bind(this))
            .addJson(null)
            .error(function (err) {
                console.log("[ERROR] Error response in login");
            })
            .request("/user", {
                method: 'GET'
            });
        return user;
    }

    auth(data, success, error){
        let status = false;
        debugger;
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    error();
                    return;
                }
                this.isAuth = true;
                success();
            }.bind(this))
            .addJson(data)
            .error(function (err) {
                console.log("[ERROR] Error response in login");
                error();
            }.bind(this))
            .request('/login', {
                method: 'POST'
            });

        return status;
    }

    register(data, success, error){
        let status = false;
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    error();
                    return;
                }
                success();
            }.bind(this))
            .addJson(data)
            .error(function (err) {
                console.log("[ERROR] Error response in register");
                error();
            }.bind(this))
            .request('/user', {
                method: 'PUT'
            });
        return status;
    }

    logout(success, error){
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    error();
                    return;
                }
                success();
            }.bind(this))
            .addJson(null)
            .error(function (err) {
                console.log("[ERROR] Error response in logout");
                error();
            })
            .request("/login", {
                method: 'DELETE'
            });
    }

    isAuth() {
        return this.isAuth;
    }
}

export default Auth;
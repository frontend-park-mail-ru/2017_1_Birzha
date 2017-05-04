/**
 * Created by algys on 13.04.17.
 */

import Request from './request'

class Auth{
    constructor(){
        this.logged = false;
    }

    getMe(){
        let user = null;
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                console.log(response);
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    this.logged = false;
                    return;
                }
                this.logged = true;
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
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    error();
                    return;
                }
                this.logged = true;
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


    checkAuth(success, error){
        let status = false;
        if(this.logged){
            success();
            return true;
        }
        new Request('http://'+conf.ip[conf.baseIP].host+':'+conf.ip[conf.baseIP].port+'/api')
            .addResponse(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    error();
                    return;
                }
                this.logged = true;
                success();
            }.bind(this))
            .addJson(null)
            .error(function (err) {
                console.log("[ERROR] Error response in login");
                error();
            }.bind(this))
            .request('/login', {
                method: 'GET'
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
                this.logged = false;
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
        return this.logged;
    }
}

export default Auth;
/**
 * Created by algys on 10.03.17.
 */
/*
 Example:

 myHeaders = new Headers({
 "Content-Type": "text/plain",
 "Content-Length": content.length.toString(),
 "X-Custom-Header": "ProcessThisImmediately",
 });

 fetch(myRequest)
 .then(function(response) {
 return response.blob();
 });

 .then(function(myBlob) {
 var objectURL = URL.createObjectURL(myBlob);
 myImage.src = objectURL;
 });

 */

'use strict';

const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

class Request {
    constructor(server) {
        this.server = server;
debugger;
        this.funcs = [function(response) {
            if(response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw new Error();
            }
        }];

        this.baseCatch = function (error) {
            console.log('[FAIL] ', error);
        };

        this.json = '{}';
    }

    addResponse(_func) {
        this.funcs.push(_func);
        return this;
    }

    addJson(_params)  {
        this.json = JSON.stringify(_params);
        return this;
    }

    error(_errorCallback) {
        this.baseCatch = _errorCallback;
        return this;
    }

    request(path, data) {
        data = data || {};
debugger;
        if(!(data['method'] && (data['method'] in ALLOWED_METHODS)))
            data['method'] = data['method'] || 'GET';

        data['headers'] = data['headers'] || {"Content-Type": "application/json"};
        data['credentials'] = 'same-origin';
        data['mode'] = data['mode'] || 'CORS';
        data['cache'] = data['cache'] || 'default';

        data['body'] = this.json;

        let fetchPromise = fetch(this.server + path, data);

        let me = this;
        this.funcs.map(function(el, index) {
            fetchPromise.then(el);
        });

        fetchPromise.catch(me.baseCatch); // TODO catch
    }
}

export default Request;
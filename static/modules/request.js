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

(function () {
    'use strict';

    const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

    class Request {
        constructor() {
            this.funcs = [function(response) {
                if(response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            }, function(response) {
                console.log(response);
                return response.json()
            }];

            this.baseCatch = function (error) {
                console.log('[FAIL] ', error);
            }
        }

        addResponse(func) {
            this.funcs.push(func);
            return this;
        }

        request(url, data) {
            data = data || {};

            if(!(data['method']) || data['method'] in ALLOWED_METHODS)
                data['method'] = data['method'] || 'GET';
            else
                alert`1`; // TODO Exception

            data['headers'] = data['headers'] || new Headers();
            data['mode'] = data['mode'] || 'CORS';
            data['cache'] = data['cache'] || 'default';

            let fetchPromise = fetch(url, data);
            this.funcs.map(function(el) {
                fetchPromise.then(el);
            });

            fetchPromise.catch(this.baseCatch);
        }
    }

    window.Request = Request;
})();

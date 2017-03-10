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

(function () {
    'use strict';

    const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

    class Request {
        constructor(server) {
            this.server = server;

            this.funcs = [function(response) {
                if(response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    throw new Error(response.statusText);
                }
            }, function(response) {
                return response.json()
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

            if(!(data['method'] && (data['method'] in ALLOWED_METHODS)))
                data['method'] = data['method'] || 'GET';

            data['headers'] = data['headers'] || {"Content-Type": "application/json"};
            data['mode'] = data['mode'] || 'CORS';
            data['cache'] = data['cache'] || 'default';

            data['body'] = this.json;

            let fetchPromise = fetch(this.server + path, data);

            let me = this;
            this.funcs.map(function(el) {
                fetchPromise.then(el).catch(me.baseCatch);
            });

        }
    }

    window.Request = Request;
})();
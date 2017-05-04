/**
 * Created by algys on 04.05.17.
 */

let load = function() {
    navigator.serviceWorker.register(
        '/app_cache.js'
    ).then(function (registration) {
        // при удачной регистрации имеем объект типа ServiceWorkerRegistration
        console.log('ServiceWorker registration', registration);
        // строкой ниже можно прекратить работу serviceWorker’а
        //registration.unregister();
    }).catch(function (err) {
        throw new Error('ServiceWorker error: ' + err);
    });
};

export default load;

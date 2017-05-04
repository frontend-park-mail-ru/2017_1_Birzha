self.addEventListener('activate', function(event) {
    console.log('activate', event);
});

const CACHE_NAME = 'app_serviceworker_v_1',
    cacheUrls = [
        '/',
        '/index.html',
        '/js/bootstrap.min.js',
        '/js/conf/dev.conf.json',
        '/css/bootstrap.min.css',
        '/css/cover.css',
        '/css/font-awesome.min.css',
        '/css/our.css',
        '/bin/bundle.js',
        '/lib/easeljs-0.8.2.min.js',
        '/lib/jquery.min.js',
        '/lib/preloadjs-0.6.2.min.js',
        '/lib/tweenjs-0.6.2.min.js',
        '/js/blocks/template/template.pug.js',
        '/img'
        ];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(cacheUrls);
        })
    );
});

self.addEventListener('fetch', function(event) {

    console.log('fetch', event);
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {

            if(navigator.onLine)
                return fetch(event.request);

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request);
        })
    );
});
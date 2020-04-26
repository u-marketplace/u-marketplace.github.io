'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "472f8b85164fc5257fbd6a5c4141f8a5",
"/": "472f8b85164fc5257fbd6a5c4141f8a5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/data/pattaroj_feed.json": "d4674f8986fb453ab3211760d2eeffcd",
"assets/data/fb_post1.json": "184ece2a29d93a29f347ea5c926eeb4c",
"assets/data/feed.json": "5769e05dcfd4f49a39dcfd7e72e02b62",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "f25af6b88241efccce5aa10a7ccb7355",
"assets/LICENSE": "0c912ffb1900c5b890c0bf8b4f96a506",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "626cb0feee69c1a3dc246de39c1aaeec",
"manifest.json": "c18258a517bf91171037b0779063504e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

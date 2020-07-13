'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e6f4f4f0e1578b6f2cb41319fe7249ed",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/LICENSE": "e37fc2a01e8deda65af7fd7be7d939d2",
"assets/NOTICES": "84c7f543ef849e5f844a7da4b8d29c88",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "62fa0ce72ddf9a22ac36d88cf9b28bfb",
"assets/quiz_data/agb.html": "1bd3521415595422fcce5253b40b1e0d",
"assets/quiz_data/agb.md": "cf82e5286364cf24c754d05e7ac0e9d0",
"assets/quiz_data/categories.json": "ef55c34f52d5eff833591128ad685e0b",
"assets/quiz_data/categories_old.json": "852e16f694b89016a0fd8acf5ccf5abe",
"assets/quiz_data/cephalosporine.json": "3aa682247edc3dfabc059f8196b5413b",
"assets/quiz_data/impressum.md": "8a1b2ad0485517b8f2500b344c76b0e0",
"assets/quiz_data/kokken.json": "9a264a84fc1f08469ac9f705c08f491f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a1d0dfa10ebbf8735c0fea63ac8184dd",
"/": "a1d0dfa10ebbf8735c0fea63ac8184dd",
"main.dart.js": "a24f748e4d1ee4b62f3a11bc4b5d4873",
"manifest.json": "551139266a6abca5d7aa7c4c16136804"
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

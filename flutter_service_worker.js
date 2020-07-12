'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/35/372801cc446c75e9af6ebeffdd586b5363d2d5": "ece2f1851b182a6514b1ffd763f18816",
".git/objects/2d/c02abbe90eefbc8cbc47ec8740a4f7afbc4a12": "b02d9ce34a152d188d3acce51bbc5726",
".git/objects/33/cee8865f326486c000799190441d44c9a084eb": "9bc97a24bd1ab08ffd539a1895a0730e",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/00/cf6a6ca645fb22211b680b9c7215eadbcae7b5": "ceb373fce70a25a8c25ddf9b9bad4959",
".git/objects/28/f546611d14fd4e2cb023ba5fa81c3f9b626ef0": "f19f8b679318fb6bd3e718ef2a2765c2",
".git/objects/0c/9c2c8c69c0f986058785ad5ef6baeb675fd0dd": "6945690785342f1613764c183d378bb9",
".git/objects/0c/826119aa90ecadcb469d71f457e5dd48a34406": "aefa4a142ccd3a59e30a495ca8e113db",
".git/objects/d8/dfff2c9c454ebd23eb87e89beffe1c7cfbd298": "173e7f267230c98a25d9a6cddf89f65a",
".git/objects/54/a6b4b83990d8f26207db7090ed5c4fc52e048c": "459221eae66416e6363b6b4e24c4acf1",
".git/objects/9e/1d69720646a6f9f694cd6350455081dc430aab": "d6f78aa20fbdce84a55f2002108fdd47",
".git/objects/9e/b2afc25d4f38c468f476641c3d026ad033e0e9": "3bfccda9e6ebf290a0bc88ebb6102ecf",
".git/objects/d4/e1a72f62029b896aed806fd8f3c307d3c5b741": "a245977344bc8869893b8c894d8634bc",
".git/objects/9d/8aa126fb4ee1dcfd13689269a518b27ed57a29": "229f4b4f5977c3cd59a89a9d9bddc971",
".git/objects/6a/6fe94fef2bd13277b87b10cf7323f00a1aca7a": "197154143f0a6140164beea66961f49a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ca/b8687d518e6824cc48fcf61a4675f0ebb95029": "2fa7d1203fe70c85a2da536d5060da16",
".git/objects/f5/8d6f9301ce702e4a30fea4a3532116c29d0a8f": "8e30816e6e58b9e02a4d7240f8f9f4ff",
".git/objects/f5/865a12f4b7609709740e282705e1836e8bd85b": "65522d4c72e22d3ae15732cec953da73",
".git/objects/60/d7f5458039eeb631b2c125ff2667992bb43a49": "1eba8168f93cafbc1febf650d84edfb5",
".git/objects/1f/2568274383b918976aea4305c369d9157ae47d": "8fd45549f237c55ba235f18e572f9148",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/3a/d2dce6c4e6f994cd3f0bbdfbe601ca369ab17a": "8a7e13635af43de3dda130d1a8071554",
".git/objects/23/ea4d0d4bfc58848d932d92c40c1fea170662ff": "aec439ab309ec805dfd4ff633082ed69",
".git/objects/99/689e8b6f53793b81646ba0387ff1d676170e32": "ce9c33bd65d8458e22820cedbdec53b1",
".git/objects/b9/036a57fdb18e1367137d7dc54447fb5f937253": "6c6dc8c4e324ce29d578195fb187e450",
".git/objects/0e/ed83f027d09abbadfe4478109f0497d5c4a4e1": "f90c8c1d7c42a60cd2e5dcc6d9fdd05b",
".git/objects/0e/c1ba86e28e5b4d39853f7d5faf062f63475327": "74cd920f92644e08f7869e2aa7b2fcc3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/eb/49aa390664cfda97043b5452f66eb5443ca501": "ed85a7b9eb623c8fefded5b332938274",
".git/objects/eb/2e2dbeabd0c56da0f49632de5db8386c3e5c79": "0de300fd96b5141d93f75010a269c4f8",
".git/objects/f6/dacafff68b561deeea9fa7aa135ffec14a38f8": "7b71814cf5be364f80c15a93528f00d8",
".git/objects/b6/15af88e6dd72d04bb1b2ef2f7a5b39631b3731": "538231a0dd81b107ca40732406176a4c",
".git/objects/d5/891d758b6875177bff8c4a09b239b483ca8337": "62b776781b6e860fec8ea24488d6f903",
".git/objects/ad/3ccfc2c826a48f3ecaef3a1173020d54d206aa": "ff66b17d1e2026520b21df4995b17372",
".git/objects/c5/c67d85899b72fff5d81cac8af428803146fc3b": "f20c4c649aa8eaca49bc32755a38183e",
".git/objects/22/48190782b0b1013cc3f0072d4e9c0b1aab4fff": "fe050749b1dc4e34c789d304fafdf638",
".git/objects/c9/7ca62d9575f153beb9bd3ed60a23af5fba3fa0": "bf9cc925e3ad672f258cc78c42b11c74",
".git/objects/c9/beab43f4788481e614665f587508f4728d6ef5": "73877aca1c49c954497d4b861b31f767",
".git/objects/5c/735fa4a9ae06d871a896b06364d9ee29a957e2": "6c54740f2faf120a20fe583f62981f8a",
".git/objects/fe/481ff167c977eafe203c655995c9ae6f6567d3": "47d83f5940ed107fdc2e7d0d9b81ce14",
".git/objects/83/1a1a6eb13b8681d28a8ce2daf3b8de4cfc0532": "e5b90b768f3121c7f3133ff7b2b526f8",
".git/objects/2e/127e0aafad3a4c51fbc1008178d7881a356b92": "b3fd9c9dd07abd037793dc34b0022ef5",
".git/objects/fb/e6f0e47bf67ccaf79644c574caf9414882173c": "30bf420d0737f9879fce02458c358db7",
".git/objects/40/a7a7aec6b8fb8da38d02f21ad9c19984de1782": "70e9eec2ffdbea11833c3a031d9284e4",
".git/objects/12/81f8c5e311f7d1c03f13a5c99947e2419afd1a": "bbd13b7ef3384af75597bddf476ecf25",
".git/objects/64/828072010ee82ee7554e857d24257a72714136": "b173c4dbb428f05f69aab7ce1b60fd24",
"assets/AssetManifest.json": "e6f4f4f0e1578b6f2cb41319fe7249ed",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/NOTICES": "d5d81435678c56ac81ca2ebbf6690df3",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "62fa0ce72ddf9a22ac36d88cf9b28bfb",
"assets/quiz_data/agb.html": "fbca0e921d8d99ed3a082dbaf9ec4b78",
"assets/quiz_data/agb.md": "7b7f5e72ccf550625c66ac9299c48b28",
"assets/quiz_data/categories.json": "d450f491c0e2b27eba01dd9d63557314",
"assets/quiz_data/categories_old.json": "2d7821c530077328d71dcd5976ff7d06",
"assets/quiz_data/cephalosporine.json": "b15c6833be1f1e4dce3b201189b2875f",
"assets/quiz_data/impressum.md": "d7b427870419fe053d875b0791dc87ff",
"assets/quiz_data/kokken.json": "70ee940e7423ff6351543f101d352ebf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "85fa1691d80d2c8fae87cb3a1db6271b",
"/": "85fa1691d80d2c8fae87cb3a1db6271b",
"main.dart.js": "5e854e8708297da873d0f4a6694e8845",
"manifest.json": "62153e63fe75294649a52f327e101bbe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}

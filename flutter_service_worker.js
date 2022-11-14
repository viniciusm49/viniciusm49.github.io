'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"viniciusm49.github.io/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"viniciusm49.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"viniciusm49.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"viniciusm49.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"viniciusm49.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"viniciusm49.github.io/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"viniciusm49.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"viniciusm49.github.io/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"viniciusm49.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"viniciusm49.github.io/.git/config": "e768a99d0a1bf5d523b69490713eae6e",
"viniciusm49.github.io/.git/index": "98f761546222032ac0ff04a1524f9f84",
"viniciusm49.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"viniciusm49.github.io/.git/packed-refs": "af2ff8ce35dda022d47d6dac7b91f747",
"viniciusm49.github.io/.git/FETCH_HEAD": "f64facb0e5d39272274026489a8f3a4d",
"viniciusm49.github.io/.git/logs/refs/remotes/origin/main": "d2ac65da4720e7fcf8a0dc948eab4603",
"viniciusm49.github.io/.git/logs/refs/remotes/origin/HEAD": "894a06b91fdc1700447b4fd98ab67869",
"viniciusm49.github.io/.git/logs/refs/heads/main": "c9bde651fdb3ffaeefd0707f380f701a",
"viniciusm49.github.io/.git/logs/HEAD": "c9bde651fdb3ffaeefd0707f380f701a",
"viniciusm49.github.io/.git/objects/9a/b881bcad7eacbb0f233eefe1bec39ce54ba0b7": "3b379b02bdb94e3f716fd3066163af45",
"viniciusm49.github.io/.git/objects/ba/07599df89254c0acff0d73b18e7b82db404795": "b4e277772f0824ee668807c384d55381",
"viniciusm49.github.io/.git/objects/5b/eb04603e36c7b0930600ed25fb00ae5dc50e34": "fcb40ec53c39066d23999a7aa4344e2a",
"viniciusm49.github.io/.git/objects/23/8ff4d9f0edb371eb0b2c1b3e149f31828ffd73": "ec07a29cd99b8bee9cc3279d16773900",
"viniciusm49.github.io/.git/objects/b3/c7d1c8abd2eafe3fe8d5857486c6bae5237db6": "3c3a8881202c261e03a7976e61480091",
"viniciusm49.github.io/.git/objects/b9/a819f67325e1cd350136f057a8e4ded4e585cc": "05588e255d94ec731312f7344b9ed9b4",
"viniciusm49.github.io/.git/objects/45/39714053030b26488bd2457e7deac9c4d95149": "a8aaccc98fb10e38a936826c157ebb16",
"viniciusm49.github.io/.git/objects/be/9ac7b000844a3bda4e522feeb05e042e83fec8": "97fa12b0410668f75da2863da69bf001",
"viniciusm49.github.io/.git/objects/77/00d6229e294a5bed15136dc7e98d2dbfeb13ff": "61ae80944b61c4f04069a997e6d6619c",
"viniciusm49.github.io/.git/objects/eb/183d872069670e9d8336bbd5a82ddd14125fbf": "498529ab46b9e29d96e99b59a504b1a2",
"viniciusm49.github.io/.git/objects/pack/pack-9775d540c908b263bc23ec2505c0f737802f97fd.idx": "6b6ad140d3816f2bc76d7c0f37025b2a",
"viniciusm49.github.io/.git/objects/pack/pack-9775d540c908b263bc23ec2505c0f737802f97fd.pack": "c8c0025ad583de173029d320de7d7467",
"viniciusm49.github.io/.git/COMMIT_EDITMSG": "1a8cb7aab2b7400be7ce8005ba3e91dd",
"viniciusm49.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"viniciusm49.github.io/.git/refs/remotes/origin/main": "937ef4929151972844aa824b5501eeec",
"viniciusm49.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"viniciusm49.github.io/.git/refs/heads/main": "937ef4929151972844aa824b5501eeec",
"viniciusm49.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"viniciusm49.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"viniciusm49.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"viniciusm49.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"viniciusm49.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"viniciusm49.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"viniciusm49.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"viniciusm49.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"viniciusm49.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"viniciusm49.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"viniciusm49.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"viniciusm49.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"viniciusm49.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"viniciusm49.github.io/.git/ORIG_HEAD": "937ef4929151972844aa824b5501eeec",
"viniciusm49.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"viniciusm49.github.io/manifest.json": "d57ac3b272d98353d80be0526789cee0",
"viniciusm49.github.io/index.html": "2cd100fc63a78ebeec094ea7994c9ca5",
"/": "22dde25de14db82c78d222766a63b24a",
"viniciusm49.github.io/main.dart.js": "01ac22d888b5e5d15cbeedf90b116e1d",
"viniciusm49.github.io/assets/shaders/ink_sparkle.frag": "a0384287ec9952e6b296fd0f7ad6fb1d",
"viniciusm49.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"viniciusm49.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"viniciusm49.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"viniciusm49.github.io/assets/AssetManifest.json": "b2dadffb9a4c01edd14e4f7d9fdc3c36",
"viniciusm49.github.io/assets/assets/images/imagelogin.png": "05f4749543775a36157e2d4a05b8fdd8",
"viniciusm49.github.io/assets/NOTICES": "d5b518456effc0e6e153862ae296fb53",
"viniciusm49.github.io/version.json": "bcb65b4d2b32741c9562f1d412992f64",
"viniciusm49.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "d57ac3b272d98353d80be0526789cee0",
"index.html": "22dde25de14db82c78d222766a63b24a",
"main.dart.js": "b04bec7878de81dae69bd5bf1010be40",
"assets/shaders/ink_sparkle.frag": "a0384287ec9952e6b296fd0f7ad6fb1d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "b2dadffb9a4c01edd14e4f7d9fdc3c36",
"assets/assets/images/imagelogin.png": "05f4749543775a36157e2d4a05b8fdd8",
"assets/NOTICES": "d5b518456effc0e6e153862ae296fb53",
"version.json": "bcb65b4d2b32741c9562f1d412992f64",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

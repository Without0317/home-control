const CACHE_NAME = "home-control-v2";
const APP_SHELL = ["index.html", "styles.css", "script.js", "manifest.json"];

// Runs once, when the service worker first installs — cache the app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

// Runs on every fetch the page makes
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only intercept requests to OUR OWN files (same origin).
  // Anything going to your worker (a different origin) passes straight through —
  // we never want to cache a live on/off toggle.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});

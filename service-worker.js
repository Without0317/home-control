const CACHE_NAME = "home-control-v2"; // bump this each deploy
const APP_SHELL = ["index.html", "styles.css", "script.js", "manifest.json"];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // don't wait for old tabs to close — activate right away
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME) // delete old cache versions
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // take control of open pages immediately, no reload needed
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});

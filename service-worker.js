self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pinkapp-cache").then(cache => cache.addAll([
      "/", "/index.html", "/manifest.json",
      "https://www.shutterstock.com/image-vector/initial-logo-letter-rc-heart-260nw-695607019.jpg", "https://www.shutterstock.com/image-vector/initial-logo-letter-rc-heart-260nw-695607019.jpg"
    ]))
  );
  console.log("Service Worker Installed ✅");
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});


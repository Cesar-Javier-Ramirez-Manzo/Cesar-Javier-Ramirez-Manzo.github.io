;
const CACHE_NAME='carrusel_cache',
urlToCache=[
    './',
    './carousel.js',
    './carousel.css',
    './1.png',
    './2.png',
    './3.png',
    './4.png',
    './5.png',
    './square.png',
    './star.png',
    './jquery-3.4.1.min.js',
    'https://unpkg.com/purecss@1.0.1/build/pure-min.css'


]

self.addEventListener('install',e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>{
        return cache.addAll(urlToCache)
        .then(()=>self.skipWaiting())
    })

)
})
self.addEventListener('activate',e=>{
  const cacheWhite=[CACHE_NAME]
  
  e.waitUntil(
      caches.keys()
      .then(cachesNames=>{
          cachesNames.map(cacheName=>{
              if(cacheWhite.indexOf(cacheName)===-1){
                  return caches.delete(cacheName)
              }
          })
      })
      .then(()=>self.clients.claim())
  )
})
self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(function(res) {
            return res || fetch(e.request).then(function(response) {
              return caches.open('carrusel_cache').then(function(cache) {
                cache.put(e.request, response.clone());
                return response;})
              })
  }))})

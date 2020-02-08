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
    './star.png'
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
        .then(res=>{
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})
//codice per rendere tutto offline!

self.addEventListener('install', e => {
   console.log('PWA Service Worker installing.');
   let timeStamp = Date.now();
   e.waitUntil(
   caches.open('evemilano_service_worker').then(cache => {
     return cache.addAll([
      '/',
      '/index.html',
      '/images/icon-192x192.png',
      '/images/icon-512x512.png',
      '/images/intro_atl.jpg',
      '/alimentazione.html',
      '/cronometro.html',
      '/gallery.html',
      '/potenziamento.html',
      '/timer.html',
      '/parziali.html',
      '/calcolatore_universale.html',
      '/ritmo_al_km.html',
      '/sec_ogni100m.html',
      '/streching.html',
      '/timer-sound.mp3',
      '/pdf/LO STRETCHING.pdf',
      '/pdf/Manuale_Stretching.pdf',
      '/images/gallery/WhatsApp Image 2023-08-14 at 17.11.36.jpeg',
      '/images/gallery/WhatsApp Image 2023-08-14 at 17.12.53.jpeg',
      '/manifest.json',
      '/serviceworker.js'
     ])
     .then(() => self.skipWaiting());
   })
 )
});

self.addEventListener('activate',  event => {
 console.log('PWA Service Worker activating.');  
 event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
 event.respondWith(
   caches.match(event.request).then(response => {
     return response || fetch(event.request);
   })
   
 );
});
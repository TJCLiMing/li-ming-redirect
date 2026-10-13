// 舊網址專用：把以前「加到主畫面」時裝在手機裡的活動快報快取清掉。
// 手機會定期回來檢查 sw.js 有沒有更新，拿到這一版就會自己移除舊的快取，
// 之後打開舊網址一律走網路，看到的就是「換新網址了」那一頁
self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
  );
});

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-74b3e3dba48b4679680a.js"
  },
  {
    "url": "app-93094d5c545a8dcca70d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d0be84e9e956226eea9b.js"
  },
  {
    "url": "index.html",
    "revision": "b6ee81abdda2d703432b5a77e5834261"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a4f3dcf571cf7c7095b2fbaa1cfe2a07"
  },
  {
    "url": "1.204b8b47ff05841973ed.css"
  },
  {
    "url": "0.0a5fc6e8b7d32115cec9.css"
  },
  {
    "url": "component---src-pages-index-js-01faf602a5bee10a1e27.js"
  },
  {
    "url": "1-e8d4d880b1f45fc6fec2.js"
  },
  {
    "url": "2-5e40d67d35cfb4b68c46.js"
  },
  {
    "url": "0-edde5c3c72cf34466a0a.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-d3240b1f76e1a07a6831.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/bandit-pouch/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});
if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"194ac7767c5632780cbec343d47030d3"},{url:"/_next/static/chunks/116-255ffec83f06fc86.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/23-6de92bf77c16c86b.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/580-f67138ce08e46609.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/app/_not-found/page-1fe41d8df168b155.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/app/layout-45c9ce359842aaa3.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/app/page-9e3c44ae1a08b157.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/main-176a2a53658192b6.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/main-app-bd7da7ba4a80525a.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-3c673fd9c0e68e56.js",revision:"tnBUNs8zdZ_o_UE47fm-x"},{url:"/_next/static/css/e91b8f1c22b1059a.css",revision:"e91b8f1c22b1059a"},{url:"/_next/static/tnBUNs8zdZ_o_UE47fm-x/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/tnBUNs8zdZ_o_UE47fm-x/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/firebase-messaging-sw.js",revision:"caf710f675c807276dfc52579adfcf8c"},{url:"/icon-192x192.png",revision:"752da93dfe672d3b7c80ef5df96a9503"},{url:"/icon-256x256.png",revision:"15b4d7ef03f89fddefd14f45b7736124"},{url:"/icon-384x384.png",revision:"dcc2c4725ab47728e2f498c031c0e462"},{url:"/icon-512x512.png",revision:"485905ef4e7098e25e5605032e0906cc"},{url:"/manifest.webmanifest",revision:"a17d2a31510538dd328c8cdd8fc1fca4"},{url:"/manifest.zip",revision:"9ec95d1f61da8ce5ae473ea5ac1b5edc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
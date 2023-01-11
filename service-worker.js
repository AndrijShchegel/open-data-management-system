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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "38538148350069e5815edfe88bb80610"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.db242aa1.css",
    "revision": "98c8e34c6a71690caef5b6522df0e4ec"
  },
  {
    "url": "assets/img/delete_check.36de4178.png",
    "revision": "36de4178c8a348b08eb8ac9a2224f307"
  },
  {
    "url": "assets/img/delete_form_3.47b46de5.png",
    "revision": "47b46de5ca411662a68495cd9881c5fb"
  },
  {
    "url": "assets/img/get_db_by_id.4e59c6fc.png",
    "revision": "4e59c6fc14180f69d4cdbe7fcfafd6c8"
  },
  {
    "url": "assets/img/get_db.19b840de.png",
    "revision": "19b840deedf841cd4c0bd89dac03d949"
  },
  {
    "url": "assets/img/post_check.a6dbc330.png",
    "revision": "a6dbc330cd71d0449540d16f084a7961"
  },
  {
    "url": "assets/img/post_form_3.98082dd4.png",
    "revision": "98082dd4d9d9cb258860fbb69660c50a"
  },
  {
    "url": "assets/img/put_check.1a2b8cb9.png",
    "revision": "1a2b8cb9cc6cb6e3216050561187e1e7"
  },
  {
    "url": "assets/img/put_form_3.2e5a256e.png",
    "revision": "2e5a256e15586b2ee3565c6c642f5cee"
  },
  {
    "url": "assets/img/relation_model.8c8f8c61.png",
    "revision": "8c8f8c615cc8e05d5dd32635f7650194"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0512b073.js",
    "revision": "649dd6364891694f0dffcfc5a845cfd2"
  },
  {
    "url": "assets/js/11.186d8324.js",
    "revision": "b1890e423aa3d6c4ff93d936c438a8ce"
  },
  {
    "url": "assets/js/12.0c55e72b.js",
    "revision": "d3500836ee43e8a405ba3d82641facbc"
  },
  {
    "url": "assets/js/13.4572e006.js",
    "revision": "ac1b9de121ce2e2961fe631eb30f6315"
  },
  {
    "url": "assets/js/14.5773695b.js",
    "revision": "b8d8baf35ea833eafeab4066e7bd90c6"
  },
  {
    "url": "assets/js/15.ac5c29ce.js",
    "revision": "b0596a20295ef1f4b943a5bbb9ca4c7c"
  },
  {
    "url": "assets/js/16.f8aa4630.js",
    "revision": "6eeeb6f2c8e31d273ed9a974ab509f65"
  },
  {
    "url": "assets/js/17.f5d8dc8e.js",
    "revision": "e01a884c4b0ef06e81dd4a450e9e8121"
  },
  {
    "url": "assets/js/18.7d617235.js",
    "revision": "2b45c11bdec2782bc92799cc724197fe"
  },
  {
    "url": "assets/js/19.db9b7644.js",
    "revision": "043e73013418cc63eb3b5e9f640e8678"
  },
  {
    "url": "assets/js/2.71ffea36.js",
    "revision": "8059a81a9fc557e43b277c3248c45989"
  },
  {
    "url": "assets/js/20.42132593.js",
    "revision": "7892ddcf60c84b0198130ac4521cb40d"
  },
  {
    "url": "assets/js/21.6f6ea1a2.js",
    "revision": "d2bb5055f286c4fa22e8521c9733521f"
  },
  {
    "url": "assets/js/22.f3916a21.js",
    "revision": "38ed22586590d931065c0280c8df5d0d"
  },
  {
    "url": "assets/js/23.86bfbaec.js",
    "revision": "a59469d9accb69198f2ee6dc87ad86e0"
  },
  {
    "url": "assets/js/24.ff37c33d.js",
    "revision": "11c25ef5194b98d12a6a2c2e94bac48b"
  },
  {
    "url": "assets/js/26.68347950.js",
    "revision": "ab3c9dfaf0a99545a37403e18ea42714"
  },
  {
    "url": "assets/js/3.5b49c113.js",
    "revision": "b31244da5633e872c7ced9c6b84c2f0b"
  },
  {
    "url": "assets/js/4.1f1fb657.js",
    "revision": "c500077bf56854cd9c126a0d94eb754e"
  },
  {
    "url": "assets/js/5.a06079d5.js",
    "revision": "89bd01e99131468e52f19047571961c6"
  },
  {
    "url": "assets/js/6.fcf6e675.js",
    "revision": "0ebaaf686983b6d1cf74bb6aaa7fe692"
  },
  {
    "url": "assets/js/7.cb3072ac.js",
    "revision": "e8bb717c20e555165443cce7cb5e18b4"
  },
  {
    "url": "assets/js/8.2a61fb95.js",
    "revision": "1bf6b63b64d59b3d3f6fd56cd0fe6a24"
  },
  {
    "url": "assets/js/9.46dd1aad.js",
    "revision": "faa3fd9a85db9e4135d30cfddafb64f4"
  },
  {
    "url": "assets/js/app.cd818c44.js",
    "revision": "1128f50d3b00895748c7795332a34756"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8cc7696f7decb006f36deebe6173258a"
  },
  {
    "url": "design/index.html",
    "revision": "25996ca3597eae0f3eac683708309b97"
  },
  {
    "url": "index.html",
    "revision": "d119cd2218aa3aaf64be83d02ba63892"
  },
  {
    "url": "intro/index.html",
    "revision": "8416c8df4112128370c16b8f1feeaf38"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "df3850301c53715ef096a1e105c7ad1b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6315c8587ea5a00b9d110a87ac616378"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4db535bbae3631b5c97c26d3a5c30096"
  },
  {
    "url": "software/index.html",
    "revision": "8f4993d067eefe172a19335f5ef7b1c6"
  },
  {
    "url": "test/index.html",
    "revision": "8df2871761c1f669f03e148d3aa5872a"
  },
  {
    "url": "use cases/index.html",
    "revision": "a61c9db3ebe4ebebde7109de1ec04ae5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

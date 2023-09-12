if (!self.define) {
  let s,
    e = {};
  const l = (l, i) => (
    (l = new URL(l + ".js", i).href),
    e[l] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = l), (s.onload = e), document.head.appendChild(s);
        } else (s = l), importScripts(l), e();
      }).then(() => {
        let s = e[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, n) => {
    const r =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[r]) return;
    let u = {};
    const a = (s) => l(s, r),
      t = { module: { uri: r }, exports: u, require: a };
    e[r] = Promise.all(i.map((s) => t[s] || a(s))).then((s) => (n(...s), u));
  };
}
define(["./workbox-56a10583"], function (s) {
  "use strict";
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: "assets/css/403-ebe41fd0.css", revision: null },
        { url: "assets/css/404-ed819e4f.css", revision: null },
        { url: "assets/css/500-6bbf4b05.css", revision: null },
        { url: "assets/css/AgeRatioChart-78c8d013.css", revision: null },
        { url: "assets/css/AnnualUseChart-c411daab.css", revision: null },
        { url: "assets/css/chinaMapChart-4e132df8.css", revision: null },
        { url: "assets/css/curve-72b88bca.css", revision: null },
        { url: "assets/css/HotPlateChart-2c285cc7.css", revision: null },
        { url: "assets/css/Imgs-987f0f32.css", revision: null },
        { url: "assets/css/index-0cada5f4.css", revision: null },
        { url: "assets/css/index-13c6ef7c.css", revision: null },
        { url: "assets/css/index-2b96bc17.css", revision: null },
        { url: "assets/css/index-2bb05b91.css", revision: null },
        { url: "assets/css/index-2ea9aa7b.css", revision: null },
        { url: "assets/css/index-325e658f.css", revision: null },
        { url: "assets/css/index-3ecff29b.css", revision: null },
        { url: "assets/css/index-4be29df9.css", revision: null },
        { url: "assets/css/index-5328b5da.css", revision: null },
        { url: "assets/css/index-5343eece.css", revision: null },
        { url: "assets/css/index-5f7c71bc.css", revision: null },
        { url: "assets/css/index-65bf845a.css", revision: null },
        { url: "assets/css/index-6ec6fab1.css", revision: null },
        { url: "assets/css/index-7904659f.css", revision: null },
        { url: "assets/css/index-82034543.css", revision: null },
        { url: "assets/css/index-84f2cf41.css", revision: null },
        { url: "assets/css/index-860b04ab.css", revision: null },
        { url: "assets/css/index-8cc01938.css", revision: null },
        { url: "assets/css/index-9b813e4f.css", revision: null },
        { url: "assets/css/index-a562d85e.css", revision: null },
        { url: "assets/css/index-b327db1b.css", revision: null },
        { url: "assets/css/index-c136a144.css", revision: null },
        { url: "assets/css/index-db794c81.css", revision: null },
        { url: "assets/css/index-e3b0c442.css", revision: null },
        { url: "assets/css/index-e954b9a2.css", revision: null },
        { url: "assets/css/index-f0ed6ce8.css", revision: null },
        { url: "assets/css/index-f4d4a8e6.css", revision: null },
        { url: "assets/css/index-fdde9950.css", revision: null },
        { url: "assets/css/LoginForm-0ea28993.css", revision: null },
        { url: "assets/css/MaleFemaleRatioChart-42e73dbe.css", revision: null },
        { url: "assets/css/OverNext30Chart-013dbf5c.css", revision: null },
        { url: "assets/css/pie-46b74185.css", revision: null },
        { url: "assets/css/PlatformSourceChart-31f12883.css", revision: null },
        { url: "assets/css/RealTimeAccessChart-f97f8d9f.css", revision: null },
        {
          url: "assets/js/plugin-vue_export-helper-c27b6911.js",
          revision: null,
        },
        { url: "assets/js/403-36e03f24.js", revision: null },
        { url: "assets/js/404-7509713d.js", revision: null },
        { url: "assets/js/500-e4ee48ac.js", revision: null },
        { url: "assets/js/AgeRatioChart-4b72deb0.js", revision: null },
        { url: "assets/js/AnnualUseChart-89e7b0a5.js", revision: null },
        { url: "assets/js/api-97f196df.js", revision: null },
        { url: "assets/js/chinaMapChart-4623f9cf.js", revision: null },
        { url: "assets/js/curve-399669b2.js", revision: null },
        { url: "assets/js/detail-43812122.js", revision: null },
        { url: "assets/js/detail-82e80c56.js", revision: null },
        { url: "assets/js/detail-e8ab5364.js", revision: null },
        { url: "assets/js/HotPlateChart-45f38bb6.js", revision: null },
        { url: "assets/js/Imgs-1b983a69.js", revision: null },
        { url: "assets/js/index-0275a767.js", revision: null },
        { url: "assets/js/index-0464506a.js", revision: null },
        { url: "assets/js/index-0906df41.js", revision: null },
        { url: "assets/js/index-13241a98.js", revision: null },
        { url: "assets/js/index-1571623e.js", revision: null },
        { url: "assets/js/index-160d41b7.js", revision: null },
        { url: "assets/js/index-192b4f28.js", revision: null },
        { url: "assets/js/index-1a675639.js", revision: null },
        { url: "assets/js/index-1e9437e5.js", revision: null },
        { url: "assets/js/index-2306a5d1.js", revision: null },
        { url: "assets/js/index-27b96d04.js", revision: null },
        { url: "assets/js/index-28854ae7.js", revision: null },
        { url: "assets/js/index-2d9a490e.js", revision: null },
        { url: "assets/js/index-30059cee.js", revision: null },
        { url: "assets/js/index-37e2b861.js", revision: null },
        { url: "assets/js/index-3914e930.js", revision: null },
        { url: "assets/js/index-3ead4e90.js", revision: null },
        { url: "assets/js/index-4dee5faf.js", revision: null },
        { url: "assets/js/index-4efbfec0.js", revision: null },
        { url: "assets/js/index-5c70e7c5.js", revision: null },
        { url: "assets/js/index-5dbed180.js", revision: null },
        { url: "assets/js/index-5dd3dc30.js", revision: null },
        { url: "assets/js/index-5e4f9c5a.js", revision: null },
        { url: "assets/js/index-62452f76.js", revision: null },
        { url: "assets/js/index-6396242d.js", revision: null },
        { url: "assets/js/index-6453aae0.js", revision: null },
        { url: "assets/js/index-6d941592.js", revision: null },
        { url: "assets/js/index-6ec45b55.js", revision: null },
        { url: "assets/js/index-6f3acdf3.js", revision: null },
        { url: "assets/js/index-7016d24b.js", revision: null },
        { url: "assets/js/index-75a8566f.js", revision: null },
        { url: "assets/js/index-7cb668e8.js", revision: null },
        { url: "assets/js/index-84bb8e38.js", revision: null },
        { url: "assets/js/index-8a7219f5.js", revision: null },
        { url: "assets/js/index-8ae64b6d.js", revision: null },
        { url: "assets/js/index-8b644984.js", revision: null },
        { url: "assets/js/index-95fd03fe.js", revision: null },
        { url: "assets/js/index-98e4116c.js", revision: null },
        { url: "assets/js/index-990c4c03.js", revision: null },
        { url: "assets/js/index-9acd2231.js", revision: null },
        { url: "assets/js/index-9eeaec3e.js", revision: null },
        { url: "assets/js/index-a2be6d20.js", revision: null },
        { url: "assets/js/index-a596873e.js", revision: null },
        { url: "assets/js/index-aadcd5bf.js", revision: null },
        { url: "assets/js/index-b07040b9.js", revision: null },
        { url: "assets/js/index-b7c190e9.js", revision: null },
        { url: "assets/js/index-bc57ca24.js", revision: null },
        { url: "assets/js/index-bca189fd.js", revision: null },
        { url: "assets/js/index-c311aa20.js", revision: null },
        { url: "assets/js/index-ceab37cf.js", revision: null },
        { url: "assets/js/index-d0f31cf5.js", revision: null },
        { url: "assets/js/index-d71c3c6d.js", revision: null },
        { url: "assets/js/index-da743ae6.js", revision: null },
        { url: "assets/js/index-dc980d51.js", revision: null },
        { url: "assets/js/index-de7b25b5.js", revision: null },
        { url: "assets/js/index-eac9577e.js", revision: null },
        { url: "assets/js/index-efa853dd.js", revision: null },
        { url: "assets/js/index-f35182e0.js", revision: null },
        { url: "assets/js/index-f6f22e06.js", revision: null },
        { url: "assets/js/index-fc5fe6c6.js", revision: null },
        { url: "assets/js/index-fdef0bf3.js", revision: null },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-b807f3e9.js",
          revision: null,
        },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-c9a4df84.js",
          revision: null,
        },
        { url: "assets/js/liquidFillView-2acfc97b.js", revision: null },
        { url: "assets/js/LoginForm-ee3cc420.js", revision: null },
        { url: "assets/js/MaleFemaleRatioChart-89008ed3.js", revision: null },
        { url: "assets/js/notData-2dc2117c.js", revision: null },
        { url: "assets/js/OverNext30Chart-871d7121.js", revision: null },
        { url: "assets/js/pie-ea6ee39c.js", revision: null },
        { url: "assets/js/PlatformSourceChart-e662c8c0.js", revision: null },
        { url: "assets/js/RealTimeAccessChart-a9f68e64.js", revision: null },
        { url: "assets/js/tabs-8104ccee.js", revision: null },
        { url: "assets/js/upload-93b1c4f7.js", revision: null },
        { url: "assets/js/useAuthButtons-99873636.js", revision: null },
        { url: "assets/js/useEcharts-f88838f6.js", revision: null },
        { url: "assets/js/useHandleData-1b8d034c.js", revision: null },
        { url: "assets/js/user-441ad02a.js", revision: null },
        { url: "assets/js/UserDrawer-8f05c94a.js", revision: null },
        {
          url: "assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-d95ad7f2.js",
          revision: null,
        },
        { url: "index.html", revision: "0121d76e4db2427e31b2b2836b2be5c9" },
        { url: "registerSW.js", revision: "a3b5c9761045c9646e0fac54c9c48d65" },
        { url: "logo.png", revision: "41ac6692fd55101147fb80ca34e72455" },
        {
          url: "manifest.webmanifest",
          revision: "b1c8a59bb9009324f51225cad8bf6684",
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))
    );
});

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
        { url: "assets/css/index-3ecff29b.css", revision: null },
        { url: "assets/css/index-5328b5da.css", revision: null },
        { url: "assets/css/index-5343eece.css", revision: null },
        { url: "assets/css/index-5f7c71bc.css", revision: null },
        { url: "assets/css/index-65bf845a.css", revision: null },
        { url: "assets/css/index-6ec6fab1.css", revision: null },
        { url: "assets/css/index-7904659f.css", revision: null },
        { url: "assets/css/index-7bb75717.css", revision: null },
        { url: "assets/css/index-82034543.css", revision: null },
        { url: "assets/css/index-860b04ab.css", revision: null },
        { url: "assets/css/index-8cc01938.css", revision: null },
        { url: "assets/css/index-9b813e4f.css", revision: null },
        { url: "assets/css/index-b327db1b.css", revision: null },
        { url: "assets/css/index-bbf35135.css", revision: null },
        { url: "assets/css/index-c136a144.css", revision: null },
        { url: "assets/css/index-db794c81.css", revision: null },
        { url: "assets/css/index-e3b0c442.css", revision: null },
        { url: "assets/css/index-e954b9a2.css", revision: null },
        { url: "assets/css/index-f0ed6ce8.css", revision: null },
        { url: "assets/css/index-f4584485.css", revision: null },
        { url: "assets/css/index-f4d4a8e6.css", revision: null },
        { url: "assets/css/index-fddbdfba.css", revision: null },
        { url: "assets/css/index-fdde9950.css", revision: null },
        { url: "assets/css/LoginForm-d0581fe7.css", revision: null },
        { url: "assets/css/MaleFemaleRatioChart-42e73dbe.css", revision: null },
        { url: "assets/css/OverNext30Chart-013dbf5c.css", revision: null },
        { url: "assets/css/pie-46b74185.css", revision: null },
        { url: "assets/css/PlatformSourceChart-31f12883.css", revision: null },
        { url: "assets/css/RealTimeAccessChart-f97f8d9f.css", revision: null },
        {
          url: "assets/js/plugin-vue_export-helper-c27b6911.js",
          revision: null,
        },
        { url: "assets/js/403-d8666c68.js", revision: null },
        { url: "assets/js/404-820f2709.js", revision: null },
        { url: "assets/js/500-6da86fc9.js", revision: null },
        { url: "assets/js/AgeRatioChart-c9120d42.js", revision: null },
        { url: "assets/js/AnnualUseChart-2c68c951.js", revision: null },
        { url: "assets/js/api-97f196df.js", revision: null },
        { url: "assets/js/chinaMapChart-d42a3c49.js", revision: null },
        { url: "assets/js/curve-297078ed.js", revision: null },
        { url: "assets/js/detail-0be13c7a.js", revision: null },
        { url: "assets/js/detail-b12f6514.js", revision: null },
        { url: "assets/js/detail-ce74428a.js", revision: null },
        { url: "assets/js/HotPlateChart-79a36eea.js", revision: null },
        { url: "assets/js/Imgs-9fad1070.js", revision: null },
        { url: "assets/js/index-01f5abb5.js", revision: null },
        { url: "assets/js/index-0275a767.js", revision: null },
        { url: "assets/js/index-03a25c58.js", revision: null },
        { url: "assets/js/index-0fed3448.js", revision: null },
        { url: "assets/js/index-1049ca12.js", revision: null },
        { url: "assets/js/index-1299f32f.js", revision: null },
        { url: "assets/js/index-142946ef.js", revision: null },
        { url: "assets/js/index-1d4a9ae4.js", revision: null },
        { url: "assets/js/index-24d04794.js", revision: null },
        { url: "assets/js/index-2ca53fc6.js", revision: null },
        { url: "assets/js/index-333449c6.js", revision: null },
        { url: "assets/js/index-3450d932.js", revision: null },
        { url: "assets/js/index-3804e656.js", revision: null },
        { url: "assets/js/index-392086d3.js", revision: null },
        { url: "assets/js/index-3e164971.js", revision: null },
        { url: "assets/js/index-4c367f97.js", revision: null },
        { url: "assets/js/index-4db41042.js", revision: null },
        { url: "assets/js/index-4f32071e.js", revision: null },
        { url: "assets/js/index-53987e67.js", revision: null },
        { url: "assets/js/index-564e9e82.js", revision: null },
        { url: "assets/js/index-5b8fe5fe.js", revision: null },
        { url: "assets/js/index-619633be.js", revision: null },
        { url: "assets/js/index-62ae487d.js", revision: null },
        { url: "assets/js/index-679524fe.js", revision: null },
        { url: "assets/js/index-6b439207.js", revision: null },
        { url: "assets/js/index-6bbab0ed.js", revision: null },
        { url: "assets/js/index-6f6f76a1.js", revision: null },
        { url: "assets/js/index-715e709a.js", revision: null },
        { url: "assets/js/index-71f705ec.js", revision: null },
        { url: "assets/js/index-729ea92f.js", revision: null },
        { url: "assets/js/index-73097bdf.js", revision: null },
        { url: "assets/js/index-751a3174.js", revision: null },
        { url: "assets/js/index-764cbb09.js", revision: null },
        { url: "assets/js/index-784717c0.js", revision: null },
        { url: "assets/js/index-793d2a06.js", revision: null },
        { url: "assets/js/index-7b76185a.js", revision: null },
        { url: "assets/js/index-82051dfd.js", revision: null },
        { url: "assets/js/index-8a054431.js", revision: null },
        { url: "assets/js/index-8ad7bd56.js", revision: null },
        { url: "assets/js/index-910e40a8.js", revision: null },
        { url: "assets/js/index-92a20821.js", revision: null },
        { url: "assets/js/index-9bdd92b2.js", revision: null },
        { url: "assets/js/index-9cfe13a5.js", revision: null },
        { url: "assets/js/index-a6c91181.js", revision: null },
        { url: "assets/js/index-aa88fec3.js", revision: null },
        { url: "assets/js/index-b023903d.js", revision: null },
        { url: "assets/js/index-b5ed9c0e.js", revision: null },
        { url: "assets/js/index-c247e258.js", revision: null },
        { url: "assets/js/index-c385a9ef.js", revision: null },
        { url: "assets/js/index-cab9660c.js", revision: null },
        { url: "assets/js/index-cd99b0c4.js", revision: null },
        { url: "assets/js/index-cf2d0eed.js", revision: null },
        { url: "assets/js/index-d284faae.js", revision: null },
        { url: "assets/js/index-d89b9d4c.js", revision: null },
        { url: "assets/js/index-e30c8970.js", revision: null },
        { url: "assets/js/index-e8fbc69c.js", revision: null },
        { url: "assets/js/index-e93b0139.js", revision: null },
        { url: "assets/js/index-ed338b50.js", revision: null },
        { url: "assets/js/index-ed82d003.js", revision: null },
        { url: "assets/js/index-f0e875ad.js", revision: null },
        { url: "assets/js/index-fb079ea3.js", revision: null },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-a45d12b9.js",
          revision: null,
        },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-34b3f00a.js",
          revision: null,
        },
        { url: "assets/js/liquidFillView-2acfc97b.js", revision: null },
        { url: "assets/js/LoginForm-e1b89461.js", revision: null },
        { url: "assets/js/MaleFemaleRatioChart-e4c9a1b3.js", revision: null },
        { url: "assets/js/notData-2dc2117c.js", revision: null },
        { url: "assets/js/OverNext30Chart-32712388.js", revision: null },
        { url: "assets/js/pie-c1308a7d.js", revision: null },
        { url: "assets/js/PlatformSourceChart-04c12fb8.js", revision: null },
        { url: "assets/js/RealTimeAccessChart-89815de6.js", revision: null },
        { url: "assets/js/tabs-841950cf.js", revision: null },
        { url: "assets/js/upload-3c0fc1aa.js", revision: null },
        { url: "assets/js/useAuthButtons-600f5197.js", revision: null },
        { url: "assets/js/useEcharts-d27c4b0d.js", revision: null },
        { url: "assets/js/useHandleData-7ff794fb.js", revision: null },
        { url: "assets/js/user-cb000d76.js", revision: null },
        { url: "assets/js/UserDrawer-8a1490ba.js", revision: null },
        {
          url: "assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-07c46a8d.js",
          revision: null,
        },
        { url: "index.html", revision: "fe551878b892262a9497e73a3da34b73" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "logo.png", revision: "41ac6692fd55101147fb80ca34e72455" },
        {
          url: "manifest.webmanifest",
          revision: "dc12a88b0fc29fcfd6e9d0818bae8c01",
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))
    );
});

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
        { url: "assets/js/403-ca7fefd3.js", revision: null },
        { url: "assets/js/404-a80d3fa5.js", revision: null },
        { url: "assets/js/500-b289e7b7.js", revision: null },
        { url: "assets/js/AgeRatioChart-14b082f8.js", revision: null },
        { url: "assets/js/AnnualUseChart-7ebc0a4d.js", revision: null },
        { url: "assets/js/api-97f196df.js", revision: null },
        { url: "assets/js/chinaMapChart-7e78a0e2.js", revision: null },
        { url: "assets/js/curve-0c68ef38.js", revision: null },
        { url: "assets/js/detail-77ca9aa2.js", revision: null },
        { url: "assets/js/detail-98d05af1.js", revision: null },
        { url: "assets/js/detail-9e88f9ed.js", revision: null },
        { url: "assets/js/HotPlateChart-feeee16b.js", revision: null },
        { url: "assets/js/Imgs-ff247588.js", revision: null },
        { url: "assets/js/index-00f1bbd9.js", revision: null },
        { url: "assets/js/index-0275a767.js", revision: null },
        { url: "assets/js/index-044916e6.js", revision: null },
        { url: "assets/js/index-053e4723.js", revision: null },
        { url: "assets/js/index-0af435a0.js", revision: null },
        { url: "assets/js/index-0cd53561.js", revision: null },
        { url: "assets/js/index-12837ead.js", revision: null },
        { url: "assets/js/index-28119bc6.js", revision: null },
        { url: "assets/js/index-2adf09ae.js", revision: null },
        { url: "assets/js/index-2c5e35d4.js", revision: null },
        { url: "assets/js/index-2d112566.js", revision: null },
        { url: "assets/js/index-2d96e82d.js", revision: null },
        { url: "assets/js/index-2db3d5a4.js", revision: null },
        { url: "assets/js/index-33148bb6.js", revision: null },
        { url: "assets/js/index-3387862a.js", revision: null },
        { url: "assets/js/index-34d3b45c.js", revision: null },
        { url: "assets/js/index-3620ee45.js", revision: null },
        { url: "assets/js/index-3d4caafc.js", revision: null },
        { url: "assets/js/index-3f7f537e.js", revision: null },
        { url: "assets/js/index-3fd952d9.js", revision: null },
        { url: "assets/js/index-496680b6.js", revision: null },
        { url: "assets/js/index-49f94155.js", revision: null },
        { url: "assets/js/index-4f0bd7c8.js", revision: null },
        { url: "assets/js/index-4f13b26f.js", revision: null },
        { url: "assets/js/index-542eda39.js", revision: null },
        { url: "assets/js/index-59703e4f.js", revision: null },
        { url: "assets/js/index-5e92b0e3.js", revision: null },
        { url: "assets/js/index-6a9601ac.js", revision: null },
        { url: "assets/js/index-70c7cef3.js", revision: null },
        { url: "assets/js/index-71ae9e6f.js", revision: null },
        { url: "assets/js/index-75823ea0.js", revision: null },
        { url: "assets/js/index-834defab.js", revision: null },
        { url: "assets/js/index-89caa663.js", revision: null },
        { url: "assets/js/index-8ec98a90.js", revision: null },
        { url: "assets/js/index-90a524f4.js", revision: null },
        { url: "assets/js/index-913d1990.js", revision: null },
        { url: "assets/js/index-993a643d.js", revision: null },
        { url: "assets/js/index-a55b7bde.js", revision: null },
        { url: "assets/js/index-a88ac601.js", revision: null },
        { url: "assets/js/index-a9fe4633.js", revision: null },
        { url: "assets/js/index-aa79ddce.js", revision: null },
        { url: "assets/js/index-ad13cb14.js", revision: null },
        { url: "assets/js/index-b25d4aa4.js", revision: null },
        { url: "assets/js/index-b7fd94b3.js", revision: null },
        { url: "assets/js/index-c4425cfc.js", revision: null },
        { url: "assets/js/index-c6aa6aba.js", revision: null },
        { url: "assets/js/index-ca3f3e8b.js", revision: null },
        { url: "assets/js/index-d37b8cae.js", revision: null },
        { url: "assets/js/index-d58aab98.js", revision: null },
        { url: "assets/js/index-de4726e7.js", revision: null },
        { url: "assets/js/index-e0cf5230.js", revision: null },
        { url: "assets/js/index-e17573ac.js", revision: null },
        { url: "assets/js/index-e7a192d3.js", revision: null },
        { url: "assets/js/index-eaa530b8.js", revision: null },
        { url: "assets/js/index-ec1c4f17.js", revision: null },
        { url: "assets/js/index-ee05319a.js", revision: null },
        { url: "assets/js/index-ee150112.js", revision: null },
        { url: "assets/js/index-f10ca4c2.js", revision: null },
        { url: "assets/js/index-f8c017d5.js", revision: null },
        { url: "assets/js/index-fcad53df.js", revision: null },
        { url: "assets/js/index-fcbc4c7a.js", revision: null },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-d6af1658.js",
          revision: null,
        },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-5343a75a.js",
          revision: null,
        },
        { url: "assets/js/liquidFillView-2acfc97b.js", revision: null },
        { url: "assets/js/LoginForm-e1a51f69.js", revision: null },
        { url: "assets/js/MaleFemaleRatioChart-384e3b0f.js", revision: null },
        { url: "assets/js/notData-2dc2117c.js", revision: null },
        { url: "assets/js/OverNext30Chart-23db13bc.js", revision: null },
        { url: "assets/js/pie-19985521.js", revision: null },
        { url: "assets/js/PlatformSourceChart-5a2dde13.js", revision: null },
        { url: "assets/js/RealTimeAccessChart-a96ce9ed.js", revision: null },
        { url: "assets/js/tabs-0635dad8.js", revision: null },
        { url: "assets/js/upload-56f753a6.js", revision: null },
        { url: "assets/js/useAuthButtons-21b64a37.js", revision: null },
        { url: "assets/js/useEcharts-4eb125c3.js", revision: null },
        { url: "assets/js/useHandleData-35a647c9.js", revision: null },
        { url: "assets/js/user-56e95910.js", revision: null },
        { url: "assets/js/UserDrawer-ac5f1aed.js", revision: null },
        {
          url: "assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-6e68165f.js",
          revision: null,
        },
        { url: "index.html", revision: "433c124e0cd2a1f76bb4f5d14d8d0b40" },
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

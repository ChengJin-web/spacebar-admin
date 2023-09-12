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
        { url: "assets/css/index-5654162a.css", revision: null },
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
        { url: "assets/css/index-fdde9950.css", revision: null },
        { url: "assets/css/LoginForm-4ba342f3.css", revision: null },
        { url: "assets/css/MaleFemaleRatioChart-42e73dbe.css", revision: null },
        { url: "assets/css/OverNext30Chart-013dbf5c.css", revision: null },
        { url: "assets/css/pie-46b74185.css", revision: null },
        { url: "assets/css/PlatformSourceChart-31f12883.css", revision: null },
        { url: "assets/css/RealTimeAccessChart-f97f8d9f.css", revision: null },
        {
          url: "assets/js/plugin-vue_export-helper-c27b6911.js",
          revision: null,
        },
        { url: "assets/js/403-2635aec5.js", revision: null },
        { url: "assets/js/404-fbfdb3a6.js", revision: null },
        { url: "assets/js/500-a62d92f8.js", revision: null },
        { url: "assets/js/AgeRatioChart-9a7a7695.js", revision: null },
        { url: "assets/js/AnnualUseChart-bbbab559.js", revision: null },
        { url: "assets/js/api-97f196df.js", revision: null },
        { url: "assets/js/chinaMapChart-7a00cdba.js", revision: null },
        { url: "assets/js/curve-5f65d151.js", revision: null },
        { url: "assets/js/detail-16c8e808.js", revision: null },
        { url: "assets/js/detail-bc8c7390.js", revision: null },
        { url: "assets/js/detail-d0f06d34.js", revision: null },
        { url: "assets/js/HotPlateChart-32ed9e8a.js", revision: null },
        { url: "assets/js/Imgs-19846720.js", revision: null },
        { url: "assets/js/index-0275a767.js", revision: null },
        { url: "assets/js/index-0401b795.js", revision: null },
        { url: "assets/js/index-07deb593.js", revision: null },
        { url: "assets/js/index-10d6acf1.js", revision: null },
        { url: "assets/js/index-117c8833.js", revision: null },
        { url: "assets/js/index-1550a785.js", revision: null },
        { url: "assets/js/index-19b87b36.js", revision: null },
        { url: "assets/js/index-1a1f6a79.js", revision: null },
        { url: "assets/js/index-1ba6765a.js", revision: null },
        { url: "assets/js/index-1c2c724c.js", revision: null },
        { url: "assets/js/index-21c54290.js", revision: null },
        { url: "assets/js/index-2a217506.js", revision: null },
        { url: "assets/js/index-410a0670.js", revision: null },
        { url: "assets/js/index-4887207b.js", revision: null },
        { url: "assets/js/index-4bc3825a.js", revision: null },
        { url: "assets/js/index-4beb49c7.js", revision: null },
        { url: "assets/js/index-4c9ca981.js", revision: null },
        { url: "assets/js/index-55834f7a.js", revision: null },
        { url: "assets/js/index-56373d21.js", revision: null },
        { url: "assets/js/index-58e85ceb.js", revision: null },
        { url: "assets/js/index-5d6299d0.js", revision: null },
        { url: "assets/js/index-5dec6777.js", revision: null },
        { url: "assets/js/index-5e45e627.js", revision: null },
        { url: "assets/js/index-63868755.js", revision: null },
        { url: "assets/js/index-65482e9c.js", revision: null },
        { url: "assets/js/index-7428e3c7.js", revision: null },
        { url: "assets/js/index-7aa5cbc8.js", revision: null },
        { url: "assets/js/index-7be790e3.js", revision: null },
        { url: "assets/js/index-8288bf39.js", revision: null },
        { url: "assets/js/index-831dcddc.js", revision: null },
        { url: "assets/js/index-851b6e49.js", revision: null },
        { url: "assets/js/index-8a6d02c6.js", revision: null },
        { url: "assets/js/index-8cb3b0e6.js", revision: null },
        { url: "assets/js/index-8e44cab9.js", revision: null },
        { url: "assets/js/index-8f9744f3.js", revision: null },
        { url: "assets/js/index-940cc736.js", revision: null },
        { url: "assets/js/index-9451570e.js", revision: null },
        { url: "assets/js/index-96f55932.js", revision: null },
        { url: "assets/js/index-a2155403.js", revision: null },
        { url: "assets/js/index-b731ec9d.js", revision: null },
        { url: "assets/js/index-b86fca02.js", revision: null },
        { url: "assets/js/index-bd8289fd.js", revision: null },
        { url: "assets/js/index-bd8dfefb.js", revision: null },
        { url: "assets/js/index-c228bbcc.js", revision: null },
        { url: "assets/js/index-c2a7a239.js", revision: null },
        { url: "assets/js/index-ca9abe9e.js", revision: null },
        { url: "assets/js/index-cc4e3059.js", revision: null },
        { url: "assets/js/index-ce9eabec.js", revision: null },
        { url: "assets/js/index-cf1f9c97.js", revision: null },
        { url: "assets/js/index-cf4ddfa1.js", revision: null },
        { url: "assets/js/index-d96b5988.js", revision: null },
        { url: "assets/js/index-dc39d2fe.js", revision: null },
        { url: "assets/js/index-e0d4935c.js", revision: null },
        { url: "assets/js/index-e68db36d.js", revision: null },
        { url: "assets/js/index-e9e9d70c.js", revision: null },
        { url: "assets/js/index-ea1bdc68.js", revision: null },
        { url: "assets/js/index-ec2eb540.js", revision: null },
        { url: "assets/js/index-f650580d.js", revision: null },
        { url: "assets/js/index-f71ed6c9.js", revision: null },
        { url: "assets/js/index-f9d1798e.js", revision: null },
        { url: "assets/js/index-fe6f316a.js", revision: null },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-0f251896.js",
          revision: null,
        },
        {
          url: "assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-fc72736b.js",
          revision: null,
        },
        { url: "assets/js/liquidFillView-2acfc97b.js", revision: null },
        { url: "assets/js/LoginForm-bd6a3555.js", revision: null },
        { url: "assets/js/MaleFemaleRatioChart-2a2ab856.js", revision: null },
        { url: "assets/js/notData-2dc2117c.js", revision: null },
        { url: "assets/js/OverNext30Chart-2a641fb2.js", revision: null },
        { url: "assets/js/pie-63bd0096.js", revision: null },
        { url: "assets/js/PlatformSourceChart-86a4a938.js", revision: null },
        { url: "assets/js/RealTimeAccessChart-4372ff52.js", revision: null },
        { url: "assets/js/tabs-ed859c7d.js", revision: null },
        { url: "assets/js/upload-08b64c92.js", revision: null },
        { url: "assets/js/useAuthButtons-02b58486.js", revision: null },
        { url: "assets/js/useEcharts-5a68d07b.js", revision: null },
        { url: "assets/js/useHandleData-54c5803e.js", revision: null },
        { url: "assets/js/user-d9da2f1b.js", revision: null },
        { url: "assets/js/UserDrawer-da697c3f.js", revision: null },
        {
          url: "assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-8ae14a34.js",
          revision: null,
        },
        { url: "index.html", revision: "dc344c95ac47053602f5af8bfa0d7c90" },
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

import {
  _ as c,
  a as _,
} from "./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-c9a4df84.js";
import i from "./LoginForm-ee3cc420.js";
import {
  d as t,
  o as n,
  c as l,
  a as o,
  b as e,
  p as d,
  g as r,
} from "./index-6d941592.js";
import { _ as p } from "./plugin-vue_export-helper-c27b6911.js";
import "./tabs-8104ccee.js";
const m = "/spacebar/assets/png/login_left-87c63f1f.png",
  a = (s) => (d("data-v-9eaecfed"), (s = s()), r(), s),
  f = { class: "login-container flx-center" },
  g = { class: "login-box" },
  h = a(() =>
    o(
      "div",
      { class: "login-left" },
      [o("img", { class: "login-left-img", src: m, alt: "login" })],
      -1
    )
  ),
  v = { class: "login-form" },
  x = a(() =>
    o(
      "div",
      { class: "login-logo" },
      [
        o("img", { class: "login-icon", src: c, alt: "" }),
        o("h2", { class: "logo-text" }, "Spacebar"),
      ],
      -1
    )
  ),
  u = t({ name: "login" }),
  b = t({
    ...u,
    setup(s) {
      return (I, S) => (
        n(),
        l("div", f, [
          o("div", g, [e(_, { class: "dark" }), h, o("div", v, [x, e(i)])]),
        ])
      );
    },
  });
const $ = p(b, [["__scopeId", "data-v-9eaecfed"]]);
export { $ as default };

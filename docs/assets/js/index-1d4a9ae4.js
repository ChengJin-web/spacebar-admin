import {
  _ as c,
  a as _,
} from "./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-34b3f00a.js";
import i from "./LoginForm-e1b89461.js";
import {
  d as t,
  o as n,
  c as l,
  a as o,
  b as e,
  p as r,
  g as d,
} from "./index-6f6f76a1.js";
import { _ as p } from "./plugin-vue_export-helper-c27b6911.js";
import "./tabs-841950cf.js";
const g = "/assets/png/login_left4-f10aa7e0.png",
  a = (s) => (r("data-v-48ec97ea"), (s = s()), d(), s),
  m = { class: "login-container flx-center" },
  f = { class: "login-box" },
  h = a(() =>
    o(
      "div",
      { class: "login-left" },
      [o("img", { class: "login-left-img", src: g, alt: "login" })],
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
        o("h2", { class: "logo-text" }, "Spacebar Login"),
      ],
      -1
    )
  ),
  u = t({ name: "login" }),
  I = t({
    ...u,
    setup(s) {
      return (S, b) => (
        n(),
        l("div", m, [
          o("div", f, [e(_, { class: "dark" }), h, o("div", v, [x, e(i)])]),
        ])
      );
    },
  });
const V = p(I, [["__scopeId", "data-v-48ec97ea"]]);
export { V as default };

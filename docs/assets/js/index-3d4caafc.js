import {
  d as s,
  r as _,
  $ as n,
  o as t,
  c as d,
  a4 as r,
  h as p,
  w as i,
  e as l,
  p as u,
  g as f,
  a as m,
  R as v,
} from "./index-fcbc4c7a.js";
import { _ as x } from "./plugin-vue_export-helper-c27b6911.js";
const h = (e) => (u("data-v-34fe1ead"), (e = e()), f(), e),
  b = { class: "card content-box" },
  k = h(() => m("span", { class: "text" }, "防抖指令 🍇🍇🍇🍓🍓🍓", -1)),
  w = s({ name: "debounceDirect" }),
  y = s({
    ...w,
    setup(e) {
      const o = () => {
        v.success("我是防抖按钮触发的事件 🍍🍓🍌");
      };
      return (B, C) => {
        const c = _("el-button"),
          a = n("debounce");
        return (
          t(),
          d("div", b, [
            k,
            r(
              (t(),
              p(
                c,
                { type: "primary" },
                { default: i(() => [l(" 防抖按钮 (0.5秒后执行) ")]), _: 1 }
              )),
              [[a, o]]
            ),
          ])
        );
      };
    },
  });
const D = x(y, [["__scopeId", "data-v-34fe1ead"]]);
export { D as default };

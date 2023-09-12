import {
  d as t,
  r as _,
  $ as n,
  o as s,
  c as d,
  a4 as r,
  h as p,
  w as i,
  e as l,
  p as u,
  g as f,
  a as m,
  R as v,
} from "./index-410a0670.js";
import { _ as x } from "./plugin-vue_export-helper-c27b6911.js";
const h = (e) => (u("data-v-fcd649dd"), (e = e()), f(), e),
  g = { class: "card content-box" },
  w = h(() => m("span", { class: "text" }, "长按指令 🍇🍇🍇🍓🍓🍓", -1)),
  y = t({ name: "longpressDirect" }),
  B = t({
    ...y,
    setup(e) {
      const o = () => {
        v.success("长按事件触发成功 🎉🎉🎉");
      };
      return (I, b) => {
        const c = _("el-button"),
          a = n("longpress");
        return (
          s(),
          d("div", g, [
            w,
            r(
              (s(),
              p(
                c,
                { type: "primary" },
                { default: i(() => [l(" 长按2秒触发事件 ")]), _: 1 }
              )),
              [[a, o]]
            ),
          ])
        );
      };
    },
  });
const D = x(B, [["__scopeId", "data-v-fcd649dd"]]);
export { D as default };

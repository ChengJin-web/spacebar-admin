import {
  d as s,
  D as n,
  r as c,
  o as p,
  c as r,
  a as e,
  b as d,
  w as l,
  u as i,
  p as u,
  g as m,
  e as f,
} from "./index-410a0670.js";
import { _ as h } from "./plugin-vue_export-helper-c27b6911.js";
const v = "/assets/png/403-6dc0b7a9.png",
  o = (t) => (u("data-v-16099f38"), (t = t()), m(), t),
  g = { class: "not-container" },
  x = o(() => e("img", { src: v, class: "not-img", alt: "403" }, null, -1)),
  b = { class: "not-detail" },
  k = o(() => e("h2", null, "403", -1)),
  C = o(() => e("h4", null, "抱歉，您无权访问该页面~🙅‍♂️🙅‍♀️", -1)),
  y = s({ name: "403" }),
  I = s({
    ...y,
    setup(t) {
      const _ = n();
      return (w, B) => {
        const a = c("el-button");
        return (
          p(),
          r("div", g, [
            x,
            e("div", b, [
              k,
              C,
              d(
                a,
                { type: "primary", onClick: i(_).back },
                { default: l(() => [f(" 返回上一页 ")]), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
          ])
        );
      };
    },
  });
const V = h(I, [["__scopeId", "data-v-16099f38"]]);
export { V as default };

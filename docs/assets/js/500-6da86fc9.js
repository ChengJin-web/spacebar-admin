import {
  d as s,
  D as _,
  r as n,
  o as p,
  c as r,
  a as t,
  b as d,
  w as l,
  u as i,
  p as u,
  g as m,
  e as f,
} from "./index-6f6f76a1.js";
import { _ as h } from "./plugin-vue_export-helper-c27b6911.js";
const b = "/assets/png/500-1a6c7c8f.png",
  o = (e) => (u("data-v-ef18b4ca"), (e = e()), m(), e),
  v = { class: "not-container" },
  g = o(() => t("img", { src: b, class: "not-img", alt: "500" }, null, -1)),
  x = { class: "not-detail" },
  k = o(() => t("h2", null, "500", -1)),
  C = o(() => t("h4", null, "抱歉，您的网络不见了~🤦‍♂️🤦‍♀️", -1)),
  y = s({ name: "500" }),
  I = s({
    ...y,
    setup(e) {
      const a = _();
      return (w, B) => {
        const c = n("el-button");
        return (
          p(),
          r("div", v, [
            g,
            t("div", x, [
              k,
              C,
              d(
                c,
                { type: "primary", onClick: i(a).back },
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
const V = h(I, [["__scopeId", "data-v-ef18b4ca"]]);
export { V as default };

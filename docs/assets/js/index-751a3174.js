import {
  d as s,
  i as _,
  r as d,
  o as c,
  c as p,
  b as l,
  p as r,
  g as u,
  a as m,
} from "./index-6f6f76a1.js";
import { _ as i } from "./plugin-vue_export-helper-c27b6911.js";
const v = (e) => (r("data-v-2b28d366"), (e = e()), u(), e),
  f = { class: "card content-box" },
  x = v(() => m("span", { class: "text" }, "我是menu2-2-2 🍓🍇🍈🍉", -1)),
  b = s({ name: "menu222" }),
  V = s({
    ...b,
    setup(e) {
      const o = _("");
      return (h, t) => {
        const a = d("el-input");
        return (
          c(),
          p("div", f, [
            x,
            l(
              a,
              {
                modelValue: o.value,
                "onUpdate:modelValue": t[0] || (t[0] = (n) => (o.value = n)),
                placeholder: "测试缓存",
              },
              null,
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  });
const S = i(V, [["__scopeId", "data-v-2b28d366"]]);
export { S as default };

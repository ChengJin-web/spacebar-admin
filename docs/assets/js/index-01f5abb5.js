import {
  d as a,
  i as _,
  r as c,
  o as p,
  c as d,
  b as l,
  p as r,
  g as u,
  a as m,
} from "./index-6f6f76a1.js";
import { _ as i } from "./plugin-vue_export-helper-c27b6911.js";
const b = (e) => (r("data-v-b61ab7b6"), (e = e()), u(), e),
  v = { class: "card content-box" },
  f = b(() => m("span", { class: "text" }, "我是menu2-2-1 🍓🍇🍈🍉", -1)),
  x = a({ name: "menu221" }),
  V = a({
    ...x,
    setup(e) {
      const o = _("");
      return (h, t) => {
        const s = c("el-input");
        return (
          p(),
          d("div", v, [
            f,
            l(
              s,
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
const S = i(V, [["__scopeId", "data-v-b61ab7b6"]]);
export { S as default };

import {
  d as a,
  i as _,
  r as d,
  o as c,
  c as p,
  b as l,
  p as r,
  g as u,
  a as m,
} from "./index-6d941592.js";
import { _ as i } from "./plugin-vue_export-helper-c27b6911.js";
const v = (e) => (r("data-v-958384ad"), (e = e()), u(), e),
  f = { class: "card content-box" },
  x = v(() => m("span", { class: "text" }, "我是menu2-1 🍓🍇🍈🍉", -1)),
  V = a({ name: "menu21" }),
  h = a({
    ...V,
    setup(e) {
      const o = _("");
      return (I, t) => {
        const s = d("el-input");
        return (
          c(),
          p("div", f, [
            x,
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
const b = i(h, [["__scopeId", "data-v-958384ad"]]);
export { b as default };

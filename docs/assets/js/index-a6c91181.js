import {
  d as n,
  i as r,
  r as s,
  $ as u,
  o as a,
  c as m,
  a as d,
  b as v,
  w as c,
  a4 as f,
  h as x,
  e as b,
  p as h,
  g as y,
} from "./index-6f6f76a1.js";
import { _ as V } from "./plugin-vue_export-helper-c27b6911.js";
const w = (e) => (h("data-v-fbd0d74b"), (e = e()), y(), e),
  B = { class: "card content-box" },
  I = w(() => d("span", { class: "text" }, "复制指令 🍇🍇🍇🍓🍓🍓", -1)),
  k = { class: "box-content" },
  C = n({ name: "copyDirect" }),
  D = n({
    ...C,
    setup(e) {
      const t = r("我是被复制的内容 🍒 🍉 🍊");
      return (N, o) => {
        const _ = s("el-button"),
          p = s("el-input"),
          l = u("copy");
        return (
          a(),
          m("div", B, [
            I,
            d("div", k, [
              v(
                p,
                {
                  modelValue: t.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (i) => (t.value = i)),
                  placeholder: "请输入内容",
                  style: { width: "500px" },
                },
                {
                  append: c(() => [
                    f(
                      (a(),
                      x(_, null, { default: c(() => [b(" 复制 ")]), _: 1 })),
                      [[l, t.value]]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ]),
          ])
        );
      };
    },
  });
const E = V(D, [["__scopeId", "data-v-fbd0d74b"]]);
export { E as default };

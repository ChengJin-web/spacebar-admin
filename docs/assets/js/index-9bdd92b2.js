import { _ as a } from "./plugin-vue_export-helper-c27b6911.js";
import {
  $ as o,
  o as s,
  c as t,
  a4 as _,
  e as d,
  p as r,
  g as n,
  a as i,
} from "./index-6f6f76a1.js";
const p = {},
  l = (e) => (r("data-v-03500d22"), (e = e()), n(), e),
  x = { class: "card content-box" },
  v = l(() => i("span", { class: "text" }, "拖拽指令 🍇🍇🍇🍓🍓🍓", -1)),
  f = { class: "drag-box flx-center" };
function g(e, h) {
  const c = o("draggable");
  return (
    s(), t("div", x, [v, _((s(), t("div", f, [d("我可以拖拽哦~")])), [[c]])])
  );
}
const b = a(p, [
  ["render", g],
  ["__scopeId", "data-v-03500d22"],
]);
export { b as default };

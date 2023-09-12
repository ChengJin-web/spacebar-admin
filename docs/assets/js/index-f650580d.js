import {
  d as f,
  i as r,
  x as D,
  I as k,
  r as u,
  o as c,
  c as m,
  b as t,
  w as n,
  u as N,
  y as T,
  z,
  h as x,
  a as I,
  F,
  f as O,
  A as R,
  t as j,
  e as _,
  p as A,
  g as E,
} from "./index-410a0670.js";
import { _ as C } from "./plugin-vue_export-helper-c27b6911.js";
const P = { class: "icon-box" },
  q = { class: "icon-list" },
  G = ["onClick"],
  H = f({ name: "SelectIcon" }),
  J = f({
    ...H,
    props: {
      iconValue: { default: "" },
      title: { default: "请选择图标" },
      clearable: { type: Boolean, default: !0 },
      placeholder: { default: "请选择图标" },
    },
    emits: ["update:iconValue"],
    setup(i, { emit: d }) {
      const s = r(i.iconValue),
        a = r(!1),
        v = () => (a.value = !0),
        b = (e) => {
          (a.value = !1),
            (s.value = e.name),
            d("update:iconValue", e.name),
            setTimeout(() => V.value.blur(), 0);
        },
        V = r(),
        S = () => {
          (s.value = ""),
            d("update:iconValue", ""),
            setTimeout(() => V.value.blur(), 0);
        },
        p = r(""),
        y = k,
        h = D(() => {
          if (!p.value) return k;
          let e = {};
          for (const o in y)
            o.toLowerCase().indexOf(p.value.toLowerCase()) > -1 &&
              (e[o] = y[o]);
          return e;
        });
      return (e, o) => {
        const $ = u("el-button"),
          g = u("el-input"),
          B = u("el-scrollbar"),
          L = u("el-empty"),
          U = u("el-dialog");
        return (
          c(),
          m("div", P, [
            t(
              g,
              T(
                {
                  ref_key: "inputRef",
                  ref: V,
                  modelValue: s.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (l) => (s.value = l)),
                },
                e.$attrs,
                {
                  placeholder: e.placeholder,
                  clearable: e.clearable,
                  onClear: S,
                  onClick: v,
                }
              ),
              {
                append: n(() => [
                  t($, { icon: N(y)[e.iconValue] }, null, 8, ["icon"]),
                ]),
                _: 1,
              },
              16,
              ["modelValue", "placeholder", "clearable"]
            ),
            t(
              U,
              {
                modelValue: a.value,
                "onUpdate:modelValue": o[2] || (o[2] = (l) => (a.value = l)),
                title: e.placeholder,
                top: "50px",
                width: "66%",
              },
              {
                default: n(() => [
                  t(
                    g,
                    {
                      modelValue: p.value,
                      "onUpdate:modelValue":
                        o[1] || (o[1] = (l) => (p.value = l)),
                      placeholder: "搜索图标",
                      size: "large",
                      "prefix-icon": z,
                    },
                    null,
                    8,
                    ["modelValue", "prefix-icon"]
                  ),
                  Object.keys(h.value).length
                    ? (c(),
                      x(
                        B,
                        { key: 0 },
                        {
                          default: n(() => [
                            I("div", q, [
                              (c(!0),
                              m(
                                F,
                                null,
                                O(
                                  h.value,
                                  (l) => (
                                    c(),
                                    m(
                                      "div",
                                      {
                                        key: l,
                                        class: "icon-item",
                                        onClick: (Z) => b(l),
                                      },
                                      [
                                        (c(), x(R(l))),
                                        I("span", null, j(l.name), 1),
                                      ],
                                      8,
                                      G
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          _: 1,
                        }
                      ))
                    : (c(),
                      x(L, { key: 1, description: "未搜索到您要找的图标~" })),
                ]),
                _: 1,
              },
              8,
              ["modelValue", "title"]
            ),
          ])
        );
      };
    },
  });
const K = C(J, [["__scopeId", "data-v-181353f7"]]),
  M = (i) => (A("data-v-bace8362"), (i = i()), E(), i),
  Q = { class: "card content-box" },
  W = M(() => I("span", { class: "text" }, " 图标选择器 🍓🍇🍈🍉", -1)),
  X = f({ name: "selectIcon" }),
  Y = f({
    ...X,
    setup(i) {
      const d = r("");
      return (w, s) => {
        const a = u("el-descriptions-item"),
          v = u("el-descriptions");
        return (
          c(),
          m("div", Q, [
            W,
            t(
              K,
              {
                "icon-value": d.value,
                "onUpdate:iconValue": s[0] || (s[0] = (b) => (d.value = b)),
              },
              null,
              8,
              ["icon-value"]
            ),
            t(
              v,
              { title: "配置项 📚", column: 1, border: "" },
              {
                default: n(() => [
                  t(
                    a,
                    { label: "iconValue" },
                    {
                      default: n(() => [
                        _(
                          ' 双向绑定的icon值，使用示例：v-model:icon-value="iconValue" '
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  t(
                    a,
                    { label: "title" },
                    { default: n(() => [_(" 弹窗标题 ")]), _: 1 }
                  ),
                  t(
                    a,
                    { label: "clearable" },
                    { default: n(() => [_(" 是否可清空，默认为 true ")]), _: 1 }
                  ),
                  t(
                    a,
                    { label: "placeholder" },
                    { default: n(() => [_(" 输入框占位文本 ")]), _: 1 }
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  });
const le = C(Y, [["__scopeId", "data-v-bace8362"]]);
export { le as default };

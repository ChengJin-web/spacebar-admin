import { u as w } from "./useAuthButtons-02b58486.js";
import {
  d as b,
  r,
  $ as g,
  o as a,
  c as B,
  b as l,
  u as e,
  w as t,
  e as o,
  h as i,
  a0 as m,
  Y as p,
  a1 as y,
  a2 as x,
  j as h,
  a3 as v,
  a4 as c,
  p as N,
  g as S,
  a as C,
} from "./index-410a0670.js";
import { _ as I } from "./plugin-vue_export-helper-c27b6911.js";
const V = (_) => (N("data-v-34a32b33"), (_ = _()), S(), _),
  O = { class: "card content-box" },
  T = V(() => C("span", { class: "text" }, " 按钮权限 🍓🍇🍈🍉", -1)),
  j = b({ name: "authButton" }),
  D = b({
    ...j,
    setup(_) {
      const { BUTTONS: s } = w();
      return ($, A) => {
        const k = r("el-alert"),
          u = r("el-divider"),
          n = r("el-button"),
          f = r("el-row"),
          d = g("auth");
        return (
          a(),
          B("div", O, [
            T,
            l(
              k,
              {
                class: "mb20",
                title: `当前用户按钮权限：${JSON.stringify(Object.keys(e(s)))}`,
                type: "success",
                closable: !1,
              },
              null,
              8,
              ["title"]
            ),
            l(
              u,
              { "content-position": "left" },
              { default: t(() => [o(" 使用 Hooks 方式绑定权限 ")]), _: 1 }
            ),
            l(
              f,
              { class: "mb20" },
              {
                default: t(() => [
                  e(s).add
                    ? (a(),
                      i(
                        n,
                        { key: 0, type: "primary", icon: e(m) },
                        { default: t(() => [o(" 新增 ")]), _: 1 },
                        8,
                        ["icon"]
                      ))
                    : p("", !0),
                  e(s).edit
                    ? (a(),
                      i(
                        n,
                        { key: 1, type: "warning", icon: e(y) },
                        { default: t(() => [o(" 编辑 ")]), _: 1 },
                        8,
                        ["icon"]
                      ))
                    : p("", !0),
                  e(s).delete
                    ? (a(),
                      i(
                        n,
                        { key: 2, type: "danger", plain: "", icon: e(x) },
                        { default: t(() => [o(" 删除 ")]), _: 1 },
                        8,
                        ["icon"]
                      ))
                    : p("", !0),
                  e(s).import
                    ? (a(),
                      i(
                        n,
                        { key: 3, type: "info", plain: "", icon: e(h) },
                        { default: t(() => [o(" 导入数据 ")]), _: 1 },
                        8,
                        ["icon"]
                      ))
                    : p("", !0),
                  e(s).export
                    ? (a(),
                      i(
                        n,
                        { key: 4, type: "info", plain: "", icon: e(v) },
                        { default: t(() => [o(" 导出数据 ")]), _: 1 },
                        8,
                        ["icon"]
                      ))
                    : p("", !0),
                ]),
                _: 1,
              }
            ),
            l(
              u,
              { "content-position": "left" },
              { default: t(() => [o(" 使用 v-auth 指令绑定单个权限 ")]), _: 1 }
            ),
            l(
              f,
              { class: "mb20" },
              {
                default: t(() => [
                  c(
                    (a(),
                    i(
                      n,
                      { type: "primary", icon: e(m) },
                      { default: t(() => [o(" 新增 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "add"]]
                  ),
                  c(
                    (a(),
                    i(
                      n,
                      { type: "warning", icon: e(y) },
                      { default: t(() => [o(" 编辑 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "edit"]]
                  ),
                  c(
                    (a(),
                    i(
                      n,
                      { type: "danger", plain: "", icon: e(x) },
                      { default: t(() => [o(" 删除 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "delete"]]
                  ),
                  c(
                    (a(),
                    i(
                      n,
                      { type: "info", plain: "", icon: e(h) },
                      { default: t(() => [o(" 导入数据 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "import"]]
                  ),
                  c(
                    (a(),
                    i(
                      n,
                      { type: "info", plain: "", icon: e(v) },
                      { default: t(() => [o(" 导出数据 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "export"]]
                  ),
                ]),
                _: 1,
              }
            ),
            l(
              u,
              { "content-position": "left" },
              { default: t(() => [o(" 使用 v-auth 指令绑定多个权限 ")]), _: 1 }
            ),
            l(f, null, {
              default: t(() => [
                c(
                  (a(),
                  i(
                    n,
                    { type: "primary", icon: e(m) },
                    { default: t(() => [o(" 新增 ")]), _: 1 },
                    8,
                    ["icon"]
                  )),
                  [[d, ["add", "edit", "delete", "import", "export"]]]
                ),
                c(
                  (a(),
                  i(
                    n,
                    { type: "warning", icon: e(y) },
                    { default: t(() => [o(" 编辑 ")]), _: 1 },
                    8,
                    ["icon"]
                  )),
                  [[d, ["add", "edit", "delete", "import", "export"]]]
                ),
                c(
                  (a(),
                  i(
                    n,
                    { type: "danger", plain: "", icon: e(x) },
                    { default: t(() => [o(" 删除 ")]), _: 1 },
                    8,
                    ["icon"]
                  )),
                  [[d, ["add", "edit", "delete", "import", "export"]]]
                ),
                c(
                  (a(),
                  i(
                    n,
                    { type: "info", plain: "", icon: e(h) },
                    { default: t(() => [o(" 导入数据 ")]), _: 1 },
                    8,
                    ["icon"]
                  )),
                  [[d, ["add", "edit", "delete", "import", "export"]]]
                ),
                c(
                  (a(),
                  i(
                    n,
                    { type: "info", plain: "", icon: e(v) },
                    { default: t(() => [o(" 导出数据 ")]), _: 1 },
                    8,
                    ["icon"]
                  )),
                  [[d, ["add", "edit", "delete", "import", "export"]]]
                ),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  });
const U = I(D, [["__scopeId", "data-v-34a32b33"]]);
export { U as default };

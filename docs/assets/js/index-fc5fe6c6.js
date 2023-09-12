import {
  d as V,
  i as s,
  ag as S,
  U as p,
  r as _,
  o as y,
  c as v,
  t as b,
  Y as q,
  b as f,
  w as g,
  u as D,
  ah as E,
  a as F,
  ac as O,
  B as R,
  O as U,
  e as z,
} from "./index-6d941592.js";
import { _ as I } from "./plugin-vue_export-helper-c27b6911.js";
const K = { class: "card filter" },
  M = { key: 0, class: "title sle" },
  P = { class: "el-tree-node__label" },
  Y = V({ name: "TreeFilter" }),
  $ = V({
    ...Y,
    props: {
      requestApi: {},
      data: {},
      title: {},
      id: { default: "id" },
      label: { default: "label" },
      multiple: { type: Boolean, default: !1 },
      defaultValue: {},
    },
    emits: ["change"],
    setup(C, { expose: w, emit: h }) {
      const l = C,
        N = { children: "children", label: l.label },
        n = s(),
        d = s([]),
        r = s([]),
        u = s(),
        m = () => {
          l.multiple
            ? (u.value = Array.isArray(l.defaultValue)
                ? l.defaultValue
                : [l.defaultValue])
            : (u.value =
                typeof l.defaultValue == "string" ? l.defaultValue : "");
        };
      S(async () => {
        if ((m(), l.requestApi)) {
          const { data: e } = await l.requestApi();
          (d.value = e), (r.value = [{ id: "", [l.label]: "全部" }, ...e]);
        }
      }),
        p(
          () => l.defaultValue,
          () => U(() => m()),
          { deep: !0, immediate: !0 }
        ),
        p(
          () => l.data,
          () => {
            var e;
            (e = l.data) != null &&
              e.length &&
              ((d.value = l.data),
              (r.value = [{ id: "", [l.label]: "全部" }, ...l.data]));
          },
          { deep: !0, immediate: !0 }
        );
      const c = s("");
      p(c, (e) => {
        n.value.filter(e);
      });
      const T = (e, i, a) => {
          if (!e) return !0;
          let o = a.parent,
            t = [a.label],
            k = 1;
          for (; k < a.level; ) (t = [...t, o.label]), (o = o.parent), k++;
          return t.some((B) => B.indexOf(e) !== -1);
        },
        x = (e) => {
          l.multiple || h("change", e[l.id]);
        },
        A = () => {
          var e;
          h("change", (e = n.value) == null ? void 0 : e.getCheckedKeys());
        };
      return (
        w({ treeData: d, treeAllData: r, treeRef: n }),
        (e, i) => {
          const a = _("el-input"),
            o = _("el-scrollbar");
          return (
            y(),
            v("div", K, [
              e.title ? (y(), v("h4", M, b(e.title), 1)) : q("", !0),
              f(
                a,
                {
                  modelValue: c.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (t) => (c.value = t)),
                  placeholder: "输入关键字进行过滤",
                  clearable: "",
                },
                null,
                8,
                ["modelValue"]
              ),
              f(
                o,
                {
                  style: R({
                    height: e.title ? "calc(100% - 95px)" : "calc(100% - 56px)",
                  }),
                },
                {
                  default: g(() => [
                    f(
                      D(E),
                      {
                        ref_key: "treeRef",
                        ref: n,
                        "default-expand-all": "",
                        "node-key": e.id,
                        data: e.multiple ? d.value : r.value,
                        "show-checkbox": e.multiple,
                        "check-strictly": !1,
                        "current-node-key": e.multiple ? "" : u.value,
                        "highlight-current": !e.multiple,
                        "expand-on-click-node": !1,
                        "check-on-click-node": e.multiple,
                        props: N,
                        "filter-node-method": T,
                        "default-checked-keys": e.multiple ? u.value : [],
                        onNodeClick: x,
                        onCheck: A,
                      },
                      {
                        default: g((t) => [
                          F("span", P, [
                            O(
                              e.$slots,
                              "default",
                              { row: t },
                              () => [z(b(t.node.label), 1)],
                              !0
                            ),
                          ]),
                        ]),
                        _: 3,
                      },
                      8,
                      [
                        "node-key",
                        "data",
                        "show-checkbox",
                        "current-node-key",
                        "highlight-current",
                        "check-on-click-node",
                        "default-checked-keys",
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["style"]
              ),
            ])
          );
        }
      );
    },
  });
const H = I($, [["__scopeId", "data-v-51dfdc02"]]);
export { H as T };

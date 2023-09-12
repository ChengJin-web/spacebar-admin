import {
  ab as d,
  d as g,
  i as f,
  r as n,
  o as z,
  h as O,
  w as o,
  b as a,
  u as k,
  a3 as D,
  e as h,
  ac as y,
  a as w,
  t as R,
  p as j,
  g as A,
} from "./index-6d941592.js";
import { _ as F } from "./plugin-vue_export-helper-c27b6911.js";
const N = async (c, r, p = {}, v = !0, i = ".xlsx") => {
    v &&
      d({
        title: "温馨提示",
        message: "如果数据庞大会导致下载缓慢哦，请您耐心等待！",
        type: "info",
        duration: 3e3,
      });
    try {
      const e = await c(p),
        u = new Blob([e]);
      if ("msSaveOrOpenBlob" in navigator)
        return window.navigator.msSaveOrOpenBlob(u, r + i);
      const m = window.URL.createObjectURL(u),
        s = document.createElement("a");
      (s.style.display = "none"),
        (s.download = `${r}${i}`),
        (s.href = m),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s),
        window.URL.revokeObjectURL(m);
    } catch {}
  },
  M = (c) => (j("data-v-dd116d8b"), (c = c()), A(), c),
  q = M(() =>
    w(
      "div",
      { class: "el-upload__text" },
      [h("将文件拖到此处，或"), w("em", null, "点击上传")],
      -1
    )
  ),
  P = { class: "el-upload__tip" },
  G = g({ name: "ImportExcel" }),
  H = g({
    ...G,
    setup(c, { expose: r }) {
      const p = f(!1),
        v = f(1),
        i = f(!1),
        e = f({
          title: "",
          fileSize: 5,
          fileType: [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
        }),
        u = (l) => {
          (e.value = { ...e.value, ...l }), (i.value = !0);
        },
        m = () => {
          e.value.tempApi && N(e.value.tempApi, `${e.value.title}模板`);
        },
        s = async (l) => {
          let t = new FormData();
          t.append("file", l.file),
            t.append("isCover", p.value),
            await e.value.importApi(t),
            e.value.getTableList && e.value.getTableList(),
            (i.value = !1);
        },
        S = (l) => {
          const t = e.value.fileType.includes(l.type),
            _ = l.size / 1024 / 1024 < e.value.fileSize;
          return (
            t ||
              d({
                title: "温馨提示",
                message: "上传文件只能是 xls / xlsx 格式！",
                type: "warning",
              }),
            _ ||
              setTimeout(() => {
                d({
                  title: "温馨提示",
                  message: `上传文件大小不能超过 ${e.value.fileSize}MB！`,
                  type: "warning",
                });
              }, 0),
            t && _
          );
        },
        U = () => {
          d({
            title: "温馨提示",
            message: "最多只能上传一个文件！",
            type: "warning",
          });
        },
        V = () => {
          d({
            title: "温馨提示",
            message: `批量添加${e.value.title}失败，请您重新上传！`,
            type: "error",
          });
        },
        C = () => {
          d({
            title: "温馨提示",
            message: `批量添加${e.value.title}成功！`,
            type: "success",
          });
        };
      return (
        r({ acceptParams: u }),
        (l, t) => {
          const _ = n("el-button"),
            x = n("el-form-item"),
            E = n("upload-filled"),
            $ = n("el-icon"),
            B = n("el-upload"),
            I = n("el-switch"),
            L = n("el-form"),
            T = n("el-dialog");
          return (
            z(),
            O(
              T,
              {
                modelValue: i.value,
                "onUpdate:modelValue": t[1] || (t[1] = (b) => (i.value = b)),
                title: `批量添加${e.value.title}`,
                "destroy-on-close": !0,
                width: "580px",
                draggable: "",
              },
              {
                default: o(() => [
                  a(
                    L,
                    {
                      class: "drawer-multiColumn-form",
                      "label-width": "100px",
                    },
                    {
                      default: o(() => [
                        a(
                          x,
                          { label: "模板下载 :" },
                          {
                            default: o(() => [
                              a(
                                _,
                                { type: "primary", icon: k(D), onClick: m },
                                { default: o(() => [h(" 点击下载 ")]), _: 1 },
                                8,
                                ["icon"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        a(
                          x,
                          { label: "文件上传 :" },
                          {
                            default: o(() => [
                              a(
                                B,
                                {
                                  action: "#",
                                  class: "upload",
                                  drag: !0,
                                  limit: v.value,
                                  multiple: !0,
                                  "show-file-list": !0,
                                  "http-request": s,
                                  "before-upload": S,
                                  "on-exceed": U,
                                  "on-success": C,
                                  "on-error": V,
                                  accept: e.value.fileType.join(","),
                                },
                                {
                                  tip: o(() => [
                                    y(
                                      l.$slots,
                                      "tip",
                                      {},
                                      () => [
                                        w(
                                          "div",
                                          P,
                                          "请上传 .xls , .xlsx 标准格式文件，文件最大为 " +
                                            R(e.value.fileSize) +
                                            "M",
                                          1
                                        ),
                                      ],
                                      !0
                                    ),
                                  ]),
                                  default: o(() => [
                                    y(
                                      l.$slots,
                                      "empty",
                                      {},
                                      () => [
                                        a(
                                          $,
                                          { class: "el-icon--upload" },
                                          { default: o(() => [a(E)]), _: 1 }
                                        ),
                                        q,
                                      ],
                                      !0
                                    ),
                                  ]),
                                  _: 3,
                                },
                                8,
                                ["limit", "accept"]
                              ),
                            ]),
                            _: 3,
                          }
                        ),
                        a(
                          x,
                          { label: "数据覆盖 :" },
                          {
                            default: o(() => [
                              a(
                                I,
                                {
                                  modelValue: p.value,
                                  "onUpdate:modelValue":
                                    t[0] || (t[0] = (b) => (p.value = b)),
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 3,
                    }
                  ),
                ]),
                _: 3,
              },
              8,
              ["modelValue", "title"]
            )
          );
        }
      );
    },
  });
const Q = F(H, [["__scopeId", "data-v-dd116d8b"]]);
export { Q as I, N as u };

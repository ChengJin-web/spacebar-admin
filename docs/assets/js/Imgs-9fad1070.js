import {
  d as C,
  ai as Z,
  i as U,
  aj as Q,
  G as I,
  x as q,
  r as u,
  o as m,
  c as y,
  b as s,
  w as r,
  F as W,
  a as i,
  Y as $,
  v as F,
  ac as S,
  q as M,
  h as N,
  ab as f,
  p as P,
  g as H,
  Z as K,
  _ as G,
  U as X,
  u as x,
  ak as ee,
} from "./index-6f6f76a1.js";
import { u as Y } from "./upload-3c0fc1aa.js";
import { _ as A } from "./plugin-vue_export-helper-c27b6911.js";
const R = (c) => (P("data-v-bce28608"), (c = c()), H(), c),
  le = { class: "upload-box" },
  ae = ["src"],
  se = R(() => i("span", null, "编辑", -1)),
  te = R(() => i("span", null, "查看", -1)),
  oe = R(() => i("span", null, "删除", -1)),
  ie = { key: 1, class: "upload-empty" },
  ne = { class: "el-upload__tip" },
  de = C({ name: "UploadImg" }),
  ue = C({
    ...de,
    props: {
      imageUrl: { default: "" },
      api: {},
      drag: { type: Boolean, default: !0 },
      disabled: { type: Boolean, default: !1 },
      fileSize: { default: 5 },
      fileType: { default: () => ["image/jpeg", "image/png", "image/gif"] },
      height: { default: "150px" },
      width: { default: "150px" },
      borderRadius: { default: "8px" },
    },
    emits: ["update:imageUrl"],
    setup(c, { emit: b }) {
      const t = c;
      Z((l) => ({
        "7fdce1c8": l.width,
        "28515a91": l.height,
        "3b5d8dc8": l.borderRadius,
      }));
      const _ = U("id-" + Q()),
        g = U(!1),
        p = I(K, void 0),
        n = I(G, void 0),
        h = q(() => t.disabled || (p == null ? void 0 : p.disabled)),
        z = async (l) => {
          let o = new FormData();
          o.append("file", l.file);
          try {
            const e = t.api ?? Y,
              { data: a } = await e(o);
            b("update:imageUrl", a.fileUrl),
              n != null && n.prop && (p == null || p.validateField([n.prop]));
          } catch (e) {
            l.onError(e);
          }
        },
        E = () => {
          b("update:imageUrl", "");
        },
        T = () => {
          const l = document.querySelector(`#${_.value} .el-upload__input`);
          l && l.dispatchEvent(new MouseEvent("click"));
        },
        D = (l) => {
          const o = l.size / 1024 / 1024 < t.fileSize,
            e = t.fileType.includes(l.type);
          return (
            e ||
              f({
                title: "温馨提示",
                message: "上传图片不符合所需的格式！",
                type: "warning",
              }),
            o ||
              setTimeout(() => {
                f({
                  title: "温馨提示",
                  message: `上传图片大小不能超过 ${t.fileSize}M！`,
                  type: "warning",
                });
              }, 0),
            e && o
          );
        },
        B = () => {
          f({ title: "温馨提示", message: "图片上传成功！", type: "success" });
        },
        k = () => {
          f({
            title: "温馨提示",
            message: "图片上传失败，请您重新上传！",
            type: "error",
          });
        };
      return (l, o) => {
        const e = u("Edit"),
          a = u("el-icon"),
          d = u("ZoomIn"),
          w = u("Delete"),
          L = u("Plus"),
          V = u("el-upload"),
          j = u("el-image-viewer");
        return (
          m(),
          y("div", le, [
            s(
              V,
              {
                id: _.value,
                action: "#",
                class: M([
                  "upload",
                  h.value ? "disabled" : "",
                  l.drag ? "no-border" : "",
                ]),
                multiple: !1,
                disabled: h.value,
                "show-file-list": !1,
                "http-request": z,
                "before-upload": D,
                "on-success": B,
                "on-error": k,
                drag: l.drag,
                accept: l.fileType.join(","),
              },
              {
                default: r(() => [
                  l.imageUrl
                    ? (m(),
                      y(
                        W,
                        { key: 0 },
                        [
                          i(
                            "img",
                            { src: l.imageUrl, class: "upload-image" },
                            null,
                            8,
                            ae
                          ),
                          i(
                            "div",
                            {
                              class: "upload-handle",
                              onClick: o[1] || (o[1] = F(() => {}, ["stop"])),
                            },
                            [
                              h.value
                                ? $("", !0)
                                : (m(),
                                  y(
                                    "div",
                                    {
                                      key: 0,
                                      class: "handle-icon",
                                      onClick: T,
                                    },
                                    [
                                      s(a, null, {
                                        default: r(() => [s(e)]),
                                        _: 1,
                                      }),
                                      se,
                                    ]
                                  )),
                              i(
                                "div",
                                {
                                  class: "handle-icon",
                                  onClick:
                                    o[0] || (o[0] = (v) => (g.value = !0)),
                                },
                                [
                                  s(a, null, {
                                    default: r(() => [s(d)]),
                                    _: 1,
                                  }),
                                  te,
                                ]
                              ),
                              h.value
                                ? $("", !0)
                                : (m(),
                                  y(
                                    "div",
                                    {
                                      key: 1,
                                      class: "handle-icon",
                                      onClick: E,
                                    },
                                    [
                                      s(a, null, {
                                        default: r(() => [s(w)]),
                                        _: 1,
                                      }),
                                      oe,
                                    ]
                                  )),
                            ]
                          ),
                        ],
                        64
                      ))
                    : (m(),
                      y("div", ie, [
                        S(
                          l.$slots,
                          "empty",
                          {},
                          () => [
                            s(a, null, { default: r(() => [s(L)]), _: 1 }),
                          ],
                          !0
                        ),
                      ])),
                ]),
                _: 3,
              },
              8,
              ["id", "class", "disabled", "drag", "accept"]
            ),
            i("div", ne, [S(l.$slots, "tip", {}, void 0, !0)]),
            g.value
              ? (m(),
                N(
                  j,
                  {
                    key: 0,
                    "url-list": [l.imageUrl],
                    onClose: o[2] || (o[2] = (v) => (g.value = !1)),
                  },
                  null,
                  8,
                  ["url-list"]
                ))
              : $("", !0),
          ])
        );
      };
    },
  });
const $e = A(ue, [["__scopeId", "data-v-bce28608"]]),
  J = (c) => (P("data-v-3654f2fd"), (c = c()), H(), c),
  ce = { class: "upload-box" },
  pe = { class: "upload-empty" },
  re = ["src"],
  _e = ["onClick"],
  me = J(() => i("span", null, "查看", -1)),
  fe = ["onClick"],
  ge = J(() => i("span", null, "删除", -1)),
  ve = { class: "el-upload__tip" },
  ye = C({ name: "UploadImgs" }),
  he = C({
    ...ye,
    props: {
      fileList: { default: () => [] },
      api: {},
      drag: { type: Boolean, default: !0 },
      disabled: { type: Boolean, default: !1 },
      limit: { default: 5 },
      fileSize: { default: 5 },
      fileType: { default: () => ["image/jpeg", "image/png", "image/gif"] },
      height: { default: "150px" },
      width: { default: "150px" },
      borderRadius: { default: "8px" },
    },
    emits: ["update:fileList"],
    setup(c, { emit: b }) {
      const t = c;
      Z((e) => ({
        "17c33460": e.borderRadius,
        "11e7a384": e.width,
        "113dd329": e.height,
      }));
      const _ = I(K, void 0),
        g = I(G, void 0),
        p = q(() => t.disabled || (_ == null ? void 0 : _.disabled)),
        n = U(t.fileList);
      X(
        () => t.fileList,
        (e) => {
          n.value = e;
        }
      );
      const h = (e) => {
          const a = e.size / 1024 / 1024 < t.fileSize,
            d = t.fileType.includes(e.type);
          return (
            d ||
              f({
                title: "温馨提示",
                message: "上传图片不符合所需的格式！",
                type: "warning",
              }),
            a ||
              setTimeout(() => {
                f({
                  title: "温馨提示",
                  message: `上传图片大小不能超过 ${t.fileSize}M！`,
                  type: "warning",
                });
              }, 0),
            d && a
          );
        },
        z = async (e) => {
          let a = new FormData();
          a.append("file", e.file);
          try {
            const d = t.api ?? Y,
              { data: w } = await d(a);
            e.onSuccess(w);
          } catch (d) {
            e.onError(d);
          }
        },
        E = (e, a) => {
          e &&
            ((a.url = e.fileUrl),
            b("update:fileList", n.value),
            g != null && g.prop && (_ == null || _.validateField([g.prop])),
            f({
              title: "温馨提示",
              message: "图片上传成功！",
              type: "success",
            }));
        },
        T = (e) => {
          (n.value = n.value.filter(
            (a) => a.url !== e.url || a.name !== e.name
          )),
            b("update:fileList", n.value);
        },
        D = () => {
          f({
            title: "温馨提示",
            message: "图片上传失败，请您重新上传！",
            type: "error",
          });
        },
        B = () => {
          f({
            title: "温馨提示",
            message: `当前最多只能上传 ${t.limit} 张图片，请移除后上传！`,
            type: "warning",
          });
        },
        k = U(""),
        l = U(!1),
        o = (e) => {
          (k.value = e.url), (l.value = !0);
        };
      return (e, a) => {
        const d = u("el-icon"),
          w = u("ZoomIn"),
          L = u("Delete"),
          V = u("el-upload"),
          j = u("el-image-viewer");
        return (
          m(),
          y("div", ce, [
            s(
              V,
              {
                "file-list": n.value,
                "onUpdate:fileList": a[1] || (a[1] = (v) => (n.value = v)),
                action: "#",
                "list-type": "picture-card",
                class: M([
                  "upload",
                  p.value ? "disabled" : "",
                  e.drag ? "no-border" : "",
                ]),
                multiple: !0,
                disabled: p.value,
                limit: e.limit,
                "http-request": z,
                "before-upload": h,
                "on-exceed": B,
                "on-success": E,
                "on-error": D,
                drag: e.drag,
                accept: e.fileType.join(","),
              },
              {
                file: r(({ file: v }) => [
                  i("img", { src: v.url, class: "upload-image" }, null, 8, re),
                  i(
                    "div",
                    {
                      class: "upload-handle",
                      onClick: a[0] || (a[0] = F(() => {}, ["stop"])),
                    },
                    [
                      i(
                        "div",
                        { class: "handle-icon", onClick: (O) => o(v) },
                        [s(d, null, { default: r(() => [s(w)]), _: 1 }), me],
                        8,
                        _e
                      ),
                      p.value
                        ? $("", !0)
                        : (m(),
                          y(
                            "div",
                            {
                              key: 0,
                              class: "handle-icon",
                              onClick: (O) => T(v),
                            },
                            [
                              s(d, null, { default: r(() => [s(L)]), _: 1 }),
                              ge,
                            ],
                            8,
                            fe
                          )),
                    ]
                  ),
                ]),
                default: r(() => [
                  i("div", pe, [
                    S(
                      e.$slots,
                      "empty",
                      {},
                      () => [
                        s(d, null, { default: r(() => [s(x(ee))]), _: 1 }),
                      ],
                      !0
                    ),
                  ]),
                ]),
                _: 3,
              },
              8,
              ["file-list", "class", "disabled", "limit", "drag", "accept"]
            ),
            i("div", ve, [S(e.$slots, "tip", {}, void 0, !0)]),
            l.value
              ? (m(),
                N(
                  j,
                  {
                    key: 0,
                    "url-list": [k.value],
                    onClose: a[2] || (a[2] = (v) => (l.value = !1)),
                  },
                  null,
                  8,
                  ["url-list"]
                ))
              : $("", !0),
          ])
        );
      };
    },
  });
const ke = A(he, [["__scopeId", "data-v-3654f2fd"]]);
export { ke as U, $e as a };

import { U as x, a as f } from "./Imgs-1b983a69.js";
import {
  d as B,
  i as n,
  Q as z,
  r as p,
  o as F,
  c as N,
  a as i,
  b as e,
  w as l,
  e as o,
  p as A,
  g as P,
} from "./index-6d941592.js";
import { _ as T } from "./plugin-vue_export-helper-c27b6911.js";
import "./upload-93b1c4f7.js";
const m = (b) => (A("data-v-abf66c18"), (b = b()), P(), b),
  E = { class: "upload content-box" },
  H = { class: "card img-box" },
  K = m(() => i("span", { class: "text" }, "多图片上传组件 🍓🍇🍈🍉", -1)),
  D = { class: "upload-list" },
  G = m(() => i("span", null, "请上传照片", -1)),
  J = m(() => i("span", null, "请上传照片", -1)),
  O = { class: "card img-box" },
  W = m(() => i("span", { class: "text" }, "单图片上传组件 🍓🍇🍈🍉", -1)),
  X = { class: "upload-list" },
  Y = m(() => i("span", null, "请上传头像", -1)),
  Z = m(() => i("span", null, "请上传 Banner 图", -1)),
  $ = { class: "form-box" },
  ee = { class: "card" },
  le = m(() => i("span", null, "请上传头像", -1)),
  ae = m(() => i("span", null, "请上传照片", -1)),
  te = { class: "card" },
  oe = m(() => i("span", null, "请上传头像", -1)),
  ie = m(() => i("span", null, "请上传照片", -1)),
  de = B({ name: "uploadFile" }),
  se = B({
    ...de,
    setup(b) {
      const h = n([
          { name: "img", url: "https://i.imgtg.com/2023/01/16/QRBHS.jpg" },
        ]),
        V = n([]),
        y = n(""),
        w = n(""),
        C = n(""),
        L = n(""),
        M = n("https://i.imgtg.com/2023/01/16/QRqMK.jpg"),
        Q = z({
          avatar: [{ required: !0, message: "请上传用户头像" }],
          photo: [{ required: !0, message: "请上传用户照片" }],
          username: [{ required: !0, message: "请填写用户姓名" }],
          idCard: [{ required: !0, message: "请填写身份证号" }],
          email: [{ required: !0, message: "请填写邮箱" }],
        }),
        s = n({
          avatar: "",
          photo: [
            { name: "img", url: "https://i.imgtg.com/2023/01/16/QR57a.jpg" },
          ],
          username: "",
          idCard: "",
          email: "",
        }),
        u = n({
          avatar: "",
          photo: [
            { name: "img", url: "https://i.imgtg.com/2023/01/16/QR57a.jpg" },
          ],
          username: "",
          idCard: "",
          email: "",
        }),
        k = n(),
        R = () => {
          k.value.validate((S) => {});
        };
      return (S, a) => {
        const g = p("Picture"),
          _ = p("el-icon"),
          r = p("el-descriptions-item"),
          q = p("el-descriptions"),
          U = p("Avatar"),
          I = p("el-alert"),
          d = p("el-form-item"),
          v = p("el-input"),
          c = p("el-button"),
          j = p("el-form");
        return (
          F(),
          N("div", E, [
            i("div", H, [
              K,
              i("div", D, [
                e(
                  x,
                  {
                    "file-list": h.value,
                    "onUpdate:fileList": a[0] || (a[0] = (t) => (h.value = t)),
                    drag: !1,
                    "border-radius": "50%",
                  },
                  {
                    empty: l(() => [
                      e(_, null, { default: l(() => [e(g)]), _: 1 }),
                      G,
                    ]),
                    tip: l(() => [
                      o(" 圆形组件，图片最大为 5M（禁止拖拽上传） "),
                    ]),
                    _: 1,
                  },
                  8,
                  ["file-list"]
                ),
                e(
                  x,
                  {
                    "file-list": V.value,
                    "onUpdate:fileList": a[1] || (a[1] = (t) => (V.value = t)),
                    width: "250px",
                  },
                  {
                    empty: l(() => [
                      e(_, null, { default: l(() => [e(g)]), _: 1 }),
                      J,
                    ]),
                    tip: l(() => [o(" 长方形组件（可拖拽上传） ")]),
                    _: 1,
                  },
                  8,
                  ["file-list"]
                ),
              ]),
              e(
                q,
                {
                  title: "配置项 📚（其它参数和单图上传组件相同）",
                  column: 1,
                  border: "",
                },
                {
                  default: l(() => [
                    e(
                      r,
                      { label: "fileList" },
                      {
                        default: l(() => [
                          o(
                            ' 双向绑定的 fileList 值，使用示例： v-model:file-list="fileList" '
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "limit" },
                      {
                        default: l(() => [o(" 最大图片上传数，默认为 5 张 ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            i("div", O, [
              W,
              i("div", X, [
                e(
                  f,
                  {
                    "image-url": y.value,
                    "onUpdate:imageUrl": a[2] || (a[2] = (t) => (y.value = t)),
                    "file-size": 3,
                  },
                  { tip: l(() => [o(" 上传图片最大为 3M ")]), _: 1 },
                  8,
                  ["image-url"]
                ),
                e(
                  f,
                  {
                    "image-url": w.value,
                    "onUpdate:imageUrl": a[3] || (a[3] = (t) => (w.value = t)),
                    drag: !1,
                    "border-radius": "50%",
                  },
                  {
                    empty: l(() => [
                      e(_, null, { default: l(() => [e(U)]), _: 1 }),
                      Y,
                    ]),
                    tip: l(() => [o(" 圆形组件（禁止拖拽上传） ")]),
                    _: 1,
                  },
                  8,
                  ["image-url"]
                ),
                e(
                  f,
                  {
                    "image-url": C.value,
                    "onUpdate:imageUrl": a[4] || (a[4] = (t) => (C.value = t)),
                    width: "250px",
                  },
                  {
                    empty: l(() => [
                      e(_, null, { default: l(() => [e(g)]), _: 1 }),
                      Z,
                    ]),
                    tip: l(() => [o(" 长方形组件（可拖拽上传） ")]),
                    _: 1,
                  },
                  8,
                  ["image-url"]
                ),
                e(
                  f,
                  {
                    "image-url": L.value,
                    "onUpdate:imageUrl": a[5] || (a[5] = (t) => (L.value = t)),
                    disabled: "",
                  },
                  { tip: l(() => [o(" 无图（禁用上传） ")]), _: 1 },
                  8,
                  ["image-url"]
                ),
                e(
                  f,
                  {
                    "image-url": M.value,
                    "onUpdate:imageUrl": a[6] || (a[6] = (t) => (M.value = t)),
                    disabled: "",
                  },
                  { tip: l(() => [o(" 有图（禁用编辑、删除） ")]), _: 1 },
                  8,
                  ["image-url"]
                ),
              ]),
              e(
                q,
                { title: "配置项 📚", column: 1, border: "" },
                {
                  default: l(() => [
                    e(
                      r,
                      { label: "imageUrl" },
                      {
                        default: l(() => [
                          o(
                            ' 双向绑定的 imageUrl 值，使用示例： v-model:image-url="avatar" '
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "api" },
                      {
                        default: l(() => [
                          o(
                            " 上传图片的 api 方法，一般项目上传都是同一个 api 方法，在组件里直接引入即可（非必传） "
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "drag" },
                      {
                        default: l(() => [
                          o(" 是否支持拖拽上传图片，默认为 true "),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "disabled" },
                      {
                        default: l(() => [
                          o(" 是否禁用 上传、删除 功能，可查看图片 "),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "fileSize" },
                      {
                        default: l(() => [
                          o(" 单个图片文件大小限制，默认为 5M "),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "fileType" },
                      {
                        default: l(() => [
                          o(
                            ' 图片类型限制，默认类型为 ["image/jpeg", "image/png", "image/gif"] '
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "height" },
                      {
                        default: l(() => [o(' 组件高度样式，默认为 "150px" ')]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "width" },
                      {
                        default: l(() => [o(' 组件宽度样式，默认为 "150px" ')]),
                        _: 1,
                      }
                    ),
                    e(
                      r,
                      { label: "borderRadius" },
                      {
                        default: l(() => [
                          o(' 组件边框圆角样式，默认为 "8px" '),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            i("div", $, [
              i("div", ee, [
                e(I, {
                  title:
                    "图片上传组件在 form 表单中使用，上传之后成功会自动重新校验",
                  type: "warning",
                  effect: "dark",
                  closable: !1,
                  class: "mb20",
                }),
                e(
                  j,
                  {
                    ref_key: "ruleFormRef",
                    ref: k,
                    "label-width": "100px",
                    "label-suffix": " :",
                    rules: Q,
                    model: s.value,
                  },
                  {
                    default: l(() => [
                      e(
                        d,
                        { label: "用户头像", prop: "avatar" },
                        {
                          default: l(() => [
                            e(
                              f,
                              {
                                "image-url": s.value.avatar,
                                "onUpdate:imageUrl":
                                  a[7] || (a[7] = (t) => (s.value.avatar = t)),
                                width: "135px",
                                height: "135px",
                                "file-size": 3,
                              },
                              {
                                empty: l(() => [
                                  e(_, null, {
                                    default: l(() => [e(U)]),
                                    _: 1,
                                  }),
                                  le,
                                ]),
                                tip: l(() => [o(" 头像大小不能超过 3M ")]),
                                _: 1,
                              },
                              8,
                              ["image-url"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "用户照片", prop: "photo" },
                        {
                          default: l(() => [
                            e(
                              x,
                              {
                                "file-list": s.value.photo,
                                "onUpdate:fileList":
                                  a[8] || (a[8] = (t) => (s.value.photo = t)),
                                limit: 3,
                                height: "140px",
                                width: "140px",
                                "border-radius": "50%",
                              },
                              {
                                empty: l(() => [
                                  e(_, null, {
                                    default: l(() => [e(g)]),
                                    _: 1,
                                  }),
                                  ae,
                                ]),
                                tip: l(() => [o(" 最多上传 3 张照片 ")]),
                                _: 1,
                              },
                              8,
                              ["file-list"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "用户姓名", prop: "username" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: s.value.username,
                                "onUpdate:modelValue":
                                  a[9] ||
                                  (a[9] = (t) => (s.value.username = t)),
                                placeholder: "请填写用户姓名",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "身份证号", prop: "idCard" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: s.value.idCard,
                                "onUpdate:modelValue":
                                  a[10] ||
                                  (a[10] = (t) => (s.value.idCard = t)),
                                placeholder: "请填写身份证号",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "邮箱", prop: "email" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: s.value.email,
                                "onUpdate:modelValue":
                                  a[11] || (a[11] = (t) => (s.value.email = t)),
                                placeholder: "请填写邮箱",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(d, null, {
                        default: l(() => [
                          e(c, null, { default: l(() => [o(" 取消 ")]), _: 1 }),
                          e(
                            c,
                            { type: "primary", onClick: R },
                            { default: l(() => [o(" 确定 ")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["rules", "model"]
                ),
              ]),
              i("div", te, [
                e(I, {
                  title:
                    "图片上传组件在 form 表单中使用，如果该表单禁用，则上传组件会自动禁用",
                  type: "warning",
                  effect: "dark",
                  closable: !1,
                  class: "mb20",
                }),
                e(
                  j,
                  {
                    "label-width": "100px",
                    "label-suffix": " :",
                    disabled: "",
                    model: u.value,
                  },
                  {
                    default: l(() => [
                      e(
                        d,
                        { label: "用户头像", prop: "avatar" },
                        {
                          default: l(() => [
                            e(
                              f,
                              {
                                "image-url": u.value.avatar,
                                "onUpdate:imageUrl":
                                  a[12] ||
                                  (a[12] = (t) => (u.value.avatar = t)),
                                width: "135px",
                                height: "135px",
                                "file-size": 3,
                              },
                              {
                                empty: l(() => [
                                  e(_, null, {
                                    default: l(() => [e(U)]),
                                    _: 1,
                                  }),
                                  oe,
                                ]),
                                tip: l(() => [o(" 头像大小不能超过 3M ")]),
                                _: 1,
                              },
                              8,
                              ["image-url"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "用户照片", prop: "photo" },
                        {
                          default: l(() => [
                            e(
                              x,
                              {
                                "file-list": u.value.photo,
                                "onUpdate:fileList":
                                  a[13] || (a[13] = (t) => (u.value.photo = t)),
                                height: "140px",
                                width: "140px",
                                "border-radius": "50%",
                              },
                              {
                                empty: l(() => [
                                  e(_, null, {
                                    default: l(() => [e(g)]),
                                    _: 1,
                                  }),
                                  ie,
                                ]),
                                tip: l(() => [o(" 照片大小不能超过 5M ")]),
                                _: 1,
                              },
                              8,
                              ["file-list"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "用户姓名", prop: "username" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: u.value.username,
                                "onUpdate:modelValue":
                                  a[14] ||
                                  (a[14] = (t) => (u.value.username = t)),
                                placeholder: "请填写用户姓名",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "身份证号", prop: "idCard" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: u.value.idCard,
                                "onUpdate:modelValue":
                                  a[15] ||
                                  (a[15] = (t) => (u.value.idCard = t)),
                                placeholder: "请填写身份证号",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        d,
                        { label: "邮箱", prop: "email" },
                        {
                          default: l(() => [
                            e(
                              v,
                              {
                                modelValue: u.value.email,
                                "onUpdate:modelValue":
                                  a[16] || (a[16] = (t) => (u.value.email = t)),
                                placeholder: "请填写邮箱",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e(d, null, {
                        default: l(() => [
                          e(c, null, { default: l(() => [o(" 取消 ")]), _: 1 }),
                          e(
                            c,
                            { type: "primary", onClick: R },
                            { default: l(() => [o(" 确定 ")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["model"]
                ),
              ]),
            ]),
          ])
        );
      };
    },
  });
const me = T(se, [["__scopeId", "data-v-abf66c18"]]);
export { me as default };

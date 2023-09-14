import { u as y } from "./useHandleData-7ff794fb.js";
import { I, u as A } from "./index-392086d3.js";
import {
  _ as N,
  g as P,
  u as q,
} from "./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-07c46a8d.js";
import { _ as E } from "./index.vue_vue_type_script_setup_true_name_ProTable_lang-a45d12b9.js";
import { T as H } from "./index-d284faae.js";
import { S as M } from "./index-1049ca12.js";
import {
  d as U,
  i as d,
  Q as k,
  T as j,
  r as C,
  o as Q,
  c as O,
  b as l,
  u as i,
  a as b,
  w as o,
  a0 as W,
  e as n,
  j as z,
  a3 as G,
  av as J,
  aQ as K,
  a1 as X,
  H as Y,
  a2 as Z,
  R as h,
  aw as ee,
} from "./index-6f6f76a1.js";
import {
  k as ae,
  g as te,
  a as le,
  d as oe,
  r as re,
  e as T,
  B as se,
  h as ie,
  i as ne,
} from "./user-cb000d76.js";
import "./plugin-vue_export-helper-c27b6911.js";
import "./Imgs-9fad1070.js";
import "./upload-3c0fc1aa.js";
import "./notData-2dc2117c.js";
const ue = { class: "main-box" },
  ce = { class: "table-box" },
  de = { class: "card mb10 pt0 pb0" },
  pe = b("i", null, null, -1),
  me = U({ name: "useSelectFilter" }),
  Re = U({
    ...me,
    setup(fe) {
      const r = d(),
        p = d(""),
        x = [
          { prop: "radio", label: "单选", width: 80 },
          { type: "index", label: "#", width: 80 },
          { prop: "username", label: "用户姓名", width: 120 },
          { prop: "gender", label: "性别", width: 120, sortable: !0, enum: P },
          { prop: "idCard", label: "身份证号" },
          { prop: "email", label: "邮箱" },
          { prop: "address", label: "居住地址" },
          {
            prop: "status",
            label: "用户状态",
            width: 120,
            sortable: !0,
            tag: !0,
            enum: q,
          },
          { prop: "createTime", label: "创建时间", width: 180, sortable: !0 },
          { prop: "operation", label: "操作", width: 330, fixed: "right" },
        ],
        v = k([
          {
            title: "用户状态(单)",
            key: "userStatus",
            options: [
              { label: "全部", value: "" },
              { label: "在职", value: "1", icon: "User" },
              { label: "待培训", value: "2", icon: "Bell" },
              { label: "待上岗", value: "3", icon: "Clock" },
              { label: "已离职", value: "4", icon: "CircleClose" },
              { label: "已退休", value: "5", icon: "CircleCheck" },
            ],
          },
          { title: "用户角色(多)", key: "userRole", multiple: !0, options: [] },
        ]);
      j(() => R());
      const R = async () => {
          const { data: e } = await ae();
          v[1].options = e;
        },
        m = d({ userStatus: "2", userRole: ["1", "3"] }),
        F = (e) => {
          h.success("请注意查看请求参数变化 🤔"),
            (r.value.pageable.pageNum = 1),
            (m.value = e);
        },
        f = k({ departmentId: ["11"] }),
        V = (e) => {
          h.success("请注意查看请求参数变化 🤔"),
            (r.value.pageable.pageNum = 1),
            (f.departmentId = e);
        },
        $ = () => {
          var e, a, t, u;
          (t = (e = r.value) == null ? void 0 : e.element) == null ||
            t.setCurrentRow((a = r.value) == null ? void 0 : a.tableData[3]),
            (p.value = (u = r.value) == null ? void 0 : u.tableData[3].id);
        },
        D = async (e) => {
          var a;
          await y(oe, { id: [e.id] }, `删除【${e.username}】用户`),
            (a = r.value) == null || a.getTableList();
        },
        B = async (e) => {
          var a;
          await y(re, { id: e.id }, `重置【${e.username}】用户密码`),
            (a = r.value) == null || a.getTableList();
        },
        L = async () => {
          ee.confirm("确认导出用户数据?", "温馨提示", { type: "warning" }).then(
            () => {
              var e;
              return A(
                T,
                "用户列表",
                (e = r.value) == null ? void 0 : e.searchParam
              );
            }
          );
        },
        g = d(null),
        S = () => {
          var a, t;
          const e = {
            title: "用户",
            tempApi: T,
            importApi: se,
            getTableList: (a = r.value) == null ? void 0 : a.getTableList,
          };
          (t = g.value) == null || t.acceptParams(e);
        },
        w = d(null),
        _ = (e, a = {}) => {
          var u, s;
          const t = {
            title: e,
            isView: e === "查看",
            row: { ...a },
            api: e === "新增" ? ie : e === "编辑" ? ne : void 0,
            getTableList: (u = r.value) == null ? void 0 : u.getTableList,
          };
          (s = w.value) == null || s.acceptParams(t);
        };
      return (e, a) => {
        const t = C("el-button"),
          u = C("el-radio");
        return (
          Q(),
          O("div", ue, [
            l(
              H,
              {
                title: "部门列表(多选)",
                multiple: "",
                label: "name",
                "request-api": i(te),
                "default-value": f.departmentId,
                onChange: V,
              },
              null,
              8,
              ["request-api", "default-value"]
            ),
            b("div", ce, [
              b("div", de, [
                l(
                  M,
                  { data: v, "default-values": m.value, onChange: F },
                  null,
                  8,
                  ["data", "default-values"]
                ),
              ]),
              l(
                E,
                {
                  ref_key: "proTable",
                  ref: r,
                  title: "用户列表",
                  "highlight-current-row": "",
                  columns: x,
                  "request-api": i(le),
                  "init-param": Object.assign(f, m.value),
                },
                {
                  tableHeader: o(() => [
                    l(
                      t,
                      {
                        type: "primary",
                        icon: i(W),
                        onClick: a[0] || (a[0] = (s) => _("新增")),
                      },
                      { default: o(() => [n(" 新增用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    l(
                      t,
                      { type: "primary", icon: i(z), plain: "", onClick: S },
                      { default: o(() => [n(" 批量添加用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    l(
                      t,
                      { type: "primary", icon: i(G), plain: "", onClick: L },
                      { default: o(() => [n(" 导出用户数据 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    l(
                      t,
                      { type: "primary", icon: i(J), plain: "", onClick: $ },
                      { default: o(() => [n(" 选中第四行 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                  ]),
                  radio: o((s) => [
                    l(
                      u,
                      {
                        modelValue: p.value,
                        "onUpdate:modelValue":
                          a[1] || (a[1] = (c) => (p.value = c)),
                        label: s.row.id,
                      },
                      { default: o(() => [pe]), _: 2 },
                      1032,
                      ["modelValue", "label"]
                    ),
                  ]),
                  operation: o((s) => [
                    l(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: i(K),
                        onClick: (c) => _("查看", s.row),
                      },
                      { default: o(() => [n(" 查看 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    l(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: i(X),
                        onClick: (c) => _("编辑", s.row),
                      },
                      { default: o(() => [n(" 编辑 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    l(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: i(Y),
                        onClick: (c) => B(s.row),
                      },
                      { default: o(() => [n(" 重置密码 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    l(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: i(Z),
                        onClick: (c) => D(s.row),
                      },
                      { default: o(() => [n(" 删除 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["request-api", "init-param"]
              ),
              l(N, { ref_key: "drawerRef", ref: w }, null, 512),
              l(I, { ref_key: "dialogRef", ref: g }, null, 512),
            ]),
          ])
        );
      };
    },
  });
export { Re as default };

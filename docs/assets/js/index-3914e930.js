import {
  d as x,
  D as E,
  i as y,
  Q as F,
  r as c,
  $ as I,
  o as p,
  c as Y,
  b as t,
  w as s,
  a4 as _,
  h as g,
  e as i,
  u as n,
  a0 as O,
  j,
  a3 as z,
  a2 as h,
  t as v,
  R as m,
  aQ as J,
  a1 as Q,
  H as q,
  F as G,
  aw as W,
} from "./index-6d941592.js";
import { u as f } from "./useHandleData-1b8d034c.js";
import { I as K, u as X } from "./index-75a8566f.js";
import { u as Z } from "./useAuthButtons-99873636.js";
import { _ as ee } from "./index.vue_vue_type_script_setup_true_name_ProTable_lang-b807f3e9.js";
import { _ as ae } from "./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-d95ad7f2.js";
import {
  a as te,
  b as le,
  c as re,
  d as T,
  r as se,
  j as ie,
  e as C,
  B as ne,
  h as oe,
  i as ue,
} from "./user-441ad02a.js";
import "./plugin-vue_export-helper-c27b6911.js";
import "./notData-2dc2117c.js";
import "./Imgs-1b983a69.js";
import "./upload-93b1c4f7.js";
const ce = { class: "table-box" },
  de = x({ name: "useProTable" }),
  xe = x({
    ...de,
    setup(pe) {
      const $ = E(),
        L = () => {
          $.push(
            `/proTable/useProTable/detail/${Math.random().toFixed(
              3
            )}?params=detail-page`
          );
        },
        o = y(),
        U = F({ type: 1 }),
        S = (e) => ({
          list: e.list,
          total: e.total,
          pageNum: e.pageNum,
          pageSize: e.pageSize,
        }),
        A = (e) => {
          let a = JSON.parse(JSON.stringify(e));
          return (
            a.createTime && (a.startTime = a.createTime[0]),
            a.createTime && (a.endTime = a.createTime[1]),
            delete a.createTime,
            te(a)
          );
        },
        { BUTTONS: D } = Z(),
        N = [
          { type: "selection", fixed: "left", width: 80 },
          { type: "index", label: "#", width: 80 },
          { type: "expand", label: "Expand", width: 100 },
          {
            prop: "username",
            label: "用户姓名",
            search: { el: "input" },
            render: (e) =>
              t(
                c("el-button"),
                {
                  type: "primary",
                  link: !0,
                  onClick: () => m.success("我是通过 tsx 语法渲染的内容"),
                },
                { default: () => [e.row.username] }
              ),
          },
          {
            prop: "gender",
            label: "性别",
            enum: le,
            search: { el: "select", props: { filterable: !0 } },
            fieldNames: { label: "genderLabel", value: "genderValue" },
          },
          {
            prop: "user.detail.age",
            label: "年龄",
            search: {
              render: ({ searchParam: e }) =>
                t("div", { class: "flx-center" }, [
                  t(
                    c("el-input"),
                    {
                      modelValue: e.minAge,
                      modelModifiers: { trim: !0 },
                      "onUpdate:modelValue": (a) => (e.minAge = a),
                      placeholder: "最小年龄",
                    },
                    null
                  ),
                  t("span", { class: "mr10 ml10" }, [i("-")]),
                  t(
                    c("el-input"),
                    {
                      modelValue: e.maxAge,
                      modelModifiers: { trim: !0 },
                      "onUpdate:modelValue": (a) => (e.maxAge = a),
                      placeholder: "最大年龄",
                    },
                    null
                  ),
                ]),
            },
          },
          { prop: "idCard", label: "身份证号", search: { el: "input" } },
          { prop: "email", label: "邮箱" },
          { prop: "address", label: "居住地址" },
          {
            prop: "status",
            label: "用户状态",
            enum: re,
            search: { el: "tree-select", props: { filterable: !0 } },
            fieldNames: { label: "userLabel", value: "userStatus" },
            render: (e) =>
              t(G, null, [
                D.value.status
                  ? t(
                      c("el-switch"),
                      {
                        "model-value": e.row.status,
                        "active-text": e.row.status ? "启用" : "禁用",
                        "active-value": 1,
                        "inactive-value": 0,
                        onClick: () => M(e.row),
                      },
                      null
                    )
                  : t(
                      c("el-tag"),
                      { type: e.row.status ? "success" : "danger" },
                      { default: () => [e.row.status ? "启用" : "禁用"] }
                    ),
              ]),
          },
          {
            prop: "createTime",
            label: "创建时间",
            headerRender: (e) =>
              t(
                c("el-button"),
                {
                  type: "primary",
                  onClick: () => m.success("我是通过 tsx 语法渲染的表头"),
                },
                { default: () => [e.column.label] }
              ),
            width: 180,
            search: {
              el: "date-picker",
              span: 2,
              props: {
                type: "datetimerange",
                valueFormat: "YYYY-MM-DD HH:mm:ss",
              },
              defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"],
            },
          },
          { prop: "operation", label: "操作", fixed: "right", width: 330 },
        ],
        V = async (e) => {
          var a;
          await f(T, { id: [e.id] }, `删除【${e.username}】用户`),
            (a = o.value) == null || a.getTableList();
        },
        B = async (e) => {
          var a, l;
          await f(T, { id: e }, "删除所选用户信息"),
            (a = o.value) == null || a.clearSelection(),
            (l = o.value) == null || l.getTableList();
        },
        R = async (e) => {
          var a;
          await f(se, { id: e.id }, `重置【${e.username}】用户密码`),
            (a = o.value) == null || a.getTableList();
        },
        M = async (e) => {
          var a;
          await f(
            ie,
            { id: e.id, status: e.status == 1 ? 0 : 1 },
            `切换【${e.username}】用户状态`
          ),
            (a = o.value) == null || a.getTableList();
        },
        H = async () => {
          W.confirm("确认导出用户数据?", "温馨提示", { type: "warning" }).then(
            () => {
              var e;
              return X(
                C,
                "用户列表",
                (e = o.value) == null ? void 0 : e.searchParam
              );
            }
          );
        },
        w = y(null),
        P = () => {
          var a, l;
          const e = {
            title: "用户",
            tempApi: C,
            importApi: ne,
            getTableList: (a = o.value) == null ? void 0 : a.getTableList,
          };
          (l = w.value) == null || l.acceptParams(e);
        },
        k = y(null),
        b = (e, a = {}) => {
          var d, r;
          const l = {
            title: e,
            isView: e === "查看",
            row: { ...a },
            api: e === "新增" ? oe : e === "编辑" ? ue : void 0,
            getTableList: (d = o.value) == null ? void 0 : d.getTableList,
          };
          (r = k.value) == null || r.acceptParams(l);
        };
      return (e, a) => {
        const l = c("el-button"),
          d = I("auth");
        return (
          p(),
          Y("div", ce, [
            t(
              ee,
              {
                ref_key: "proTable",
                ref: o,
                title: "用户列表",
                columns: N,
                "request-api": A,
                "init-param": U,
                "data-callback": S,
              },
              {
                tableHeader: s((r) => [
                  _(
                    (p(),
                    g(
                      l,
                      {
                        type: "primary",
                        icon: n(O),
                        onClick: a[0] || (a[0] = (u) => b("新增")),
                      },
                      { default: s(() => [i(" 新增用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "add"]]
                  ),
                  _(
                    (p(),
                    g(
                      l,
                      { type: "primary", icon: n(j), plain: "", onClick: P },
                      { default: s(() => [i(" 批量添加用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "batchAdd"]]
                  ),
                  _(
                    (p(),
                    g(
                      l,
                      { type: "primary", icon: n(z), plain: "", onClick: H },
                      { default: s(() => [i(" 导出用户数据 ")]), _: 1 },
                      8,
                      ["icon"]
                    )),
                    [[d, "export"]]
                  ),
                  t(
                    l,
                    { type: "primary", plain: "", onClick: L },
                    { default: s(() => [i(" To 子集详情页面 ")]), _: 1 }
                  ),
                  t(
                    l,
                    {
                      type: "danger",
                      icon: n(h),
                      plain: "",
                      disabled: !r.isSelected,
                      onClick: (u) => B(r.selectedListIds),
                    },
                    { default: s(() => [i(" 批量删除用户 ")]), _: 2 },
                    1032,
                    ["icon", "disabled", "onClick"]
                  ),
                ]),
                expand: s((r) => [i(v(r.row), 1)]),
                usernameHeader: s((r) => [
                  t(
                    l,
                    {
                      type: "primary",
                      onClick:
                        a[1] ||
                        (a[1] = (u) =>
                          n(m).success("我是通过作用域插槽渲染的表头")),
                    },
                    { default: s(() => [i(v(r.column.label), 1)]), _: 2 },
                    1024
                  ),
                ]),
                createTime: s((r) => [
                  t(
                    l,
                    {
                      type: "primary",
                      link: "",
                      onClick:
                        a[2] ||
                        (a[2] = (u) =>
                          n(m).success("我是通过作用域插槽渲染的内容")),
                    },
                    { default: s(() => [i(v(r.row.createTime), 1)]), _: 2 },
                    1024
                  ),
                ]),
                operation: s((r) => [
                  t(
                    l,
                    {
                      type: "primary",
                      link: "",
                      icon: n(J),
                      onClick: (u) => b("查看", r.row),
                    },
                    { default: s(() => [i(" 查看 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                  t(
                    l,
                    {
                      type: "primary",
                      link: "",
                      icon: n(Q),
                      onClick: (u) => b("编辑", r.row),
                    },
                    { default: s(() => [i(" 编辑 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                  t(
                    l,
                    {
                      type: "primary",
                      link: "",
                      icon: n(q),
                      onClick: (u) => R(r.row),
                    },
                    { default: s(() => [i(" 重置密码 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                  t(
                    l,
                    {
                      type: "primary",
                      link: "",
                      icon: n(h),
                      onClick: (u) => V(r.row),
                    },
                    { default: s(() => [i(" 删除 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["init-param"]
            ),
            t(ae, { ref_key: "drawerRef", ref: k }, null, 512),
            t(K, { ref_key: "dialogRef", ref: w }, null, 512),
          ])
        );
      };
    },
  });
export { xe as default };

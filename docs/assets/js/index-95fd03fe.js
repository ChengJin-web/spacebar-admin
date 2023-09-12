import { u as p } from "./useHandleData-1b8d034c.js";
import { _ as T } from "./index.vue_vue_type_script_setup_true_name_ProTable_lang-b807f3e9.js";
import {
  d as f,
  i as L,
  r as u,
  o as N,
  c as R,
  b as n,
  w as l,
  u as i,
  a0 as $,
  e as c,
  av as U,
  a2 as m,
  t as D,
  H as E,
  a as V,
  R as _,
} from "./index-6d941592.js";
import { a as A, b as B, c as H, d as b, r as P } from "./user-441ad02a.js";
import "./notData-2dc2117c.js";
import "./plugin-vue_export-helper-c27b6911.js";
const q = { class: "table-box" },
  M = V(
    "span",
    { style: { color: "var(--el-color-primary)" } },
    "我是插入在表格最后的内容。若表格有合计行，该内容会位于合计行之上。",
    -1
  ),
  j = f({ name: "complexProTable" }),
  X = f({
    ...j,
    setup(G) {
      const r = L(),
        h = [
          { type: "selection", width: 80 },
          { type: "index", label: "#", width: 80 },
          { type: "expand", label: "Expand", width: 100 },
          {
            prop: "base",
            label: "基本信息",
            headerRender: (e) =>
              n(
                u("el-button"),
                {
                  type: "primary",
                  onClick: () => _.success("我是通过 tsx 语法渲染的表头"),
                },
                { default: () => [e.column.label] }
              ),
            _children: [
              { prop: "username", label: "用户姓名", width: 110 },
              { prop: "user.detail.age", label: "年龄", width: 100 },
              {
                prop: "gender",
                label: "性别",
                width: 100,
                enum: B,
                fieldNames: { label: "genderLabel", value: "genderValue" },
              },
              {
                prop: "details",
                label: "详细资料",
                _children: [
                  { prop: "idCard", label: "身份证号" },
                  { prop: "email", label: "邮箱" },
                  { prop: "address", label: "居住地址" },
                ],
              },
            ],
          },
          {
            prop: "status",
            label: "用户状态",
            tag: !0,
            enum: H,
            fieldNames: { label: "userLabel", value: "userStatus" },
          },
          { prop: "createTime", label: "创建时间", width: 200 },
          { prop: "operation", label: "操作", fixed: "right", width: 230 },
        ],
        w = () => {
          var e, t, a;
          (a = (e = r.value) == null ? void 0 : e.element) == null ||
            a.setCurrentRow((t = r.value) == null ? void 0 : t.tableData[4]);
        },
        y = (e) => {
          const { columns: t } = e,
            a = [];
          return (
            t.forEach((s, o) => {
              if (o === 0) return (a[o] = "合计");
              a[o] = "N/A";
            }),
            a
          );
        },
        g = ({ rowIndex: e, columnIndex: t }) => {
          if (t === 3)
            return e % 2 === 0
              ? { rowspan: 2, colspan: 1 }
              : { rowspan: 0, colspan: 0 };
        },
        C = ({ rowIndex: e }) =>
          e === 2 ? "warning-row" : e === 6 ? "success-row" : "",
        v = (e, t) => {
          t.property == "radio" ||
            t.property == "operation" ||
            _.success("当前行被点击了！");
        },
        k = async (e) => {
          var t;
          await p(b, { id: [e.id] }, `删除【${e.username}】用户`),
            (t = r.value) == null || t.getTableList();
        },
        x = async (e) => {
          var t, a;
          await p(b, { id: e }, "删除所选用户信息"),
            (t = r.value) == null || t.clearSelection(),
            (a = r.value) == null || a.getTableList();
        },
        S = async (e) => {
          var t;
          await p(P, { id: e.id }, `重置【${e.username}】用户密码`),
            (t = r.value) == null || t.getTableList();
        };
      return (e, t) => {
        const a = u("el-button");
        return (
          N(),
          R("div", q, [
            n(
              T,
              {
                ref_key: "proTable",
                ref: r,
                title: "用户列表",
                "highlight-current-row": "",
                columns: h,
                "request-api": i(A),
                "row-class-name": C,
                "span-method": g,
                "show-summary": !0,
                "summary-method": y,
                onRowClick: v,
              },
              {
                tableHeader: l((s) => {
                  var o, d;
                  return [
                    n(
                      a,
                      {
                        type: "primary",
                        icon: i($),
                        onClick:
                          (d = (o = r.value) == null ? void 0 : o.element) ==
                          null
                            ? void 0
                            : d.toggleAllSelection,
                      },
                      { default: l(() => [c(" 全选 / 全不选 ")]), _: 1 },
                      8,
                      ["icon", "onClick"]
                    ),
                    n(
                      a,
                      { type: "primary", icon: i(U), plain: "", onClick: w },
                      { default: l(() => [c(" 选中第五行 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    n(
                      a,
                      {
                        type: "danger",
                        icon: i(m),
                        plain: "",
                        disabled: !s.isSelected,
                        onClick: (z) => x(s.selectedListIds),
                      },
                      { default: l(() => [c(" 批量删除用户 ")]), _: 2 },
                      1032,
                      ["icon", "disabled", "onClick"]
                    ),
                  ];
                }),
                expand: l((s) => [c(D(s.row), 1)]),
                operation: l((s) => [
                  n(
                    a,
                    {
                      type: "primary",
                      link: "",
                      icon: i(E),
                      onClick: (o) => S(s.row),
                    },
                    { default: l(() => [c(" 重置密码 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                  n(
                    a,
                    {
                      type: "primary",
                      link: "",
                      icon: i(m),
                      onClick: (o) => k(s.row),
                    },
                    { default: l(() => [c(" 删除 ")]), _: 2 },
                    1032,
                    ["icon", "onClick"]
                  ),
                ]),
                append: l(() => [M]),
                _: 1,
              },
              8,
              ["request-api"]
            ),
          ])
        );
      };
    },
  });
export { X as default };

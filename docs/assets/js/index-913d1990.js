import {
  _ as C,
  g as x,
} from "./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-6e68165f.js";
import { u as F } from "./useHandleData-35a647c9.js";
import { _ as $ } from "./index.vue_vue_type_script_setup_true_name_ProTable_lang-d6af1658.js";
import { T as E } from "./index-d58aab98.js";
import { I } from "./index-f8c017d5.js";
import {
  d as v,
  T as N,
  ab as g,
  i as n,
  Q as U,
  b as t,
  F as L,
  r as P,
  o as D,
  c as R,
  a as V,
  w as o,
  u as i,
  a0 as B,
  e as c,
  aQ as M,
  a1 as q,
  a2 as H,
  R as Q,
} from "./index-fcbc4c7a.js";
import {
  g as S,
  c as A,
  f as G,
  d as K,
  h as j,
  i as z,
} from "./user-56e95910.js";
import "./Imgs-ff247588.js";
import "./upload-56f753a6.js";
import "./plugin-vue_export-helper-c27b6911.js";
import "./notData-2dc2117c.js";
const J = { class: "main-box" },
  O = { class: "table-box" },
  W = v({ name: "treeProTable" }),
  ue = v({
    ...W,
    setup(X) {
      N(() => {
        w(),
          g({
            title: "温馨提示",
            message:
              "该页面 ProTable 数据不会自动请求，需等待 treeFilter 数据请求完成之后，才会触发表格请求。",
            type: "info",
            duration: 1e4,
          }),
          setTimeout(() => {
            g({
              title: "温馨提示",
              message:
                "该页面 ProTable 性别搜索框为远程数据搜索，详情可查看代码。",
              type: "info",
              duration: 1e4,
            });
          }, 0);
      });
      const u = n(),
        d = U({ departmentId: "" }),
        p = n([]),
        w = async () => {
          const { data: e } = await S();
          (p.value = e), (d.departmentId = p.value[1].id);
        },
        T = (e) => {
          Q.success("请注意查看请求参数变化 🤔"),
            (u.value.pageable.pageNum = 1),
            (d.departmentId = e);
        },
        m = n(!1),
        f = n([]),
        y = (e) => {
          (f.value.length = 0),
            e &&
              ((m.value = !0),
              setTimeout(() => {
                (m.value = !1),
                  f.value.push(...x.filter((a) => a.label.includes(e)));
              }, 500));
        },
        h = [
          { type: "index", label: "#", width: 80 },
          { prop: "username", label: "用户姓名" },
          {
            prop: "gender",
            label: "性别",
            sortable: !0,
            isFilterEnum: !1,
            enum: f.value,
            search: {
              el: "select",
              props: {
                placeholder: "请输入性别查询",
                filterable: !0,
                remote: !0,
                reserveKeyword: !0,
                loading: m,
                remoteMethod: y,
              },
            },
            render: (e) => t(L, null, [e.row.gender === 1 ? "男" : "女"]),
          },
          { prop: "idCard", label: "身份证号" },
          { prop: "email", label: "邮箱" },
          { prop: "address", label: "居住地址" },
          {
            prop: "status",
            label: "用户状态",
            sortable: !0,
            tag: !0,
            enum: A,
            search: { el: "tree-select" },
            fieldNames: { label: "userLabel", value: "userStatus" },
          },
          { prop: "createTime", label: "创建时间", width: 180 },
          { prop: "operation", label: "操作", width: 300, fixed: "right" },
        ],
        k = async (e) => {
          var a;
          await F(K, { id: [e.id] }, `删除【${e.username}】用户`),
            (a = u.value) == null || a.getTableList();
        },
        b = n(null),
        _ = (e, a = {}) => {
          var r, s;
          const l = {
            title: e,
            row: { ...a },
            isView: e === "查看",
            api: e === "新增" ? j : e === "编辑" ? z : void 0,
            getTableList: (r = u.value) == null ? void 0 : r.getTableList,
          };
          (s = b.value) == null || s.acceptParams(l);
        };
      return (e, a) => {
        const l = P("el-button");
        return (
          D(),
          R("div", J, [
            t(
              E,
              {
                label: "name",
                title: "部门列表(单选)",
                data: p.value,
                "default-value": d.departmentId,
                onChange: T,
              },
              null,
              8,
              ["data", "default-value"]
            ),
            V("div", O, [
              t(
                $,
                {
                  ref_key: "proTable",
                  ref: u,
                  title: "用户列表",
                  "row-key": "id",
                  indent: 20,
                  columns: h,
                  "request-api": i(G),
                  "request-auto": !1,
                  "init-param": d,
                  "search-col": { xs: 1, sm: 1, md: 2, lg: 3, xl: 3 },
                },
                {
                  tableHeader: o(() => [
                    t(
                      l,
                      {
                        type: "primary",
                        icon: i(B),
                        onClick: a[0] || (a[0] = (r) => _("新增")),
                      },
                      { default: o(() => [c(" 新增用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                  ]),
                  operation: o((r) => [
                    t(
                      l,
                      {
                        type: "primary",
                        link: "",
                        icon: i(M),
                        onClick: (s) => _("查看", r.row),
                      },
                      { default: o(() => [c(" 查看 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    t(
                      l,
                      {
                        type: "primary",
                        link: "",
                        icon: i(q),
                        onClick: (s) => _("编辑", r.row),
                      },
                      { default: o(() => [c(" 编辑 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    t(
                      l,
                      {
                        type: "primary",
                        link: "",
                        icon: i(H),
                        onClick: (s) => k(r.row),
                      },
                      { default: o(() => [c(" 删除 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["request-api", "init-param"]
              ),
              t(C, { ref_key: "drawerRef", ref: b }, null, 512),
              t(I, { ref: "dialogRef" }, null, 512),
            ]),
          ])
        );
      };
    },
  });
export { ue as default };
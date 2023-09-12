import { e as d, B as m } from "./user-441ad02a.js";
import {
  d as n,
  i as f,
  r as c,
  o as u,
  c as b,
  b as e,
  w as t,
  e as o,
  u as x,
  j as h,
  p as v,
  g as A,
  a as I,
} from "./index-6d941592.js";
import { I as y } from "./index-75a8566f.js";
import { _ as B } from "./plugin-vue_export-helper-c27b6911.js";
const k = (s) => (v("data-v-6d10b7c5"), (s = s()), A(), s),
  C = { class: "card content-box" },
  S = k(() => I("span", { class: "text" }, "批量添加数据 🍓🍇🍈🍉", -1)),
  g = n({ name: "batchImport" }),
  w = n({
    ...g,
    setup(s) {
      const p = f(),
        i = () => {
          let l = { title: "数据", tempApi: d, importApi: m };
          p.value.acceptParams(l);
        };
      return (l, N) => {
        const _ = c("el-button"),
          a = c("el-descriptions-item"),
          r = c("el-descriptions");
        return (
          u(),
          b("div", C, [
            S,
            e(
              _,
              { type: "primary", icon: x(h), onClick: i },
              { default: t(() => [o(" 批量添加数据 ")]), _: 1 },
              8,
              ["icon"]
            ),
            e(y, { ref_key: "importRef", ref: p }, null, 512),
            e(
              r,
              { title: "配置项（通过 ref 传递） 📚", column: 1, border: "" },
              {
                default: t(() => [
                  e(
                    a,
                    { label: "title" },
                    {
                      default: t(() => [
                        o(" 组件显示标题 && 上传成功之后提示信息 "),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    a,
                    { label: "fileSize" },
                    { default: t(() => [o(" 上传文件大小，默认为 5M ")]), _: 1 }
                  ),
                  e(
                    a,
                    { label: "fileType" },
                    {
                      default: t(() => [
                        o(
                          ' 上传文件类型限制，默认类型为 ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"] '
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    a,
                    { label: "tempApi" },
                    { default: t(() => [o(" 下载模板的 Api ")]), _: 1 }
                  ),
                  e(
                    a,
                    { label: "importApi" },
                    { default: t(() => [o(" 上传数据的 Api ")]), _: 1 }
                  ),
                  e(
                    a,
                    { label: "getTableList" },
                    {
                      default: t(() => [
                        o(" 上传数据成功之后，刷新表格数据的 Api "),
                      ]),
                      _: 1,
                    }
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
const U = B(w, [["__scopeId", "data-v-6d10b7c5"]]);
export { U as default };

import {
  d as t,
  x as u,
  o as x,
  c as d,
  a as p,
  B as g,
  r as c,
  b as e,
  w as a,
  e as l,
} from "./index-6d941592.js";
import { _ as f } from "./plugin-vue_export-helper-c27b6911.js";
const h = ["xlink:href"],
  v = t({ name: "SvgIcon" }),
  n = t({
    ...v,
    props: {
      name: {},
      prefix: { default: "icon" },
      iconStyle: { default: () => ({ width: "100px", height: "100px" }) },
    },
    setup(_) {
      const o = _,
        r = u(() => `#${o.prefix}-${o.name}`);
      return (s, i) => (
        x(),
        d(
          "svg",
          { style: g(s.iconStyle), "aria-hidden": "true" },
          [p("use", { "xlink:href": r.value }, null, 8, h)],
          4
        )
      );
    },
  }),
  y = { class: "card content-box" },
  b = { class: "icon-list" },
  S = t({ name: "svgIcon" }),
  w = t({
    ...S,
    setup(_) {
      return (o, r) => {
        const s = c("el-alert"),
          i = c("el-descriptions-item"),
          m = c("el-descriptions");
        return (
          x(),
          d("div", y, [
            e(s, {
              title:
                "SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons",
              type: "warning",
              closable: !1,
            }),
            p("div", b, [
              e(n, { name: "xianxingdaoyu" }),
              e(n, { name: "xianxingdiqiu" }),
              e(n, { name: "xianxingditu" }),
              e(n, { name: "xianxingfanchuan" }),
              e(n, { name: "xianxingfeiji" }),
              e(n, { name: "xianxinglvhangriji" }),
              e(n, { name: "xianxingtianqiyubao" }),
              e(n, { name: "xianxingxiangjipaizhao" }),
              e(n, { name: "xianxingxiarilengyin" }),
              e(n, { name: "xianxingyoulun" }),
              e(n, { name: "xianxingxiarilengyin" }),
            ]),
            e(
              m,
              { title: "配置项 📚", column: 1, border: "" },
              {
                default: a(() => [
                  e(
                    i,
                    { label: "name" },
                    {
                      default: a(() => [
                        l(
                          " 图标的名称，svg 图标必须存储在 src/assets/icons 目录下 "
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    i,
                    { label: "prefix" },
                    {
                      default: a(() => [l(' 图标的前缀，默认为 "icon" ')]),
                      _: 1,
                    }
                  ),
                  e(
                    i,
                    { label: "iconStyle" },
                    {
                      default: a(() => [
                        l(
                          ' 图标的样式，默认样式为 { width: "100px", height: "100px" } '
                        ),
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
const k = f(w, [["__scopeId", "data-v-9255bc47"]]);
export { k as default };

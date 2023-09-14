import { S as r } from "./index-1049ca12.js";
import {
  d as i,
  i as v,
  r as n,
  o as b,
  c as f,
  b as t,
  a as _,
  t as m,
  w as l,
  e as c,
  p as h,
  g as x,
} from "./index-6f6f76a1.js";
import { _ as y } from "./plugin-vue_export-helper-c27b6911.js";
const C = (e) => (h("data-v-067b0044"), (e = e()), x(), e),
  S = { class: "card content-box" },
  g = C(() => _("span", { class: "text" }, " 分类筛选器 🍓🍇🍈🍉", -1)),
  k = { class: "result" },
  V = i({ name: "selectFilter" }),
  I = i({
    ...V,
    setup(e) {
      const a = v({ state: "1", type: ["1", "3"] }),
        u = (s) => {
          a.value = s;
        },
        d = [
          {
            title: "物流状态(单)",
            key: "state",
            options: [
              { label: "全部", value: "" },
              { label: "已下单", value: "1", icon: "ShoppingCart" },
              { label: "已发货", value: "2", icon: "Van" },
              { label: "已签收", value: "3", icon: "Edit" },
              { label: "已退回", value: "4", icon: "Guide" },
              { label: "已完成", value: "5", icon: "CircleCheck" },
            ],
          },
          {
            title: "商品类型(多)",
            key: "type",
            multiple: !0,
            options: [
              { label: "全部", value: "" },
              { label: "食品类", value: "1" },
              { label: "服装类", value: "2" },
              { label: "家具类", value: "3" },
              { label: "日用品类", value: "4" },
            ],
          },
        ];
      return (s, w) => {
        const o = n("el-descriptions-item"),
          p = n("el-descriptions");
        return (
          b(),
          f("div", S, [
            g,
            t(r, { data: d, "default-values": a.value, onChange: u }, null, 8, [
              "default-values",
            ]),
            _("span", k, "返回值: " + m(a.value), 1),
            t(
              p,
              { title: "配置项 📚", column: 1, border: "" },
              {
                default: l(() => [
                  t(
                    o,
                    { label: "data" },
                    {
                      default: l(() => [
                        c(" 需要筛选的数据列表，详情请查看代码 "),
                      ]),
                      _: 1,
                    }
                  ),
                  t(
                    o,
                    { label: "defaultValues" },
                    { default: l(() => [c(" 默认选中的值 ")]), _: 1 }
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
const D = y(I, [["__scopeId", "data-v-067b0044"]]);
export { D as default };

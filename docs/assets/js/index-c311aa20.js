import {
  d as s,
  D as d,
  a5 as p,
  r as t,
  o as l,
  c as u,
  b as o,
  w as i,
  e as f,
  u as m,
  N as x,
  a6 as h,
  p as v,
  g as b,
  a as y,
} from "./index-6d941592.js";
import { _ as I } from "./plugin-vue_export-helper-c27b6911.js";
const N = (e) => (v("data-v-75f7df1a"), (e = e()), b(), e),
  S = { class: "card content-box" },
  k = N(() => y("span", { class: "text" }, " 菜单权限 🍓🍇🍈🍉", -1)),
  C = s({ name: "authMenu" }),
  g = s({
    ...C,
    setup(e) {
      const a = d(),
        n = p(),
        c = () => {
          n.setToken(""), a.push(h);
        };
      return (w, B) => {
        const _ = t("el-alert"),
          r = t("el-button");
        return (
          l(),
          u("div", S, [
            k,
            o(_, {
              title:
                "目前菜单权限使用动态路由实现，模拟后台根据不同用户角色返回对应路由，注意观察左侧菜单变化（admin 账号可查看所有菜单、user 账号只可查看部分菜单）",
              type: "success",
              closable: !1,
            }),
            o(
              r,
              { class: "mt20", type: "primary", icon: m(x), onClick: c },
              { default: i(() => [f(" 登录其他账号 ")]), _: 1 },
              8,
              ["icon"]
            ),
          ])
        );
      };
    },
  });
const V = I(g, [["__scopeId", "data-v-75f7df1a"]]);
export { V as default };

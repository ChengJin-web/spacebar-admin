import {
  d as y,
  r as p,
  o as a,
  c as m,
  a as l,
  b as t,
  w as e,
  e as s,
  t as d,
  u,
  F as b,
  f as v,
  p as B,
  g as T,
  h,
} from "./index-6f6f76a1.js";
import { _ as V } from "./plugin-vue_export-helper-c27b6911.js";
const _ = (o) => (B("data-v-9dfeab27"), (o = o()), T(), o),
  I = { class: "card mb10" },
  q = _(() => l("h4", { class: "title" }, "简介", -1)),
  z = { class: "text" },
  C = { class: "card mb10" },
  D = _(() => l("h4", { class: "title" }, "项目信息", -1)),
  N = { class: "card mb10" },
  P = _(() => l("h4", { class: "title" }, "生产环境依赖", -1)),
  E = { class: "card" },
  F = _(() => l("h4", { class: "title" }, "开发环境依赖", -1)),
  G = y({ name: "about" }),
  H = y({
    ...G,
    setup(o) {
      const { pkg: x, lastBuildTime: k } = {
          pkg: {
            dependencies: {
              "@element-plus/icons-vue": "^2.1.0",
              "@vueuse/core": "^10.3.0",
              "@wangeditor/editor": "^5.1.23",
              "@wangeditor/editor-for-vue": "^5.1.12",
              axios: "^1.4.0",
              dayjs: "^1.11.9",
              "driver.js": "^0.9.7",
              echarts: "^5.4.3",
              "echarts-liquidfill": "^3.1.0",
              "element-plus": "^2.3.4",
              md5: "^2.3.0",
              mitt: "^3.0.1",
              nprogress: "^0.2.0",
              pinia: "^2.1.6",
              "pinia-plugin-persistedstate": "^3.2.0",
              "print-js": "^1.6.0",
              qs: "^6.11.2",
              screenfull: "^6.0.2",
              sortablejs: "^1.15.0",
              vue: "^3.3.4",
              "vue-i18n": "^9.2.2",
              "vue-router": "^4.2.4",
              vuedraggable: "^4.1.0",
            },
            devDependencies: {
              "@commitlint/cli": "^17.6.7",
              "@commitlint/config-conventional": "^17.6.7",
              "@types/md5": "^2.3.2",
              "@types/nprogress": "^0.2.0",
              "@types/qs": "^6.9.7",
              "@types/sortablejs": "^1.15.1",
              "@typescript-eslint/eslint-plugin": "^6.2.1",
              "@typescript-eslint/parser": "^6.2.1",
              "@vitejs/plugin-vue": "^4.2.3",
              "@vitejs/plugin-vue-jsx": "^3.0.1",
              autoprefixer: "^10.4.14",
              "cz-git": "^1.7.0",
              czg: "^1.7.0",
              eslint: "^8.46.0",
              "eslint-config-prettier": "^8.9.0",
              "eslint-plugin-prettier": "^5.0.0",
              "eslint-plugin-vue": "^9.16.1",
              husky: "^8.0.3",
              "lint-staged": "^13.2.3",
              postcss: "^8.4.27",
              "postcss-html": "^1.5.0",
              prettier: "^3.0.0",
              "rollup-plugin-visualizer": "^5.9.2",
              sass: "^1.64.2",
              "standard-version": "^9.5.0",
              stylelint: "^15.10.2",
              "stylelint-config-html": "^1.1.0",
              "stylelint-config-recess-order": "^4.3.0",
              "stylelint-config-recommended-scss": "^12.0.0",
              "stylelint-config-recommended-vue": "^1.5.0",
              "stylelint-config-standard": "^34.0.0",
              "stylelint-config-standard-scss": "^10.0.0",
              typescript: "^5.1.6",
              "unplugin-vue-setup-extend-plus": "^1.0.0",
              vite: "^4.4.8",
              "vite-plugin-compression": "^0.5.1",
              "vite-plugin-eslint": "^1.8.1",
              "vite-plugin-html": "^3.2.0",
              "vite-plugin-pwa": "^0.16.4",
              "vite-plugin-svg-icons": "^2.0.1",
              "vue-tsc": "^1.8.8",
            },
            name: "spacebar-admin",
            version: "1.0.0",
          },
          lastBuildTime: "2023-09-13 17:08:33",
        },
        { dependencies: j, devDependencies: w, version: S } = x;
      return (L, A) => {
        const r = p("el-link"),
          c = p("el-tag"),
          i = p("el-descriptions-item"),
          f = p("el-descriptions");
        return (
          a(),
          m("div", null, [
            l("div", I, [
              q,
              l("span", z, [
                t(
                  r,
                  {
                    type: "primary",
                    href: "https://docs.spacebar.top",
                    target: "_blank",
                  },
                  { default: e(() => [s("Spacebar")]), _: 1 }
                ),
                s(
                  " 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。项目提供强大的 ProTable 组件在一定程度上提高您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、动态路由、按钮级别权限控制等功能。 "
                ),
              ]),
            ]),
            l("div", C, [
              D,
              t(
                f,
                { column: 2, border: "" },
                {
                  default: e(() => [
                    t(
                      i,
                      { label: "版本号", "label-align": "left" },
                      {
                        default: e(() => [
                          t(c, null, {
                            default: e(() => [s(d(u(S)), 1)]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                    t(
                      i,
                      { label: "发布时间", "label-align": "left" },
                      {
                        default: e(() => [
                          t(c, null, {
                            default: e(() => [s(d(u(k)), 1)]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                    t(
                      i,
                      { label: "Github", "label-align": "left" },
                      {
                        default: e(() => [
                          t(
                            r,
                            {
                              type: "primary",
                              href: "https://github.com/chengkoi/Spacebar",
                              target: "_blank",
                            },
                            { default: e(() => [s(" Github ")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    t(
                      i,
                      { label: "文档地址", "label-align": "left" },
                      {
                        default: e(() => [
                          t(
                            r,
                            {
                              type: "primary",
                              href: "https://docs.spacebar.top",
                              target: "_blank",
                            },
                            { default: e(() => [s(" 文档地址 ")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    t(
                      i,
                      { label: "预览地址", "label-align": "left" },
                      {
                        default: e(() => [
                          t(
                            r,
                            {
                              type: "primary",
                              href: "https://admin.spacebar.top",
                              target: "_blank",
                            },
                            { default: e(() => [s(" 预览地址 ")]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            l("div", N, [
              P,
              t(
                f,
                { column: 3, border: "" },
                {
                  default: e(() => [
                    (a(!0),
                    m(
                      b,
                      null,
                      v(
                        u(j),
                        (g, n) => (
                          a(),
                          h(
                            i,
                            { key: n, width: "400px", label: n },
                            {
                              default: e(() => [
                                t(
                                  c,
                                  { type: "info" },
                                  { default: e(() => [s(d(g), 1)]), _: 2 },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["label"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
            ]),
            l("div", E, [
              F,
              t(
                f,
                { column: 3, border: "" },
                {
                  default: e(() => [
                    (a(!0),
                    m(
                      b,
                      null,
                      v(
                        u(w),
                        (g, n) => (
                          a(),
                          h(
                            i,
                            { key: n, width: "400px", label: n },
                            {
                              default: e(() => [
                                t(
                                  c,
                                  { type: "info" },
                                  { default: e(() => [s(d(g), 1)]), _: 2 },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["label"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  });
const M = V(H, [["__scopeId", "data-v-9dfeab27"]]);
export { M as default };

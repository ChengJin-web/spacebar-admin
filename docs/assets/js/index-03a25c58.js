import { i as o } from "./index-0275a767.js";
import { u as r } from "./useEcharts-d27c4b0d.js";
import { d as t, i, T as n, o as l, c } from "./index-6f6f76a1.js";
import { _ as d } from "./plugin-vue_export-helper-c27b6911.js";
const p = t({ name: "lineChart" }),
  m = t({
    ...p,
    setup(u) {
      const e = i();
      return (
        n(() => {
          let a = o(e.value);
          r(a, {
            title: {
              text: "Stacked Area Chart",
              textStyle: { color: "#a1a1a1" },
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: { backgroundColor: "#6a7985" },
              },
            },
            legend: {
              data: [
                "Email",
                "Union Ads",
                "Video Ads",
                "Direct",
                "Search Engine",
              ],
              textStyle: { color: "#a1a1a1" },
            },
            toolbox: { feature: { saveAsImage: {} } },
            grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
            xAxis: [
              {
                type: "category",
                boundaryGap: !1,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisLabel: { color: "#a1a1a1" },
              },
            ],
            yAxis: [{ type: "value", axisLabel: { color: "#a1a1a1" } }],
            series: [
              {
                name: "Email",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: { focus: "series" },
                data: [120, 132, 101, 134, 90, 230, 210],
              },
              {
                name: "Union Ads",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: { focus: "series" },
                data: [220, 182, 191, 234, 290, 330, 310],
              },
              {
                name: "Video Ads",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: { focus: "series" },
                data: [150, 232, 201, 154, 190, 330, 410],
              },
              {
                name: "Direct",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: { focus: "series" },
                data: [320, 332, 301, 334, 390, 330, 320],
              },
              {
                name: "Search Engine",
                type: "line",
                stack: "Total",
                label: { show: !0, position: "top" },
                areaStyle: {},
                emphasis: { focus: "series" },
                data: [820, 932, 901, 934, 1290, 1330, 1320],
              },
            ],
          });
        }),
        (a, s) => (
          l(),
          c(
            "div",
            { ref_key: "echartsRef", ref: e, class: "card content-box" },
            null,
            512
          )
        )
      );
    },
  });
const h = d(m, [["__scopeId", "data-v-993fad90"]]);
export { h as default };

import { i as r } from "./index-0275a767.js";
import { u as i } from "./useEcharts-4eb125c3.js";
import { d as s, i as o, T as n, o as c, c as p } from "./index-fcbc4c7a.js";
import { _ as d } from "./plugin-vue_export-helper-c27b6911.js";
const m = s({ name: "columnChart" }),
  l = s({
    ...m,
    setup(u) {
      const e = o();
      return (
        n(() => {
          let a = r(e.value);
          i(a, {
            tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
            legend: { textStyle: { color: "#a1a1a1" } },
            grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
            xAxis: [
              {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisLabel: { color: "#a1a1a1" },
              },
            ],
            yAxis: [{ type: "value", axisLabel: { color: "#a1a1a1" } }],
            series: [
              {
                name: "Direct",
                type: "bar",
                emphasis: { focus: "series" },
                data: [320, 332, 301, 334, 390, 330, 320],
              },
              {
                name: "Email",
                type: "bar",
                stack: "Ad",
                emphasis: { focus: "series" },
                data: [120, 132, 101, 134, 90, 230, 210],
              },
              {
                name: "Union Ads",
                type: "bar",
                stack: "Ad",
                emphasis: { focus: "series" },
                data: [220, 182, 191, 234, 290, 330, 310],
              },
              {
                name: "Video Ads",
                type: "bar",
                stack: "Ad",
                emphasis: { focus: "series" },
                data: [150, 232, 201, 154, 190, 330, 410],
              },
              {
                name: "Search Engine",
                type: "bar",
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: { focus: "series" },
                markLine: {
                  lineStyle: { type: "dashed" },
                  data: [[{ type: "min" }, { type: "max" }]],
                },
              },
              {
                name: "Baidu",
                type: "bar",
                barWidth: 5,
                stack: "Search Engine",
                emphasis: { focus: "series" },
                data: [620, 732, 701, 734, 1090, 1130, 1120],
              },
              {
                name: "Google",
                type: "bar",
                stack: "Search Engine",
                emphasis: { focus: "series" },
                data: [120, 132, 101, 134, 290, 230, 220],
              },
              {
                name: "Bing",
                type: "bar",
                stack: "Search Engine",
                emphasis: { focus: "series" },
                data: [60, 72, 71, 74, 190, 130, 110],
              },
              {
                name: "Others",
                type: "bar",
                stack: "Search Engine",
                emphasis: { focus: "series" },
                data: [62, 82, 91, 84, 109, 110, 120],
              },
            ],
          });
        }),
        (a, t) => (
          c(),
          p(
            "div",
            { ref_key: "echartsRef", ref: e, class: "card content-box" },
            null,
            512
          )
        )
      );
    },
  });
const x = d(l, [["__scopeId", "data-v-f987d406"]]);
export { x as default };
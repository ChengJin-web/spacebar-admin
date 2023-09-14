import { i as o } from "./index-0275a767.js";
import { u as r } from "./useEcharts-d27c4b0d.js";
import { d as t, i as c, T as s, o as d, c as m } from "./index-6f6f76a1.js";
import { _ as l } from "./plugin-vue_export-helper-c27b6911.js";
const i = t({ name: "radarChart" }),
  _ = t({
    ...i,
    setup(p) {
      const e = c();
      return (
        s(() => {
          let a = o(e.value);
          r(a, {
            title: {
              text: "Basic Radar Chart",
              textStyle: { color: "#a1a1a1" },
            },
            legend: {
              data: ["Allocated Budget", "Actual Spending"],
              textStyle: { color: "#a1a1a1" },
            },
            radar: {
              indicator: [
                { name: "Sales", max: 6500 },
                { name: "Administration", max: 16e3 },
                { name: "Information Technology", max: 3e4 },
                { name: "Customer Support", max: 38e3 },
                { name: "Development", max: 52e3 },
                { name: "Marketing", max: 25e3 },
              ],
            },
            series: [
              {
                name: "Budget vs spending",
                type: "radar",
                data: [
                  {
                    value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3],
                    name: "Allocated Budget",
                  },
                  {
                    value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3],
                    name: "Actual Spending",
                  },
                ],
              },
            ],
          });
        }),
        (a, n) => (
          d(),
          m(
            "div",
            { ref_key: "echartsRef", ref: e, class: "card content-box" },
            null,
            512
          )
        )
      );
    },
  });
const v = l(_, [["__scopeId", "data-v-7ccd917a"]]);
export { v as default };

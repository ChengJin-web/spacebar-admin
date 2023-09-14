import { i as t } from "./index-0275a767.js";
import { u as n } from "./useEcharts-d27c4b0d.js";
import { d as o, i, T as l, o as s, c as d } from "./index-6f6f76a1.js";
import { _ as c } from "./plugin-vue_export-helper-c27b6911.js";
const m = o({ name: "nestedChart" }),
  u = o({
    ...m,
    setup(p) {
      const e = i();
      return (
        l(() => {
          let a = t(e.value);
          n(a, {
            tooltip: { trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
            legend: {
              data: [
                "Direct",
                "Marketing",
                "Search Engine",
                "Email",
                "Union Ads",
                "Video Ads",
                "Baidu",
                "Google",
                "Bing",
                "Others",
              ],
              textStyle: { color: "#a1a1a1" },
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                selectedMode: "single",
                radius: [0, "30%"],
                label: { position: "inner", fontSize: 14 },
                labelLine: { show: !1 },
                data: [
                  { value: 1548, name: "Search Engine" },
                  { value: 775, name: "Direct" },
                  { value: 679, name: "Marketing", selected: !0 },
                ],
              },
              {
                name: "Access From",
                type: "pie",
                radius: ["45%", "60%"],
                labelLine: { length: 30 },
                label: {
                  formatter: `{a|{a}}{abg|}
{hr|}
  {b|{b}：}{c}  {per|{d}%}  `,
                  backgroundColor: "#F6F8FC",
                  borderColor: "#8C8D8E",
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: { color: "#6E7079", lineHeight: 22, align: "center" },
                    hr: {
                      borderColor: "#8C8D8E",
                      width: "100%",
                      borderWidth: 1,
                      height: 0,
                    },
                    b: {
                      color: "#4C5058",
                      fontSize: 14,
                      fontWeight: "bold",
                      lineHeight: 33,
                    },
                    per: {
                      color: "#fff",
                      backgroundColor: "#4C5058",
                      padding: [3, 4],
                      borderRadius: 4,
                    },
                  },
                },
                data: [
                  { value: 1048, name: "Baidu" },
                  { value: 335, name: "Direct" },
                  { value: 310, name: "Email" },
                  { value: 251, name: "Google" },
                  { value: 234, name: "Union Ads" },
                  { value: 147, name: "Bing" },
                  { value: 135, name: "Video Ads" },
                  { value: 102, name: "Others" },
                ],
              },
            ],
          });
        }),
        (a, r) => (
          s(),
          d(
            "div",
            { ref_key: "echartsRef", ref: e, class: "card content-box" },
            null,
            512
          )
        )
      );
    },
  });
const b = c(u, [["__scopeId", "data-v-a8a25b63"]]);
export { b as default };

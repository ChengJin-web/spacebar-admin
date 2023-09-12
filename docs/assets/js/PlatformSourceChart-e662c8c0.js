import { i as f } from "./index-0275a767.js";
import { d as i, o as c, c as m } from "./index-6d941592.js";
import { _ as p } from "./plugin-vue_export-helper-c27b6911.js";
const u = { id: "PlatformSourceChart", class: "echarts" },
  d = i({
    __name: "PlatformSourceChart",
    setup(b, { expose: n }) {
      return (
        n({
          initChart: (r = {}) => {
            const a = document.getElementById("PlatformSourceChart"),
              o = f(a),
              s = {
                grid: { top: "0%", left: "2%", right: "2%", bottom: "0%" },
                tooltip: { trigger: "item", formatter: "{b} :  {c}人" },
                legend: {
                  show: !0,
                  top: "middle",
                  left: "20px",
                  icon: "circle",
                  orient: "vertical",
                  align: "auto",
                  itemWidth: 10,
                  textStyle: { color: "#fff" },
                  itemGap: 20,
                  formatter: function (t) {
                    let e = "";
                    return (
                      r.data.forEach((l) => {
                        l.name === t && (e = t + " --- " + l.percentage);
                      }),
                      e
                    );
                  },
                  data: r.data.map((t) => t.name),
                },
                series: [
                  {
                    type: "pie",
                    radius: ["60%", "85%"],
                    center: ["68%", "45%"],
                    color: [
                      "#0E7CE2",
                      "#FF8352",
                      "#E271DE",
                      "#F8456B",
                      "#00FFFF",
                      "#4AEAB0",
                    ],
                    itemStyle: { borderColor: "#031845", borderWidth: 10 },
                    data: r.data,
                    labelLine: { show: !1 },
                    label: { show: !1 },
                  },
                  {
                    type: "pie",
                    radius: ["20%", "28%"],
                    center: ["68%", "45%"],
                    color: ["#ffffff", "red"],
                    startAngle: 105,
                    data: [
                      {
                        value: 30,
                        name: "",
                        itemStyle: { color: "transparent" },
                      },
                      {
                        value: 5,
                        name: "",
                        itemStyle: { color: "transparent" },
                      },
                      {
                        value: 65,
                        name: "ddd",
                        itemStyle: { color: "#ffffff" },
                      },
                    ],
                    silent: !0,
                    labelLine: { show: !1 },
                    label: { show: !1 },
                  },
                  {
                    type: "pie",
                    radius: [0, "30%"],
                    center: ["68%", "45%"],
                    startAngle: 90,
                    data: [
                      {
                        value: 25,
                        name: "1",
                        itemStyle: {
                          color: "transparent",
                          borderWidth: 4,
                          borderColor: "#ffffff",
                        },
                      },
                      {
                        value: 75,
                        name: "2",
                        itemStyle: { color: "transparent" },
                      },
                    ],
                    selectedOffset: 10,
                    silent: !0,
                    labelLine: { show: !1 },
                    label: { show: !1 },
                  },
                  {
                    type: "pie",
                    radius: ["96%", "97%"],
                    center: ["68%", "45%"],
                    color: [
                      "#007afe",
                      "transparent",
                      "#007afe",
                      "transparent",
                      "#007afe",
                      "transparent",
                    ],
                    data: [
                      { value: 17, name: "11" },
                      { value: 17, name: "22" },
                      { value: 17, name: "33" },
                      { value: 17, name: "44" },
                      { value: 17, name: "55" },
                      { value: 17, name: "66" },
                    ],
                    silent: !0,
                    labelLine: { show: !1 },
                    label: { show: !1 },
                  },
                  {
                    type: "pie",
                    zlevel: 0,
                    silent: !0,
                    radius: ["45%", "46%"],
                    center: ["68%", "45%"],
                    z: 10,
                    label: { show: !1 },
                    labelLine: { show: !1 },
                    data: new Array(150)
                      .fill("")
                      .map((t, e) =>
                        e % 3 === 0
                          ? {
                              name: (e + 1).toString(),
                              value: 10,
                              itemStyle: {
                                color: "#fff",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)",
                              },
                            }
                          : {
                              name: (e + 1).toString(),
                              value: 25,
                              itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)",
                              },
                            }
                      ),
                  },
                  {
                    type: "pie",
                    zlevel: 0,
                    silent: !0,
                    radius: ["58%", "60%"],
                    center: ["68%", "45%"],
                    z: 10,
                    startAngle: 90,
                    label: { show: !1 },
                    color: ["red", "blue", "red", "blue"],
                    labelLine: { show: !1 },
                    data: [
                      {
                        name: "r1",
                        value: 25,
                        itemStyle: {
                          color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                              { offset: 0, color: "rgba(51,149,191,0.5)" },
                              { offset: 1, color: "rgba(51,149,191,0)" },
                            ],
                            global: !1,
                          },
                        },
                      },
                      {
                        name: "r2",
                        value: 25,
                        itemStyle: {
                          color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                              { offset: 0, color: "rgba(0,0,0,0)" },
                              { offset: 1, color: "rgba(51,149,191,0.5)" },
                            ],
                            global: !1,
                          },
                        },
                      },
                      {
                        name: "r3",
                        value: 25,
                        itemStyle: {
                          color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                              { offset: 0, color: "rgba(51,149,191,0)" },
                              { offset: 1, color: "rgba(51,149,191,0.5)" },
                            ],
                            global: !1,
                          },
                        },
                      },
                      {
                        name: "r4",
                        value: 25,
                        itemStyle: {
                          color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                              { offset: 0, color: "rgba(51,149,191,0.5)" },
                              { offset: 1, color: "rgba(0,0,0,0)" },
                            ],
                            global: !1,
                          },
                        },
                      },
                    ],
                  },
                ],
              };
            return o.setOption(s, !0), o;
          },
        }),
        (r, a) => (c(), m("div", u))
      );
    },
  });
const S = p(d, [["__scopeId", "data-v-98252e67"]]);
export { S as default };

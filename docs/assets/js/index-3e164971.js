import {
  d as r,
  Q as w,
  r as n,
  o as S,
  c as C,
  b as e,
  w as a,
  e as u,
  R as A,
  p as I,
  g as N,
  a as B,
} from "./index-6f6f76a1.js";
import { _ as O } from "./plugin-vue_export-helper-c27b6911.js";
const P = (s) => (I("data-v-d5707b80"), (s = s()), N(), s),
  h = { class: "card content-box" },
  z = P(() => B("span", { class: "text-gray-500" }, "-", -1)),
  E = r({ name: "basicForm" }),
  R = r({
    ...E,
    setup(s) {
      const l = w({
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: !1,
          type: [],
          resource: "",
          desc: "",
        }),
        f = () => {
          A.success("提交的数据为 : " + JSON.stringify(l));
        };
      return (Z, o) => {
        const i = n("el-input"),
          d = n("el-form-item"),
          _ = n("el-option"),
          b = n("el-select"),
          V = n("el-date-picker"),
          y = n("el-col"),
          v = n("el-time-picker"),
          x = n("el-switch"),
          p = n("el-checkbox"),
          g = n("el-checkbox-group"),
          m = n("el-radio"),
          k = n("el-radio-group"),
          c = n("el-button"),
          U = n("el-form");
        return (
          S(),
          C("div", h, [
            e(
              U,
              { model: l, "label-width": "140px" },
              {
                default: a(() => [
                  e(
                    d,
                    { label: "Activity name :" },
                    {
                      default: a(() => [
                        e(
                          i,
                          {
                            modelValue: l.name,
                            "onUpdate:modelValue":
                              o[0] || (o[0] = (t) => (l.name = t)),
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Activity zone :" },
                    {
                      default: a(() => [
                        e(
                          b,
                          {
                            modelValue: l.region,
                            "onUpdate:modelValue":
                              o[1] || (o[1] = (t) => (l.region = t)),
                            placeholder: "please select your zone",
                          },
                          {
                            default: a(() => [
                              e(_, { label: "Zone one", value: "shanghai" }),
                              e(_, { label: "Zone two", value: "beijing" }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Activity time :" },
                    {
                      default: a(() => [
                        e(
                          V,
                          {
                            modelValue: l.date1,
                            "onUpdate:modelValue":
                              o[2] || (o[2] = (t) => (l.date1 = t)),
                            type: "date",
                            placeholder: "Pick a date",
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                        e(
                          y,
                          { span: 1, class: "text-center" },
                          { default: a(() => [z]), _: 1 }
                        ),
                        e(
                          v,
                          {
                            modelValue: l.date2,
                            "onUpdate:modelValue":
                              o[3] || (o[3] = (t) => (l.date2 = t)),
                            placeholder: "Pick a time",
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Instant delivery :" },
                    {
                      default: a(() => [
                        e(
                          x,
                          {
                            modelValue: l.delivery,
                            "onUpdate:modelValue":
                              o[4] || (o[4] = (t) => (l.delivery = t)),
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Activity type :" },
                    {
                      default: a(() => [
                        e(
                          g,
                          {
                            modelValue: l.type,
                            "onUpdate:modelValue":
                              o[5] || (o[5] = (t) => (l.type = t)),
                          },
                          {
                            default: a(() => [
                              e(p, {
                                label: "Online activities",
                                name: "type",
                              }),
                              e(p, {
                                label: "Promotion activities",
                                name: "type",
                              }),
                              e(p, {
                                label: "Offline activities",
                                name: "type",
                              }),
                              e(p, {
                                label: "Simple brand exposure",
                                name: "type",
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Resources :" },
                    {
                      default: a(() => [
                        e(
                          k,
                          {
                            modelValue: l.resource,
                            "onUpdate:modelValue":
                              o[6] || (o[6] = (t) => (l.resource = t)),
                          },
                          {
                            default: a(() => [
                              e(m, { label: "Sponsor" }),
                              e(m, { label: "Venue" }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    d,
                    { label: "Activity form :" },
                    {
                      default: a(() => [
                        e(
                          i,
                          {
                            modelValue: l.desc,
                            "onUpdate:modelValue":
                              o[7] || (o[7] = (t) => (l.desc = t)),
                            type: "textarea",
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  e(d, null, {
                    default: a(() => [
                      e(
                        c,
                        { type: "primary", onClick: f },
                        { default: a(() => [u(" Create ")]), _: 1 }
                      ),
                      e(c, null, { default: a(() => [u("Cancel")]), _: 1 }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["model"]
            ),
          ])
        );
      };
    },
  });
const F = O(R, [["__scopeId", "data-v-d5707b80"]]);
export { F as default };
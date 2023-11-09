import { getDicts } from "@/api/modules/system/dict/data";
import { ref, toRefs } from "vue";

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref<T>({});
  return (() => {
    args.forEach(dictType => {
      res.value[dictType] = [];
      getDicts(dictType).then(resp => {
        res.value[dictType] = resp.data.map(p => ({
          label: p.dictLabel,
          value: p.dictValue,
          elTagType: p.listClass,
          elTagClass: p.cssClass
        }));
      });
    });
    return toRefs(res.value);
  })();
}

export const genderType = [
  { label: "男", value: 1 },
  { label: "女", value: 2 }
];

/**
 * @description：用户状态
 */
export const userStatus = [
  { label: "启用", value: 1, tagType: "success" },
  { label: "禁用", value: 0, tagType: "danger" }
];

import http from "@/api";

// 根据字典类型查询字典数据信息
export const getDicts = (dictType: string) => {
  return http.get("/system/dict/data/type/" + dictType);
};

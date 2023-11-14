import http from "@/api";
import qs from "qs";

// 根据字典类型查询字典数据信息
export const getDicts = (dictType: string) => {
  return http.get<T>("/system/dict/data/type/" + dictType);
};

// 查询字典数据列表
export function listData(query: any) {
  return http.get(`/system/dict/data/list?${qs.stringify(query)}`); // get 请求可以携带数组等复杂参数
}

// 查询字典数据详细
export function getData(dictCode: string) {
  return http.get(`/system/dict/data/list` + dictCode); // get 请求可以携带数组等复杂参数
}

// 新增字典数据
export function addData(params: string | object | undefined) {
  return http.post("/system/dict/data", params, { loading: false });
}

// 修改字典数据
export function updateData(params: object | undefined) {
  return http.put("/system/dict/data", params, { loading: false });
}

// 删除字典数据
export function delData(dictCode: string) {
  return http.delete("/system/dict/data" + dictCode);
}

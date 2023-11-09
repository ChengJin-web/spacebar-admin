import http from "@/api";

//  查询字典类型列表
export function listType(query) {
  return http.get("/system/dict/data/type/", { params: query });
}

//查询字典类型详细
export function getType(dictId) {
  return http.get("/system/dict/data/type/" + dictId);
}

//  新增字典类型
export function addType(data) {
  return http.post("/system/dict/data/type", data);
}

// 修改字典类型
export function updateType(data) {
  return http.put("/system/dict/data/type", data);
}

// 删除字典类型
export function delType(dictId) {
  return http.delete("/system/dict/data/type/" + dictId);
}

// 刷新字典缓存
export function refreshCache() {
  return http.delete("/system/dict/data/type/refreshCache");
}

//  获取字典选择框列表
export function optionselect() {
  return http.get("/system/dict/data/optionselect");
}

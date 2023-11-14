import { ResPage, User } from "@/api/interface/index";
import http from "@/api";

// 查询用户列表
export const listUser = (params: User.ReqUserParams) => {
  return http.get<ResPage<User.ResUserList>>("/system/user/list", params);
};

// 查询用户详细
export function getUser(userId: string | number | undefined) {
  return http.get<ResPage<User.ResUserList>>(
    `/system/user/${!userId || userId == "undefined" || userId == "null" ? "" : userId}`
  );
}

//  新增用户
export function addUser(data: string | object | undefined) {
  return http.post("/system/user", data);
}

// 修改用户
export function updateUser(data: object | undefined) {
  return http.put("/system/user", data);
}

// // 删除用户
export function delUser(userId: any) {
  return http.delete("/system/user/" + userId);
}

// 用户密码重置
export function resetUserPwd(data: object | undefined) {
  return http.put("/system/user/resetPwd", data);
}

// 用户状态修改
export function changeUserStatus(data: object | undefined) {
  return http.put("/system/user/changeStatus", data);
}
// export function changeUserStatus(userId, status) {
//   const data = {
//     userId,
//     status
//   }
//   return request({
//     url: '/system/user/changeStatus',
//     method: 'put',
//     data: data
//   })
// }

// // 查询用户个人信息
// export function getUserProfile() {
//   return request({
//     url: '/system/user/profile',
//     method: 'get'
//   })
// }

// // 修改用户个人信息
// export function updateUserProfile(data) {
//   return request({
//     url: '/system/user/profile',
//     method: 'put',
//     data: data
//   })
// }

// // 用户密码重置
// export function updateUserPwd(oldPassword, newPassword) {
//   const data = {
//     oldPassword,
//     newPassword
//   }
//   return request({
//     url: '/system/user/profile/updatePwd',
//     method: 'put',
//     params: data
//   })
// }

// // 用户头像上传
// export function uploadAvatar(data) {
//   return request({
//     url: '/system/user/profile/avatar',
//     method: 'post',
//     data: data
//   })
// }

// // 查询授权角色
// export function getAuthRole(userId) {
//   return request({
//     url: '/system/user/authRole/' + userId,
//     method: 'get'
//   })
// }

// // 保存授权角色
// export function updateAuthRole(data) {
//   return request({
//     url: '/system/user/authRole',
//     method: 'put',
//     params: data
//   })
// }

// 查询部门下拉树结构
export const getUserDepartment = () => {
  return http.get<User.ResDepartment[]>("/system/user/deptTree");
};
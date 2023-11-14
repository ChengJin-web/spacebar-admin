<template>
  <div class="main-box">
    <TreeFilter
      label="label"
      title="部门列表"
      :request-api="getUserDepartment"
      :default-value="initParam.deptId"
      @change="changeTreeFilter"
    />
    <div class="table-box">
      <ProTable
        ref="proTable"
        :columns="columns"
        :request-api="getTableList"
        :init-param="initParam"
        :data-callback="dataCallback"
        :search-col="{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" :icon="CirclePlus" plain @click="openDrawer('新增')">新增用户</el-button>
          <el-button type="danger" :icon="Delete" plain>删除</el-button>
          <el-button type="info" :icon="Upload" plain @click="batchAdd">批量添加用户</el-button>
          <el-button type="warning" :icon="Download" plain @click="downloadFile">导出用户数据</el-button>
          <el-button type="primary" plain @click="toDetail">To 平级详情页面</el-button>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <el-button
            v-show="scope.row.userName !== 'admin'"
            type="primary"
            link
            :icon="View"
            @click="openDrawer('查看', scope.row)"
            >查看
          </el-button>
          <el-button
            v-show="scope.row.userName !== 'admin'"
            type="primary"
            link
            :icon="EditPen"
            @click="openDrawer('编辑', scope.row)"
            >编辑
          </el-button>
          <el-button v-show="scope.row.userName !== 'admin'" type="primary" link :icon="Refresh" @click="resetPass(scope.row)">
            重置密码
          </el-button>
          <el-button v-show="scope.row.userName !== 'admin'" type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">
            删除
          </el-button>
        </template>
      </ProTable>
      <UserDrawer ref="drawerRef" />
      <ImportExcel ref="dialogRef" />
    </div>
  </div>
</template>
<script setup lang="tsx" name="useTreeFilter">
import { ref, reactive } from "vue";
import { User } from "@/api/interface";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";
import { useHandleData } from "@/hooks/useHandleData";
import { useDownload } from "@/hooks/useDownload";
import ProTable from "@/components/ProTable/index.vue";
import TreeFilter from "@/components/TreeFilter/index.vue";
import ImportExcel from "@/components/ImportExcel/index.vue";
import UserDrawer from "@/views/system/user/UserDrawer.vue";
import { ProTableInstance, ColumnProps } from "@/components/ProTable/interface";
import { CirclePlus, Delete, EditPen, Download, Upload, View, Refresh } from "@element-plus/icons-vue";
import { listUser, delUser, addUser, updateUser, resetUserPwd, changeUserStatus, getUser } from "@/api/modules/system/user";

import { exportUserInfo, BatchAddUser, getUserDepartment } from "@/api/modules/user";
import { useDict } from "@/utils/dict";
const { sys_normal_disable } = useDict("sys_normal_disable");

const router = useRouter();

const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  newParams.createTime && (newParams.startTime = newParams.createTime[0]);
  newParams.createTime && (newParams.endTime = newParams.createTime[1]);
  delete newParams.createTime;
  return listUser(newParams);
};

// 跳转详情页
const toDetail = () => {
  router.push(`/system/user/detail/123456?params=detail-page`);
};

// ProTable 实例
const proTable = ref<ProTableInstance>();

// 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
const initParam = reactive({ deptId: "" });

const dataCallback = (data: any) => {
  return {
    list: data.rows,
    total: data.total,
    pageNum: data.pageNum,
    pageSize: data.pageSize
  };
};

// 树形筛选切换
const changeTreeFilter = (val: string) => {
  proTable.value!.pageable.pageNum = 1;
  initParam.deptId = val;
};

// 表格配置项
const columns = reactive<ColumnProps<User.ResUserList>[]>([
  { prop: "userId", label: "用户编号", width: 100 },
  { prop: "userName", label: "用户账号", width: 120, search: { el: "input" } },
  { prop: "nickName", label: "用户昵称", width: 120 },
  { prop: "deptId", label: "部门", width: 120, sortable: true },
  { prop: "phonenumber", label: "手机号", search: { el: "input" } },
  { prop: "email", label: "邮箱" },
  {
    prop: "status",
    label: "用户状态",
    width: 120,
    enum: sys_normal_disable,
    search: { el: "tree-select", props: { filterable: true } },
    fieldNames: { label: "label", value: "value" },
    render: scope => {
      return (
        <>
          {
            <el-switch
              model-value={Number(scope.row.status)}
              active-text={Number(scope.row.status) ? "启用" : "禁用"}
              active-value={0}
              inactive-value={1}
              onClick={() => changeStatus(scope.row)}
            />
          }
        </>
      );
    }
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 180,
    search: {
      el: "date-picker",
      span: 2,
      props: { type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss" },
      defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
    }
  },
  { prop: "operation", label: "操作", width: 330, fixed: "right" }
]);

// 切换用户状态
const changeStatus = async (row: User.ResUserList) => {
  await useHandleData(
    changeUserStatus,
    { userId: row.userId, status: row.status == "1" ? "0" : "1 " },
    `切换【${row.userName}】用户状态`
  );
  proTable.value?.getTableList();
};

// 删除用户信息
const deleteAccount = async (params: User.ResUserList) => {
  await useHandleData(delUser, params.userId, `删除【${params.userName}】用户`);
  proTable.value?.getTableList();
};

// 重置用户密码
const resetPass = async (params: User.ResUserList) => {
  await useHandleData(
    resetUserPwd,
    { userId: params.userId, password: "spacebar@2023" },
    `重置【${params.userName}】用户密码为spacebar@2023`
  );
  proTable.value?.getTableList();
};

// 导出用户列表
const downloadFile = async () => {
  ElMessageBox.confirm("确认导出用户数据?", "温馨提示", { type: "warning" }).then(() =>
    useDownload(exportUserInfo, "用户列表", proTable.value?.searchParam)
  );
};

// 批量添加用户
const dialogRef = ref<InstanceType<typeof ImportExcel> | null>(null);
const batchAdd = () => {
  const params = {
    title: "用户",
    tempApi: exportUserInfo,
    importApi: BatchAddUser,
    getTableList: proTable.value?.getTableList
  };
  dialogRef.value?.acceptParams(params);
};

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof UserDrawer> | null>(null);
const openDrawer = async (title: string, row: Partial<User.ResUserList> = {}) => {
  const { posts, roles } = await getUser(row.userId);

  const params = {
    title,
    isView: title === "查看",
    row: { ...row, posts, roles },
    api: title === "新增" ? addUser : title === "编辑" ? updateUser : undefined,
    getTableList: proTable.value?.getTableList
  };
  drawerRef.value?.acceptParams(params);
};
</script>

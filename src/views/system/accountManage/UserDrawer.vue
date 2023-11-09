<template>
  <el-dialog v-model="drawerVisible" :title="`${drawerProps.title}用户`" width="30%" draggable>
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :inline="true"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <!-- <el-form-item label="用户头像" prop="avatar">
        <UploadImg v-model:image-url="drawerProps.row!.avatar" width="135px" height="135px" :file-size="3">
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <template #tip> 头像大小不能超过 3M </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="用户照片" prop="photo">
        <UploadImgs v-model:file-list="drawerProps.row!.photo" height="140px" width="140px" border-radius="50%">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip> 照片大小不能超过 5M </template>
        </UploadImgs>
      </el-form-item> -->
      <el-form-item label="用户昵称" prop="nickName">
        <el-input v-model="drawerProps.row.nickName" placeholder="请输入用户昵称" maxlength="30" />
      </el-form-item>
      <el-form-item label="归属部门" prop="deptId">
        <el-tree-select
          v-model="drawerProps.row!.deptId"
          :data="deptOptions"
          :props="{ value: 'id', label: 'label', children: 'children' }"
          value-key="id"
          placeholder="请选择归属部门"
          check-strictly
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenumber">
        <el-input v-model="drawerProps.row!.phonenumber" placeholder="请输入手机号码" maxlength="11" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="drawerProps.row!.email" placeholder="请输入邮箱" maxlength="50" />
      </el-form-item>
      <el-form-item label="用户账号" prop="userName">
        <el-input v-model="drawerProps.row!.userName" placeholder="请填写用户姓名" clearable></el-input>
      </el-form-item>
      <el-form-item v-if="drawerProps.row!.userId == undefined" label="用户密码" prop="password">
        <el-input v-model="drawerProps.row!.password" placeholder="请输入用户密码" type="password" maxlength="20" show-password />
      </el-form-item>
      <el-form-item label="用户性别" prop="sex">
        <el-select v-model="drawerProps.row!.sex" placeholder="请选择性别" clearable>
          <el-option v-for="item in sys_user_sex" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="drawerProps.row!.status">
          <el-radio v-for="dict in sys_normal_disable" :key="dict.value" :label="dict.value">
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="岗位">
        <el-select v-model="drawerProps.row!.postIds" multiple placeholder="请选择">
          <el-option
            v-for="item in postOptions"
            :key="item.postId"
            :label="item.postName"
            :value="item.postId"
            :disabled="item.status == 1"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="角色">
        <el-select v-model="drawerProps.row!.roleIds" multiple placeholder="请选择">
          <el-option
            v-for="item in roleOptions"
            :key="item.roleId"
            :label="item.roleName"
            :value="item.roleId"
            :disabled="item.status == 1"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="drawerProps.row!.remark" type="textarea" placeholder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="drawerVisible = false">取消</el-button>
        <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref, reactive } from "vue";
import { useDict } from "@/utils/dict";
import { ElMessage, FormInstance } from "element-plus";
import { User } from "@/api/interface";

const { sys_normal_disable, sys_user_sex } = useDict("sys_normal_disable", "sys_user_sex");

const rules = reactive({
  userName: [
    { required: true, message: "用户名称不能为空", trigger: "blur" },
    { min: 2, max: 20, message: "用户名称长度必须介于 2 和 20 之间", trigger: "blur" }
  ],
  nickName: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
  password: [
    { required: true, message: "用户密码不能为空", trigger: "blur" },
    { min: 5, max: 20, message: "用户密码长度必须介于 5 和 20 之间", trigger: "blur" }
  ],
  email: [{ type: "email", message: "请输入正确的邮箱地址", trigger: ["blur", "change"] }],
  phonenumber: [{ pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, message: "请输入正确的手机号码", trigger: "blur" }]
});

// 部门
const deptOptions: any[] = [];
// 岗位
const postOptions: any[] = [];
// 角色
const roleOptions: any[] = [];

interface DrawerProps {
  title: string;
  isView: boolean;
  row: Partial<User.ResUserList>;
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {}
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params;
  drawerVisible.value = true;
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>

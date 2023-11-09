<template>
  <div class="table-box">
    <ProTable ref="proTable" title="菜单列表" row-key="path" :indent="20" :columns="columns" :data="menuData">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" :icon="CirclePlus">新增菜单 </el-button>
      </template>
      <!-- 菜单图标 -->
      <template #icon="scope">
        <el-icon :size="18">
          <component :is="scope.row.meta.icon"></component>
        </el-icon>
      </template>
      <!-- 菜单操作 -->
      <template #operation>
        <el-button type="primary" link :icon="EditPen"> 编辑 </el-button>
        <el-button type="primary" link :icon="Delete"> 删除 </el-button>
      </template>
    </ProTable>
  </div>
</template>

<script setup lang="ts" name="menuMange">
import { ref } from "vue";
import { ColumnProps } from "@/components/ProTable/interface";
import { Delete, EditPen, CirclePlus } from "@element-plus/icons-vue";
import authMenuList from "@/assets/json/authMenuList.json";
import ProTable from "@/components/ProTable/index.vue";

const proTable = ref();

const menuData = ref(authMenuList.data);

// 表格配置项
const columns: ColumnProps[] = [
  { prop: "meta.title", label: "部门名称", align: "left", search: { el: "input" } },
  { prop: "meta.icon", label: "排序" },
  { prop: "name", label: "状态", search: { el: "input" } },
  { prop: "path", label: "创建时间" },
  { prop: "operation", label: "操作", width: 250, fixed: "right" }
];
</script>

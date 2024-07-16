<template>
  <div class="aaaa">
    组件测试：
    <el-button type="primary" @click="notify('测试按钮')">主要</el-button>
    <el-button type="warning" @click="notify('警告')">警告</el-button>
    <el-button type="danger" @click="notify('危险')">危险</el-button>
    <el-button type="info" @click="notify('信息')">信息</el-button>
    <el-button type="success" @click="notify('成功')">成功</el-button>
    <el-button @click="notify('普通')">普通</el-button>
  </div>
</template>

<script setup name="TestComponent" lang="ts">
const notify = (message = "") => {
  console.log("test");
  ElNotification({
    title: "被点了",
    message,
    type: "success",
  });
};
</script>

<style scoped lang="scss">
.aaaa {
  display: flex;
  justify-content: center;
  .el-button {
    font-size: 28px;
  }
}
</style>

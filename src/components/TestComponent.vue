<template>
  <div class="aaaa">
    组件测试：
    <el-button type="primary">测试按钮</el-button>
    <el-button type="warning">警告</el-button>
    <el-button type="danger">危险</el-button>
    <el-button type="info">信息</el-button>
    <el-button>普通</el-button>
  </div>
</template>

<script setup name="TestComponent" lang="ts"></script>

<style scoped lang="scss">
.aaaa {
  display: flex;
  justify-content: center;
  .el-button {
    font-size: 28px;
  }
}
</style>

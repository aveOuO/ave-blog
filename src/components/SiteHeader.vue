<template>
  <div class="tab-height bg-[#fc6423]">
    <div class="w-[1200px] mx-auto flex justify-between items-center">
      <div class="tab-height text-[30px] text-[#fff]">咸琅的博客</div>
      <div class="tab-height">
        <ul class="flex items-center mr-[-20px]">
          <li
            v-for="item in menuList"
            :key="item.name"
            class="text-[20px] tab-height menu-item mr-[20px] relative"
            :class="{ avtive: props.path === item.path }"
          >
            <el-link :underline="false" :href="item.path">
              {{ item.name }}
            </el-link>
            <div
              v-if="props.path === item.path"
              class="w-[5px] h-[5px] absolute bg-white rounded-full bottom-[10px] left-1/2 -translate-x-1/2"
            ></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ path: string }>();
const menuList = [
  { name: "首页", path: "/" },
  { name: "关于咸琅", path: "/about" },
  { name: "所有文章", path: "/archives" },
];
</script>

<style scoped lang="scss">
.tab-height {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.menu-item {
  a {
    color: #ddd;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      color: #fff;
    }
  }
}
.avtive {
  a {
    color: #fff;
  }
}
</style>

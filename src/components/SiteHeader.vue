<template>
  <div
    class="w-full transition-all ease-linear fixed tab-height"
    :class="currentClass"
  >
    <div class="w-[1200px] mx-auto flex justify-between items-center">
      <div class="tab-height text-[30px] text-[#fff]">弦琅的博客</div>
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
const props = withDefaults(defineProps<{ path?: string }>(), { path: "/" });
const menuList = [
  { name: "首页", path: "/" },
  { name: "关于弦琅", path: "/about" },
];

const SCROLL_Y = 20;
const DEFAULT_CLASS = "bg-[#fc6423] py-[5px] border-transparent ";
const ACTIVE_CLASS =
  "bg-[#fc6423]/40 py-[1px] border-gray-200 backdrop-blur-lg";
const currentClass = ref(DEFAULT_CLASS);

const onScroll = (scrollY) => {
  if (scrollY > SCROLL_Y) {
    return (currentClass.value = ACTIVE_CLASS);
  }
  currentClass.value = DEFAULT_CLASS;
};

let ticking = false;
const scrollEvent = () => {
  const scrollPos = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(() => {
      onScroll(scrollPos);
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollEvent);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollEvent);
});
</script>

<style scoped lang="scss">
.tab-height {
  min-height: 50px;
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
import type { Loading } from
'element-plus/es/components/loading/src/service.mjs';

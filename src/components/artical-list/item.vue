<template>
  <li
    class="mb-[20px] flex items-center border border-gray-200 border-solid p-[20px] transition-all hover:shadow-gray-700/60 hover:shadow-sm cursor-pointer"
    @click="handleItemClick"
  >
    <a ref="aLinkRef" v-show="false" :href="`/articals/${props.slug}`"></a>
    <div class="h-[122px] w-[220px] mr-[20px]">
      <img :src="props.cover" :alt="props.title" />
    </div>
    <div>
      <h1 class="text-xl font-bold">{{ props.title }}</h1>
      <p class="text-gray-500 mt-[10px] mb-[20px]">{{ props.desc }}</p>
      <p class="text-sm">{{ dayjs(props.date).format("YYYY-MM-DD") }}</p>
      <ul class="mr-[-5px] flex">
        <li v-for="(item, index) in props.tags" class="mr-[5px]">
          <ElTag
            effect="dark"
            :type="tagMap[index % tagMap.length]"
            class="mr-[5px]"
            >{{ item }}</ElTag
          >
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup name="ArticalItem" lang="ts">
import dayjs from "dayjs";

const tagMap = ["primary", "success", "info", "warning", "danger"];

const aLinkRef = ref();

interface ListItem {
  slug: string;
  title: string;
  desc: string;
  date: string;
  cover: string;
  tags: string[];
}
const props = defineProps<ListItem>();

const handleItemClick = () => {
  aLinkRef.value.click();
};
</script>

<style scoped></style>

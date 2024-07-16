<template>
  <ul class="mb-[-20px]">
    <ArticalItem
      v-for="item in props.list"
      :key="item.slug"
      v-bind="{ ...item }"
    />
  </ul>
</template>

<script setup name="ArticalList" lang="ts">
import ArticalItem from "./item.vue";

interface ListItem {
  slug: string;
  title: string;
  desc: string;
  date: string;
  cover: string;
  tags: string[];
}

const props = withDefaults(defineProps<{ list: ListItem[] }>(), {
  list: () => [],
});
</script>

<style scoped></style>

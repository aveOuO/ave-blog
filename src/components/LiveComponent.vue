<template>
  <div>
    <!-- <JsScript src="../src/assets/live2d-widget-0.9.0/autoload.js"></JsScript> -->
    <JsScript src="../src/assets/live2d-widget-0.9.0/autoload.js"></JsScript>
  </div>
</template>

<script setup lang="ts">
const JsScript = defineComponent({
  name: "JsScript",
  render: (props: { src: string }) =>
    h("script", { type: "text/javascript", src: props.src }),
});

const CssStyle = {
  render: (props: { href: string }) =>
    h("style", { rel: "stylesheet", href: props.href }),
};
</script>

<template>
  <div>
    <!-- <JsScript src="../src/assets/live2d-widget-0.9.0/autoload.js"></JsScript> -->
    <js-script
      src="https://fastly.jsdelivr.net/gh/aveOuO/ave-blog@main/src/assets/live2d-widget-0.9.0/autoload.js"
    ></js-script>
  </div>
</template>

<script setup lang="ts">
const JsScript = defineComponent({
  name: "JsScript",
  props: {
    src: String,
  },
  setup: (props) => {
    return () => h("script", { type: "text/javascript", src: props.src });
  },
});

const CssStyle = {
  render: (props: { href: string }) =>
    h("style", { rel: "stylesheet", href: props.href }),
};
</script>

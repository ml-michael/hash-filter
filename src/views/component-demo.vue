<template>
  <SectionPaddingTop />
  <div>
    <h1 :class="['text-center text-5xl', 'font-bold text-pink-500']">
      component-demo
    </h1>
  </div>
  <SectionPaddingBottom />
</template>

<script>
import SectionPaddingTop from "../components/SectionPaddingTop.vue";
import SectionPaddingBottom from "../components/SectionPaddingBottom.vue";
export default {
  name: "component-demo",
  data() {},
  components: { SectionPaddingTop, SectionPaddingBottom },
};
</script>

<style lang="scss"></style>

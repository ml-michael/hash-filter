<template>
  <SectionPaddingTop />
  <div>
    <h1 :class="['text-center text-5xl', 'font-bold text-pink-500']">
      component-demo
    </h1>

    <AccordionMenuItem :class="['mx-auto', 'my-5', 'text-white']" />
  </div>
  <SectionPaddingBottom />
</template>

<script>
import SectionPaddingTop from "../components/SectionPaddingTop.vue";
import SectionPaddingBottom from "../components/SectionPaddingBottom.vue";
import AccordionMenuItem from "../components/AccordionMenuItem.vue";
export default {
  name: "component-demo",
  data() {},
  components: { SectionPaddingTop, SectionPaddingBottom, AccordionMenuItem },
};
</script>

<style lang="scss"></style>

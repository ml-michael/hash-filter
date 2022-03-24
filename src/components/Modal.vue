<template>
  <div
    :class="[
      'fixed top-0 left-0',
      'h-screen w-screen',
      'p-5',
      'flex items-center justify-center',
      'transition-all duration-300',
      //   true 的話縮放為最大化，false 的話縮放到 0，也就是消失
      showed ? 'scale-100' : 'scale-0',
    ]"
  >
    <!-- Modal-Overlay -->
    <div class="absolute top-0 left-0 h-full w-full bg-black/50" />

    <!-- Modal-Window -->
    <div class="z-10 w-full max-w-sm overflow-hidden rounded-md bg-white">
      <div class="flex items-center justify-between border-b-2 p-3">
        <div class="font-bold text-gray-700">{{ title }}</div>
        <div
          class="h-7 w-7 cursor-pointer rounded-md p-1 transition-all hover:bg-gray-200 active:scale-90"
          @click="closing()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div>
        <slot name="itemContent">
          <div class="p-3">
            <slot name="itemText">{{ itemText }}</slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: {},
    title: {
      default: "注意",
    },
  },
  data() {
    return {
      showed: true,
    };
  },
  mounted() {
    this.showed = this.showModal;
  },
  watch: {
    showModal(oldVal, newVal) {
      this.showed = newVal;
    },
  },
  methods: {
    closing() {
      this.showed = false;
      this.$emit("closing");
    },
  },
};
</script>

<style lang="scss"></style>

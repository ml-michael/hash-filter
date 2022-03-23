<template>
  <div
    :class="[
      'flex gap-2',
      'px-6 py-3',
      'rounded-md font-bold',
      'text-white',
      colorSelector,
      'hover:scale-105 active:scale-95',
      'transition-all',
      'cursor-pointer',
    ]"
  >
    <slot name="iconLeft" />
    {{ btnText }}
    <slot name="iconRight" />
  </div>
</template>

<script>
export default {
  name: "btn",
  props: {
    btnText: {
      default: "按鈕",
    },
    color: {
      default: "pink",
    },
  },
  computed: {
    colorSelector() {
      return {
        pink: "bg-pink-400 hover:bg-pink-300 active:bg-pink-500",
        red: "bg-red-400 hover:bg-red-300 active:bg-red-500",
        blue: "bg-blue-400 hover:bg-blue-300 active:bg-blue-500",
        gray: "bg-gray-400 hover:bg-gray-300 active:bg-gray-500",
      }[this.color];
    },
  },
};
</script>

<style lang="scss"></style>

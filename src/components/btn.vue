<template>
  <div
    :class="[
      'flex gap-2',
      'px-6 py-3',
      'rounded-md font-bold',
      'text-white',
      'bg-pink-500 hover:bg-pink-400 active:bg-pink-600',
      'hover:scale-105 active:scale-95',
      'transition-all',
    ]"
  >
    <slot name="iconLeft" />
    按鈕
    <slot name="iconRight" />
  </div>
</template>

<script></script>

<style lang="scss"></style>

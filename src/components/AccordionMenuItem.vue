<template>
  <div class="w-80">
    <label
      :class="[
        'px-4 py-2',
        'border border-gray-300',
        'hover:bg-pink-300',
        'flex items-center justify-between',
        'cursor-pointer',
        'transition-all',
      ]"
    >
      <div>選項</div>
      <div
        :class="[
          'h-9 w-9',
          'hover:bg-gray-200',
          'rounded-full',
          'flex items-center justify-center',
          'transition-all',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :class="['h-6 w-6', 'transition-all']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </label>
    <div
      :class="[
        'border border-t-0 border-gray-300',
        'overflow-hidden transition-all',
      ]"
    >
      <div class="p-4 text-gray-600">內容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionMenuItem",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="w-80">
    <label
      :class="[
        'px-4 py-2',
        'border border-pink-500',
        'hover:bg-pink-300',
        'flex items-center justify-between',
        'cursor-pointer',
        'transition-all',
        'text-white',
        checked && 'bg-pink-500',
      ]"
    >
      <input type="checkbox" class="sr-only" v-model="checked" />
      <div :class="[checked && 'text-white', 'transition-all']">
        {{ itemName }}
      </div>
      <div
        :class="[
          'h-9 w-9',
          'hover:bg-pink-300',
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
          :class="['h-6 w-6', checked && '-rotate-180', 'transition-all']"
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
        checked ? 'max-h-[300px]' : 'max-h-0',
        'border border-t-0 border-pink-500',
        'overflow-hidden transition-all',
      ]"
    >
      <slot name="itemContent">
        <div :class="['selection:bg-pink-500', 'p-4 text-white']">
          <slot name="itemText"> 內容 </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionMenuItem",
  props: {
    itemName: {
      default: "選項",
    },
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

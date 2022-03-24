<template>
  <div class="flex flex-col overflow-hidden rounded-md border">
    <div
      class="flex items-center justify-center border-b bg-blue-600 p-3 font-bold text-white"
    >
      2021 9 月
    </div>
    <div class="grid grid-cols-7 place-items-center">
      <div
        class="flex h-10 w-10 items-center justify-center text-xs font-bold"
        v-for="wd in weekDays"
        :key="wd"
      >
        {{ wd }}
      </div>
    </div>
    <div class="grid grid-cols-7 place-items-center">
      <div
        :class="[
          'h-10 w-10',
          'text-sm',
          'flex items-center justify-center',
          'rounded-full transition-all',
        ]"
        v-for="(day, index) in 30"
        :key="day"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCalendar",
  data() {
    return {
      weekDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    };
  },
};
</script>

<style lang="scss"></style>

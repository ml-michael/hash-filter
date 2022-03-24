<template>
  <div class="flex flex-col overflow-hidden rounded-md border">
    <div
      class="flex items-center justify-center border-b bg-pink-600 p-3 font-bold text-white"
    >
      2022 3 月
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
          'text-sm text-gray-400',
          'flex items-center justify-center',
          'rounded-full transition-all',
        ]"
        v-for="(day, index) in lastMonth"
        :key="day"
      >
        {{ day }}
      </div>
      <div
        :class="[
          'h-10 w-10',
          'text-sm',
          'flex items-center justify-center',
          'rounded-full transition-all',
        ]"
        v-for="(day, index) in thisMonth"
        :key="day"
      >
        {{ day }}
      </div>
      <div
        :class="[
          'h-10 w-10',
          'text-sm text-gray-400',
          'flex items-center justify-center',
          'rounded-full transition-all',
        ]"
        v-for="(day, index) in nextMonth"
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
      year: 2022,
      month: 3,
    };
  },

  computed: {
    lastMonth() {
      const days = [];

      const current = new Date(this.year, this.month - 1, 1);
      const wd = current.getDay();

      for (let i = wd; i > 0; i--) {
        const temp = new Date(current);
        temp.setDate(current.getDate() - i);
        days.push(temp.getDate());
      }

      return days;
    },
    thisMonth() {
      const days = [];
      //   const count = new Date(2022, 3, 0).getDate();
      const current = new Date(this.year, this.month, 0);
      for (let index = 1; index <= current.getDate(); index++) {
        days.push(index);
      }
      return days;
    },
    nextMonth() {
      const days = [];
      //   const count = new Date(2022, 3, 0).getDate();
      const current = new Date(this.year, this.month + 1, 0);
      for (let index = 1; index <= current.getDate(); index++) {
        days.push(index);
      }
      return days;
    },
  },

  mounted() {},
};
</script>

<style lang="scss"></style>

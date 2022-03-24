<template>
  <div class="flex flex-col overflow-hidden rounded-md border">
    <!-- 日曆標題 -->
    <div
      class="flex items-center justify-center border-b bg-pink-600 p-3 font-bold text-white"
    >
      {{ year }} {{ month }}月
      <div class="icon" :class="['flex items-end justify-end', 'ml-auto']">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
    <!-- 日曆表頭 -->
    <div class="grid grid-cols-7 place-items-center">
      <div
        class="flex h-10 w-10 items-center justify-center text-xs font-bold"
        v-for="wd in weekDays"
        :key="wd"
      >
        {{ wd }}
      </div>
    </div>
    <!-- 日曆內容 -->
    <div class="grid grid-cols-7 place-items-center">
      <!-- last -->
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
      <!-- current -->
      <div
        :class="[
          'h-10 w-10',
          'text-sm',
          'flex items-center justify-center',
          'rounded-full transition-all',
          year === today.getFullYear() &&
          month - 1 === today.getMonth() &&
          day === today.getDate()
            ? 'bg-pink-600 font-bold text-white'
            : 'hover:bg-gray-200',
        ]"
        v-for="(day, index) in thisMonth"
        :key="day"
      >
        {{ day }}
      </div>
      <!-- next -->
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
      // current
      today: new Date(),
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
      //   const days = [];
      //   //   const count = new Date(2022, 3, 0).getDate();
      //   const current = new Date(this.year, this.month + 1, 0);
      //   for (let index = 1; index <= current.getDate(); index++) {
      //     days.push(index);
      //   }
      //   return days;

      const count = 42 - this.lastMonth.length - this.thisMonth.length;
      const days = [];
      for (let index = 1; index <= count; index++) {
        days.push(index);
      }
      return days;
    },
  },

  mounted() {
    this.today = new Date();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
  },
};
</script>

<style lang="scss"></style>

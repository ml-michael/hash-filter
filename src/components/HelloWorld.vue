<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="text-4xl font-bold">JSON 資料處理</h1>

  <p class="desc my-5">
    輸入框中填入 cars-1, cars-2, gourmet-1, gourmet-2, amazingselect-1
    按下查詢後
    <br />
    要於下方顯示對應文章標題及內容
  </p>

  <div class="event mb-5">
    <input type="text" placeholder="e.g. cars-1" v-model="this.inputValue" />
    <button @click="search" class="ml-3">查詢</button>
  </div>

  <hr />
  <div
    id="article"
    class="pt-10"
    v-for="(item, index) in this.articles"
    :keys="item.index"
  >
    <div
      class="article-section mx-auto my-5 max-w-3xl rounded-xl bg-slate-700 p-5"
      v-for="(innerItem, index) in item"
      :keys="innerItem.index"
    >
      <h2 class="text-3xl font-extrabold tracking-tight">
        {{ index + 1 }}.
        {{ innerItem.title }}
      </h2>
      <p>
        <!-- {{ index + 1 }}. -->
        {{ innerItem.content }}
      </p>
    </div>
    <!-- <h2 class="text-3xl font-extrabold tracking-tight">
          {{ currentArticle.title }}
        </h2>
        <p>{{ currentArticle.content }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      currentArticle: {
        title: "文章標題",
        content: "文章內容",
      },
      articles: {
        cars: [
          {
            title: "LEXUS UX 300e",
            content:
              "全新高效能輕量化電動馬達，輸出最大馬力可達204 PS、最大扭力30.6 kg-m，0~100km/h 加速只需7.5秒，展現出 LEXUS 傑出的動能科技。煞車時，電動馬達也能即時轉換成發電機，產生電力並將動能重新回收至電池以增加續航力。",
          },
          {
            title: "LEXUS NX",
            content:
              "NX 搭載直覺的 14 吋觸控式螢幕，將先進科技與人性化需求結合，讓駕乘者能隨心所欲地操作並獲得資訊， 亦配備智慧型手機連接介面 Apple CarPlay 與 Android Auto，可將手機應用程式同步於螢幕上操控，結合觸控、語音控制等功能，讓駕駛者以更安全、從容的方式回應繁忙都會生活，享受 TAZUNA 全環繞駕駛座艙帶來的次世代駕乘體驗。* 頂級版、豪華版、菁英版配備 9.8 吋觸控式螢幕。",
          },
        ],
        gourmet: [
          {
            title: "台北晶華酒店",
            content:
              "Lexus 攜手台北晶華酒店獨家合作，五星主廚團隊將中西合璧的理念與料理完美結合，在品味間展現宛如精品般的異國美饌，每一口都是華麗的感官與味蕾饗宴！",
          },
          {
            title: "Miss V Bakery",
            content:
              "有「成熟系甜點」之稱的肉桂捲，其濃郁的香氣與鬆軟的口感在台灣掀起一陣風潮。 Miss V Bakery 嚴選最好的食材，精心打造而成的肉桂捲被多家媒體評比為第一名，讓人忍不住愛上那優雅迷人的深度風味。",
          },
        ],
        amazingselect: [
          {
            title: "AMAZING SELECT 品牌精品",
            content:
              "Lexus 致力於提供消費者更美好的生活，堅持高品質、融入車款特色、注入令人驚艷的設計風格理念，用心打造一系列專屬生活精品，完美彰顯品牌愛好者獨特品味。",
          },
        ],
      },
    };
  },
  methods: {
    search() {
      //   輸入框中填入
      // cars-1, cars-2, gourmet-1, gourmet-2, amazingselect-1
      // 按下查詢後

      //
      let inputValue = this.inputValue;
      // console.log(inputValue);
      let inputSpilt = inputValue.split("-");
      let inputType = inputSpilt[0];
      let inputIndex = inputSpilt[1];

      // string to number
      let numberIndex = parseInt(inputIndex);
      console.log("inputType", inputType, typeof inputType);
      console.log("numberIndex", numberIndex, typeof numberIndex);

      let combineValue = `${inputType}-${inputIndex}`;
      console.log("combineValue: ", combineValue);

      console.log(`${this.articles}`);

      // 找出物件內的個別資料
      // for (const key in this.articles.cars[0]) {
      //   if (Object.hasOwnProperty.call(this.articles.cars[0], key)) {
      //     const element = this.articles.cars[key];
      //     // console.log(`${key} - ${element}`);
      //     console.log(`inputType: ${inputType}`);
      //     console.log(`key: ${key}`);
      // console.log(`element: ${element.title}`);

      //     // element.forEach((element, index) => {
      //     //   console.warn("element:", element, "index:", index + 1);
      //     //   console.log("title:", element.title);
      //     //   console.log("content:", element.content);
      //     // });
      //     // this.currentArticle.title = element.title;
      //     // console.log("123", this.currentArticle.title);
      //     // this.currentArticle.content = element.content;
      //     // console.log("345", this.currentArticle.content);
      //     // });
      // }
      // }

      // console.log(this.articles);

      // console.log(this.articles.cars[0]);
    },
  },
  mounted() {
    // console.log(this.articles.cars);
  },
};
</script>

<style scoped></style>

<template>
  <div class="container mx-auto">
    <div class="section py-44">
      <h1 class="text-4xl font-bold text-pink-400">JSON 資料處理-2</h1>

      <p class="desc my-5 text-white">
        輸入框中填入 cars-1, cars-2, gourmet-1, gourmet-2, amazingselect-1
        按下查詢後
        <br />
        要於下方顯示對應文章標題及內容
      </p>

      <div :class="['flex', 'items-center justify-center', 'mb-5']">
        <div :class="['mr-2']">
          <input
            type="text"
            placeholder="e.g. cars-1"
            v-model="inputValue"
            @keyup.enter="search()"
          />
        </div>

        <div
          :class="['flex flex-col', 'justify-center', 'items-center', 'gap-5']"
        >
          <Btn @click="search()">
            <template v-slot:iconLeft>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </template>
          </Btn>
        </div>
      </div>

      <hr />

      <div
        id="article"
        class="mx-auto my-5 max-w-4xl rounded-xl bg-slate-700 p-10 text-pink-400"
      >
        <h2 class="mb-3 text-4xl font-extrabold tracking-tight underline">
          {{ currentArticle.title }}
        </h2>
        <p class="text-white">{{ currentArticle.content }}</p>
      </div>
      <img
        class="mx-auto my-8"
        alt="powered-by"
        src="@/assets/images/powered-by-vitawind-bright.png"
      />
    </div>
  </div>
</template>
<script scoped>
import Btn from "../components/btn.vue";
export default {
  data() {
    return {
      inputValue: "",
      inputType: "",
      inputIndex: Number,
      currentArticle: {
        title: "文章標題",
        content: "文章內容",
      },
      data: [
        {
          category: "cars",
          articles: [
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
        },
        {
          category: "gourmet",
          articles: [
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
        },
        {
          category: "amazingselect",
          articles: [
            {
              title: "AMAZING SELECT 品牌精品",
              content:
                "Lexus 致力於提供消費者更美好的生活，堅持高品質、融入車款特色、注入令人驚艷的設計風格理念，用心打造一系列專屬生活精品，完美彰顯品牌愛好者獨特品味。",
            },
          ],
        },
      ],
    };
  },
  methods: {
    search() {
      // get inputValue
      let inputValue = this.inputValue;
      // inputValue-filter
      let inputSpilt = inputValue.split("-");
      // data-type
      let inputType = inputSpilt[0];
      // console.log("inputType", inputType);
      // data-index
      let inputIndex = inputSpilt[1];
      inputIndex = Number(inputIndex);
      // console.log(inputIndex);
      // combineText
      // let combineValue = `${inputType}-${inputIndex}`;
      // console.log(combineValue);
      // matchText
      const matchList = {
        cars: 1,
        gourmet: 2,
        amazingselect: 3,
      };
      let matchValue = matchList[inputType];
      // console.log(this.data[matchValue - 1]);
      // console.log(this.data[matchValue - 1].articles[inputIndex].title);
      try {
        this.currentArticle.title =
          this.data[matchValue - 1].articles[inputIndex - 1].title;
        this.currentArticle.content =
          this.data[matchValue - 1].articles[inputIndex - 1].content;
      } catch (error) {
        console.log(error);
        this.inputValue = "";
        this.currentArticle.title = "查無此資訊";
        this.currentArticle.content = "";
      }
      // console.log(this.currentArticle.title);
      // console.log(this.currentArticle.content);
    },
  },
  mounted() {
    console.log("category", this.data[0].category);
    console.log("article", this.data[0].articles);
    console.log("article[0]", this.data[0].articles[0]);
    console.log("article[0].title", this.data[0].articles[0].title);
    console.log("article[0].content", this.data[0].articles[0].content);
    console.log(this.data);
    this.data.forEach((element, index) => {
      console.warn(index, element);
      element.articles.forEach((innerElement, innerIndex) => {
        console.log(innerIndex, innerElement);
      });
    });
  },
  components: { Btn },
};
</script>

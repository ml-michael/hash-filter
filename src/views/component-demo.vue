<template>
  <SectionPaddingTop />
  <div :class="['max-w-3xl', 'flex flex-col', 'mx-auto py-5', 'mx-auto']">
    <div
      class="accordionMenuItem"
      :class="['mx-auto', 'flex flex-col', 'items-center justify-center']"
    >
      <h2 :class="['text-4xl font-bold text-pink-500', 'mb-4']">
        AccordionMenuItem
      </h2>
      <AccordionMenuItem
        v-for="item in list.items"
        :key="list.groupName.concat('-', item.name)"
        :itemName="item.name"
      >
        <template v-slot:itemText>
          {{ item.content }}
        </template>
      </AccordionMenuItem>

      <br /><br />
      <AccordionMenuItem
        v-for="link in faq.links"
        :key="faq.groupName.concat('-', link.name)"
        :itemName="link.name"
      >
        <template v-slot:itemContent>
          <div
            :class="[
              'p-3',
              'text-white',
              'border-t border-pink-500 first:border-0',
              'transition-all hover:bg-pink-300',
            ]"
            v-for="content in link.contents"
            :key="content"
          >
            {{ content }}
          </div>
        </template>
      </AccordionMenuItem>
    </div>
    <hr :class="['my-10']" />
    <div
      class="date-container"
      :class="[
        'w-72',
        'text-white',
        'mx-auto',
        'flex flex-col',
        'items-center justify-center',
      ]"
    >
      <h2 :class="['text-4xl font-bold text-pink-500', 'mb-4']">
        SimpleCalendar
      </h2>
      <SimpleCalendar />
    </div>
    <hr :class="['my-10']" />
    <div
      class="modal"
      :class="['p-5', 'flex flex-col', 'items-center justify-center']"
    >
      <h2 :class="['text-4xl font-bold text-pink-500', 'mb-4']">Modal</h2>
      <Btn
        class="flex w-40 items-center justify-center text-sm"
        btnText="開啟 Modal"
        color="pink"
        @click="showed = false"
      >
        <template v-slot:iconRight>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </Btn>
      <Modal title="注意" :showModal="showed" @closing="showed = true">
        <template v-slot:itemText>常用的警告提示</template>
      </Modal>
    </div>
  </div>

  <SectionPaddingBottom />
</template>

<script>
import SectionPaddingTop from "../components/SectionPaddingTop.vue";
import SectionPaddingBottom from "../components/SectionPaddingBottom.vue";
import AccordionMenuItem from "../components/AccordionMenuItem.vue";
import SimpleCalendar from "../components/SimpleCalendar.vue";
import Modal from "../components/Modal.vue";
import Btn from "../components/btn.vue";
export default {
  name: "component-demo",
  components: {
    SectionPaddingTop,
    SectionPaddingBottom,
    AccordionMenuItem,
    SimpleCalendar,
    Modal,
    Btn,
  },
  data() {
    return {
      showed: true,
      list: {
        groupName: "Abouts",
        items: [
          {
            name: "關於兔兔教",
            content:
              "不是邪教，但不太正常 (？)。 不過可以為你在此獻上教義 ... (住嘴！)",
          },
          {
            name: "關於 Tailwind CSS",
            content: "超讚了啦，不用真是太可惜了！",
          },
          { name: "關於手風琴", content: "流浪到淡水時有機會可以看到。" },
          { name: "關於兔兔", content: "你想知道的太多了，去擲筊問神吧！！！" },
        ],
      },
      faq: {
        groupName: "FAQ",
        links: [
          { name: "四大超商", contents: ["7-11", "全家", "萊爾富", "OK"] },
          {
            name: "付款方式",
            contents: ["現金", "ATM", "信用卡", "LINE PAY", "五倍券"],
          },
          { name: "取貨方式", contents: ["宅配", "超商取貨"] },
        ],
      },
    };
  },
};
</script>

<style lang="scss"></style>

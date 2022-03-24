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
      :class="[
        'w-72',
        'text-white',
        'mx-auto',
        'flex flex-col',
        'items-center justify-center',
      ]"
    >
      <h2 :class="['text-4xl font-bold text-pink-500', 'mb-4']">Modal</h2>
      <Modal />
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
export default {
  name: "component-demo",
  components: {
    SectionPaddingTop,
    SectionPaddingBottom,
    AccordionMenuItem,
    SimpleCalendar,
    Modal,
  },
  data() {
    return {
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

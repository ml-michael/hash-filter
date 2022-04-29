<template>
  <swiper
    @slideChange="onSlideChange"
    @swiper="onSwiper"
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
    :autoplay="true"
  >
    <div class="prevArrow"></div>
    <div class="nextArrow"></div>
    <swiper-slide>
      <img src="https://picsum.photos/768/300?random=1" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://picsum.photos/768/300?random=2" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://picsum.photos/768/300?random=3" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSlideChange() {
      console.log("slide change");
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
};
</script>

<style lang="scss">
.swiper {
  height: 300px;
  background-color: #fff;
}
</style>

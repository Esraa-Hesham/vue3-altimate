<template>
  <vueper-slides class="slider" lazy lazy-load-on-drag fade :touchable="false">
    <vueper-slide
      class="slid"
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
      :content="slide.content"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "AppSlider2",

  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          title: "",
          content: "",
          image: require("@/assets/b2.jpg"),
        },
        {
          title: "",
          content: "",
          image: require("@/assets/b3.jpg"),
        },
        {
          title: "",
          content: "",
          image: require("@/assets/b4.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.vueperslide--loading .vueperslide__content-wrapper {
  display: none !important;
}
</style>
<style>
.vueperslides__parallax-wrapper {
  height: calc(100vh - 76px);
  height: calc(100vh-76px);
}
</style>

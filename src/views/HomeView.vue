<template>
  <div class="home">
    <slider />
    <about-us />
    <our-staff />
  </div>
</template>

<script>
import AboutUs from "@/components/HomePage/AboutUs.vue";
import slider from "@/components/HomePage/slider.vue";
import OurStaff from "@/components/HomePage/OurStaff.vue";
export default {
  name: "HomeView",
  components: { AboutUs, slider, OurStaff },
};
</script>

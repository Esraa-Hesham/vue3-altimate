<template>
  <div class="aboutus-section" my-5>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="aboutus">
            <h2 class="aboutus-title">About Us</h2>
            <p class="aboutus-text">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in.
            </p>
            <p class="aboutus-text">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem
            </p>
            <a class="aboutus-more" href="#">read more</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="aboutus-banner">
            <img src="@/assets/aboutUs.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutus-section {
  padding: 90px 0;
}
.aboutus-title {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0 0 39px;
  padding: 0 0 11px;
  position: relative;
  text-transform: uppercase;
  color: #000;
}
.aboutus-title::after {
  background: #95008d none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 38%;
  position: absolute;
  width: 150px;
}
.aboutus-text {
  color: #606060;
  font-size: 13px;
  line-height: 22px;
  margin: 0 0 35px;
}

a:hover,
a:active {
  color: #95008d;
  text-decoration: none;
  outline: 0;
}
.aboutus-more {
  border: 1px solid #95008d;
  border-radius: 25px;
  color: #95008d;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 7px 20px;
  text-transform: uppercase;
}
.aboutus-banner img {
  border-radius: 50%;
}
</style>

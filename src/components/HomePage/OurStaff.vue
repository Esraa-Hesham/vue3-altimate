<template>
  <div class="container mt-5">
    <div class="row">
      <h2 class="outstaff-title">Our Staff</h2>
      <!-- user card -->
      <div class="item col-md-4" v-for="(user, index) in users" :key="index">
        <div class="image">
          <img :src="user.image" alt="" />
          <div class="buttons">
            <a id="social-fb" href="https://www.facebook.com/"
              ><i class="fa-brands fa-facebook-square"></i
            ></a>
            <a id="social-tw" href="https://twitter.com/">
              <i class="fa-brands fa-twitter-square"></i
            ></a>
            <a id="social-gp" href="https://plus.google.com/"
              ><i class="fa-brands fa-google"></i
            ></a>
            <a id="social-inst" href="#"
              ><i class="fa-brands fa-instagram-square"></i
            ></a>
          </div>
        </div>
        <a class="name" href="#">{{ user.name }}</a>
        <p class="desc">
          {{ user.desc }}
        </p>
        <a href="#" class="read-more"
          >Read More <span class="css-arrow"></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          image: require("@/assets/esraa.jpeg"),
          name: "Esraa Hesham",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel quas, incidunt laborum, recusandae sit soluta ullam consequuntur exercitationem molestiae quo sapiente",
        },
        {
          image: require("@/assets/ahmed.jpg"),
          name: "Ahmed Khaled",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel quas, incidunt laborum, recusandae sit soluta ullam consequuntur exercitationem molestiae quo sapiente",
        },
        {
          image: require("@/assets/omar.jpg"),
          name: "Omar Mostafa",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel quas, incidunt laborum, recusandae sit soluta ullam consequuntur exercitationem molestiae quo sapiente",
        },
      ],
    };
  },
};
</script>

<style>
.outstaff-title {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0 0 39px;
  padding: 0 0 11px;
  position: relative;
  text-transform: uppercase;
  color: #000;
}
.outstaff-title::after {
  background: #95008d none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 44%;
  position: absolute;
  width: 150px;
}
.item a {
  text-decoration: none;
}
.item .image {
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}
.item .image img {
  transition: all 0.2s;
  height: 300px;
  object-fit: cover;
}
.buttons {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item .image .buttons a {
  color: #fff;
  margin-right: 10px;
}
.item .image .buttons a:last-child {
  margin-right: 0;
}
.item .image .buttons a i {
  font-size: 20px;
  color: inherit;
}
.item .image:hover .buttons {
  opacity: 1;
  visibility: visible;
  background-color: rgba(39, 48, 75, 0.7);
}
.item .image:hover img {
  transform: scale(1.1);
}
.item {
  background: #fff;
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  box-shadow: 0 0 16px 0 rgba(39, 48, 75, 0.15);
  border-radius: 6px;
  padding: 35px 30px 27px;
  display: flex;
  flex-direction: column;
}
.item img {
  max-width: 100%;
}
.item h2 {
  color: #5a3733;
  font-size: 22px;
  font-weight: 900;
  padding: 0.5em 0;
  margin: 0;
}
.item p {
  font-size: 14px;
  line-height: 1.5em;
  margin: 14px 0 20px;
}
.item .name {
  font-size: 24px;
  text-transform: capitalize;
  transition: all 0.3s linear 0s;
  font-weight: 700;
  line-height: 1;
  color: #27304b;
}
.item .name:hover {
  color: #95008d;
}
.item .perUnvan {
  position: relative;
  transition: all 0.3s linear 0s;
  color: #777;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
}
.item .perUnvan:hover {
  color: #95008d;
}
.item .perUnvan::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 50%;
  height: 1px;
  width: 40px;
  background-color: #777;
  transform: translateX(-50%);
}
.item .css-arrow {
  margin-left: 10px;
  display: inline-block;
  width: 55px;
  height: 2px;
  background-color: #95008d;
  position: relative;
  transition: all 0.25s linear 0s;
  vertical-align: middle;
}
.item .css-arrow::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: #95008d;
  top: -3px;
  right: -3px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: all 0.25s linear 0;
}
.item .css-arrow::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: #95008d;
  top: 3px;
  right: -3px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  transition: all 0.25s linear 0;
}
.item .read-more {
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: #27304b;
  position: relative;
  margin-top: 20px;
}
.item .read-more:hover {
  color: #95008d;
}
.item:hover .css-arrow {
  width: 20px;
}
</style>

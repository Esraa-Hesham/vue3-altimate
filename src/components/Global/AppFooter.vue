<template>
  <div class="footer-section mt-4">
    <div class="footer">
      <div class="container-fluid row">
        <div class="col-md-4 footer-one">
          <h5>About Us</h5>
          <p>
            Cras sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <div class="social-icons">
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
        <div class="col-md-3 footer-two">
          <h5>Information</h5>
          <ul>
            <li><a href="#">Maintenance Tips</a></li>
            <li><a href="#f">Locations</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-three">
          <h5>Helpful Links</h5>
          <ul>
            <li><a href="maintenance.html">Maintenance Tips</a></li>
            <li><a href="#f">Locations</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div class="col-md-2 footer-four">
          <h5>Helpful Links</h5>
          <ul>
            <li><a href="maintenance.html">Maintenance Tips</a></li>
            <li><a href="#f">Locations</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="copyright-text">
              <p>CopyRight © 2022 Esraa Hesham Saad</p>
            </div>
          </div>
          <!-- End Col -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style scoped>
/* Footer */
.footer {
  position: relative;
  background-color: #fff;
  color: #707070;
  padding: 55px 0 40px;
  text-align: center;
  background-color: beige;
}
.footer h5 {
  font-size: 18px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #707070;
  position: relative;
  padding-bottom: 16px;
}
.footer h5:after {
  content: "";
  display: block;
  margin: 5px 0 0;
  width: 40%;
  height: 1px;
  background-color: #fff;
  margin-left: 30%;
}
.footer ul {
  list-style: none;
  line-height: 2.2em;
  padding-left: 0px;
}
.footer ul a {
  color: #707070;
}
.footer ul a:hover {
  color: #95008d;
  text-decoration: none;
}
/*footer bottom */
.footer-bottom {
  padding-top: 5px;
  padding-bottom: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  background: #fff;
}
.copyright-text p {
  color: #95008d;
  margin-top: 18px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;
}

/* Social Icons */

.social-icons {
  margin: 0;
  padding: 0;
  font-size: 10px;
}
.social-icons a {
  font-size: 40px;
  margin: auto;
  padding-right: 10px;
  color: #95008d;
}

.social {
  margin: 7px 7px 7px 0px;
  color: #b40028;
}

#social-fb:hover {
  color: #3b5998;
  transition: all 0.25s;
}
#social-tw:hover {
  color: #4099ff;
  transition: all 0.25s;
}
#social-gp:hover {
  color: #d34836;
  transition: all 0.25s;
}
#social-inst:hover {
  color: #f39c12;
  transition: all 0.25s;
}

/* CTA CSS */
.cta-padding35 {
  padding: 35px 0 35px;
  background-color: #b40028;
  color: #fff;
}
/* Buttons */
.site-btn {
  font-size: 14px;
  padding: 13px 30px;
  border-radius: 5px;
  border: 1px solid #b40028;
  min-width: 200px;
  display: inline-block;
  text-align: center;
  position: relative;
  z-index: 1;
  color: #b40028;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
  margin: 10px 0px 10px 0px;
}
.site-btn:hover {
  background: #b40028;
  border: 1px solid #fff;
  font-weight: 700px;
}
</style>

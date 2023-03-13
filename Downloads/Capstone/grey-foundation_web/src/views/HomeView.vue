<template>
  <div class="Home">
    <div class="video-container">
      <video autoplay loop muted playsinline class="Video">
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
      <div class="navbar-container">
        <NavbarComp />
      </div>
    </div>
  </div>
  <body>
    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

    <h3 class="featured">Featured</h3>
    <section class="products-holder">
      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>
    </section>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

    <section>
      <div class="banner-full">
        <img
          src="https://i.postimg.cc/tgFsPpJp/64c2ed3104304ae4824b414fbc35672e.jpg"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Introducing Our New Arrivals</h3>
          <p>Check out the latest styles from us.</p>
          <a href="#" class="banner-btn">SHOP NOW</a>
        </div>
      </div>
    </section>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

    <h3 class="featured">New Arrivals</h3>
    <section class="products-holder">
      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>
    </section>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

    <section>
      <div class="banner-halves">
        <div class="banner-men">
          <routerLink to="/Products">
            <img src="https://i.postimg.cc/1zh2SNgs/Men-banner.png" alt="" />
          </routerLink>
        </div>
        <div class="banner-women">
          <router-link to="/Products">
            <img src="https://i.postimg.cc/2jKBKjWz/Women-banner.png" alt="" />
          </router-link>
        </div>
      </div>
      <div class="banner-full">
        <img
          class="img"
          src="https://i.postimg.cc/L5JQM77W/Untitled.png"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Collections and Styles</h3>
          <p>Find your true style with our extensive range of collections.</p>
          <a href="#" class="banner-btn">SHOP NOW</a>
        </div>
      </div>
    </section>
  </body>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    Footer,
  },
};
</script>

<style scoped>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

html {
  padding: 0;
  margin: 0;
}

.video-container {
  width: 98vw;
  height: 550px;
  position: relative;
  overflow: hidden;
}
.navbar-container {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 1;
}

.Video {
  object-fit: contain;
  width: 100%;
  background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255));
}

.featured {
  margin-left: 30px;
  padding-top: 20px;
  font-size: larger;
  font-weight: 600;
}

.products-holder {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px;
}

.products-card {
  height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.product-img {
  height: 300px;
  width: 250px;
  background-color: rgb(88, 154, 132);
}

.product-info {
  margin-top: 5px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */

.banner-full {
  object-fit: contain;
  height: 500px;
  margin-bottom: 10px;
  position: relative;
}

.banner-full img {
  height: 100%;
  width: 100%;
  filter: grayscale(80%);
  position: relative;
}

.banner-full .img {
  filter: brightness(0.5);
  filter: grayscale(100%);
}

.banner-description {
  position: absolute;
  height: 100px;
  color: black;
  text-align: justify;
  z-index: 1;
  top: 150px;
  left: 0;
  padding: 20px;
}

.banner-description h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.banner-description p {
  color: rgb(255, 255, 255);
  margin-top: 15px;
  font-size: 1.25rem;
  margin-bottom: 10px;
  word-wrap: normal;
  word-spacing: 1.5px;
}

.banner-btn {
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  transition: background-color 0.2s ease;
}

.banner-halves {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  margin: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
}

.banner-halves {
  height: 45%;
}

.banner-halves :hover {
  animation: grow 0.8s forwards;
}

.banner-header {
  margin-top: 20px;
}

.banner-men a,
.banner-women a {
  color: rgb(255, 255, 255);
}

.banner-men {
  filter: grayscale(100%);
  width: 40%;
  height: 100%;
}

.banner-women {
  filter: grayscale(100%);

  width: 48%;
  height: 100%;
}

@keyframes grow {
  0% {
    scale: 0.8;
  }

  100% {
    scale: 1.1;
    margin-bottom: 10px;
  }
}
</style>

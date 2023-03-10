<template>
<div class="Home">
  <div class="video-container">
    <video autoplay loop muted playsinline class="Video">
      <source src="../assets/video.mp4" type="video/mp4">
    </video>
    <div class="navbar-container">
      <NavbarComp/>
    </div>
  </div>
</div>
  <body>

<!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

<h3 class="featured">
Featured
</h3>
<section class="products-holder">
    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>

    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>

    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>
    
    
    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>



</section>

<!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

<section>
<div class="banner-full">
</div>
</section>

<!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

<h3 class="featured">
  New Arrivals
</h3>
<section class="products-holder">
    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>

    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>

    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>


    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>
    
    
    <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
            <h3> Brand Name </h3>
            <p> Product name / description </p>
            <h4> R Price </h4>
        </div>
    </div>



</section>

<!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

<section>
<div class="banner-halves">
    <div class="banner-men">
        <h2 class="banner-header">
            Men
        </h2>
    </div>
    <div class="banner-women">
        <h2 class="banner-header">
            Women
        </h2>
    </div>
</div>
<div class="banner-full">
</div>
</section>
</body> 
</template>

<script>
// @ is an alias to /src
import NavbarComp from '../components/NavbarComp.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComp
  }
}
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
    left: 0;
    z-index: 1;
  }

  .Video {
    object-fit: contain;
    width: 100%;
    background-image: linear-gradient(to right, rgba());
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
    background-color:  rgb(209, 204, 204);
    height: 500px;
    margin-bottom: 10px;
}

.banner-halves {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    margin: 20px;
    text-align: center;
}

.banner-halves :hover {
    animation: grow 0.8s forwards;
}

.banner-header {
    margin-top: 20px;
}

.banner-men {
    background-color:  rgb(209, 204, 204);
    width: 48%;
    height: 100%;
}

.banner-women {
    background-color:  rgb(209, 204, 204);
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

<template>
  <div class="Navbar">
    <NavbarComp />
  </div>
  <body>
    <div class="filter">
      <FilterComp style="width: 100%" />
    </div>
    <div class="Products">
      <ProductsCard />
    </div>
  </body>
  <footer>
    <Footer></Footer>
  </footer>
</template>
<script>
import NavbarComp from "../components/NavbarComp.vue";
import ProductsCard from "@/components/ProductsCard.vue";
import FilterComp from "@/components/FilterComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    NavbarComp,
    ProductsCard,
    FilterComp,
    Footer,
  },
};
</script>
<style scoped>
body {
  display: flex;
}

.Navbar {
  height: 500px;
  background-image: url("https://i.postimg.cc/4xm62szp/Moncler.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.filter {
  width: 25%;
}

.Products {
  width: 75%;
}
</style>

<template>
    <div class="Products">
      <NavbarComp/>
    </div>
    <h1>Products</h1>
    <body>
      <div class="filter">
      <FilterComp style="width: 100%;"/>
    </div>
    <div>
      <ProductsCard/>
    </div>
    </body>
</template>
<script>
import NavbarComp from '../components/NavbarComp.vue';
import ProductsCard from '@/components/ProductsCard.vue';
import FilterComp from '@/components/FilterComp.vue';

export default {
  name : 'Products',
  components : {
    NavbarComp,
    ProductsCard,
    FilterComp
  }
}
</script>
<style scoped>
  body {
    display: flex;
  } 
  
  .filter {
    width: 25%;
  }
</style>
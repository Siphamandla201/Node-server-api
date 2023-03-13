<template lang="">
  <div class="products-holder">
    <div v-for="product in products" :key="product" class="products-card">
      <div class="product-img">{{ product.image }}</div>
      <div class="product-info">
        <h3>{{ product.brand }}</h3>
        <p>{{ product.product }}</p>
        <h4>R {{ product.price }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsCard",
  data() {
    return {
      products: [
        {
          id: 1,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 2,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 3,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 4,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 5,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 6,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
        {
          id: 7,
          image: "image",
          brand: "brand name",
          product: "Product name / description",
          price: "Price",
        },
      ],
    };
  },
};
</script>
<style scoped>
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
</style>

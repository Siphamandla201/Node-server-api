<template>
  <div class="About">
    <NavbarComp></NavbarComp>
  </div>
  <h1>about</h1>
</template>
<script>
import NavbarComp from '../components/NavbarComp.vue';

export default {
  name: 'About',
  components: {
    NavbarComp
  }
}
</script>

<style scoped>
h1 {
  color: black;
}
</style>

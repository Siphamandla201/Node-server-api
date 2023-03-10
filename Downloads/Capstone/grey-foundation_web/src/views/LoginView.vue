<template>
    <header>
        <NavbarComp/>
    </header>
    <body>
        <SignupForm/>
    </body>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'Login' ,
  components : {
    NavbarComp,
    SignupForm
  }  
}
</script>
<style scoped>
    
</style>
<template>
  <div id="app">
    <!-- Header -->
    <div class="Header container-fluid">
     
     <img id="uneswaLogo" src="./assets/logo-uneswa.png" width="150" href="http://www.uniswa.sz/">     
     
    
     <h1>Institute of Distance Education </h1>

    </div>
    <!-- Header -->
    <NavbarPage/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavbarPage from '@/components/Navbar.vue'
//import Footer from '@/components/Footer.vue'
import Footer from '@/components/Footer2.vue'
export default {
  components:{
    NavbarPage,
    Footer
  }
  
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>

<!--Template-->
<template>
  <div id="app">
    <SideNav/>
    <router-view/>
      <div class="container-fluid text-left">
    <mdb-container fluid>
    <Footer/>
    </mdb-container>
      </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import SideNav from '@/components/SideNav.vue'
export default {
  components:{
    Footer, 
    SideNav
  },
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

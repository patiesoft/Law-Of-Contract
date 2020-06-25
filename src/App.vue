<!--Template-->
<template>
  <div id="app">
   
     <mdb-navbar
        position="top-fixed"
        transparent
        color="mdb"
        dark
        scrolling
        class="sticky-top"
        >
        <mdb-navbar-brand @click.native="toggleSideNav" class="button-collapse"><mdb-icon icon="bars"/></mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#/" waves-fixed active>Home</mdb-nav-item>
                <mdb-nav-item href="#/Unit1" waves-fixed active>Overview</mdb-nav-item>
                <mdb-dropdown tag="li" class="nav-item">
                    <mdb-dropdown-toggle slot="toggle"  waves-fixe  tag="li" outline="none" class="btn-red">UNITS</mdb-dropdown-toggle>
                    <mdb-dropdown-menu color="red">
                        <mdb-dropdown-item href="#introduction">Unit 1</mdb-dropdown-item>
                        <mdb-dropdown-item href="#facts">Unit 2</mdb-dropdown-item>
                        <mdb-dropdown-item href="#issues">Unit 3</mdb-dropdown-item>
                        <mdb-dropdown-item href="#held">Unit 4</mdb-dropdown-item>
                        <mdb-dropdown-item href="#unitSammary">Unit 5</mdb-dropdown-item>
                        <mdb-dropdown-item href="#activity1">Activity 1</mdb-dropdown-item>
                        <mdb-dropdown-item href="#activity2">Activity 2</mdb-dropdown-item>
                        <mdb-dropdown-item href="#selfAssessment">Self-Assessment</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>

    <router-view/>
    <Footer/>
  </div>
</template>

<script>
//import Footer from '@/components/Footer.vue'
import Footer from '@/components/Footer2.vue'
export default {
  components:{
    Footer, 
  
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

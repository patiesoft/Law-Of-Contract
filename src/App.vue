<!--Template-->
<template>
  <div id="app">
   
     <mdb-navbar
        position="top"
        transparent
        color="mdb"
        dark
        scrolling
        class="nevBar "

        
        >
        <mdb-navbar-brand @click.native="toggleSideNav" class="button-collapse"><mdb-icon icon="bars"/></mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#/" waves-fixed active>Home</mdb-nav-item>
                <mdb-nav-item href="#//Overview" waves-fixed active>Overview</mdb-nav-item>
                <mdb-dropdown tag="li" class="nav-item">
                    <mdb-dropdown-toggle slot="toggle"  waves-fixe  tag="li" outline="none" class="btn-red">UNITS</mdb-dropdown-toggle>
                    <mdb-dropdown-menu color="red">
                        <mdb-dropdown-item href="#/Unit1">Unit 1</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit2">Unit 2</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit3">Unit 3</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit4">Unit 4</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit5">Unit 5</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit6">Unit 6</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit7">Unit 7</mdb-dropdown-item>
                        <mdb-dropdown-item href="#/Unit8">Unit 8</mdb-dropdown-item>
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

 import { 
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbDropdown, 
  mdbDropdownItem, 
  mdbDropdownMenu, 
  mdbDropdownToggle, 
  mdbNavbarBrand, 
  mdbIcon
  } from "mdbvue";

export default {
  components:{
    Footer, 
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown, 
    mdbDropdownItem, 
    mdbDropdownMenu, 
    mdbDropdownToggle, 
    mdbNavbarBrand, 
    mdbIcon
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

<!--Template-->
<template>
  <div id="app">
   <div class="NevBack">
<br>
<br>
   </div>
     <mdb-navbar
        position="top"  
        color="primary"
        dark      
        class="nevBar "

        
        >
        <mdb-navbar-brand ><strong>LAW204</strong></mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#/" waves-fixed active>Home</mdb-nav-item>
                <mdb-nav-item href="#//Overview" waves-fixed active>Overview</mdb-nav-item>
                        <mdb-nav-item href="#/Unit1">Unit 1</mdb-nav-item>
                        <mdb-nav-item href="#/Unit2">Unit 2</mdb-nav-item>
                        <mdb-nav-item href="#/Unit3">Unit 3</mdb-nav-item>
                        <mdb-nav-item href="#/Unit4">Unit 4</mdb-nav-item>
                        <mdb-nav-item href="#/Unit5">Unit 5</mdb-nav-item>
                        <mdb-nav-item href="#/Unit6">Unit 6</mdb-nav-item>
                        <mdb-nav-item href="#/Unit7">Unit 7</mdb-nav-item>
                        <mdb-nav-item href="#/Unit8">Unit 8</mdb-nav-item>


                        <!--  -
                <mdb-dropdown tag="li" class="nav-item">
                    <mdb-dropdown-toggle slot="toggle"  waves-fixed  tag="li" outline="none" class="btn-red"><strong>UNITS</strong></mdb-dropdown-toggle>
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
                --  -->
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
         
    </mdb-navbar>

    <router-view/>
    <Footer/>
  </div>
</template>

<script>
//import Footer from '@/components/Footer.vue'
import Footer from '@/components/Footer.vue'

 import { 
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  //mdbDropdown, 
  //mdbDropdownItem, 
  //mdbDropdownMenu, 
  //mdbDropdownToggle, 
  mdbNavbarBrand

  } from "mdbvue";

export default {
  components:{
    Footer, 
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    //mdbDropdown, 
    //mdbDropdownItem, 
    //mdbDropdownMenu, 
    //mdbDropdownToggle, 
    mdbNavbarBrand
  
  }
  
}
</script>

<style >

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.row{
    position: relative;
}
.scrollspy-example {
height: 100%;
overflow-y:inherit;
}
.main-topic{
    font-weight:700;
}

#contentlist{
    list-style-type:decimal;
}

.bg{
    background-color: #e1f5fe;
}
.bg2{
  background-color: #bbdefb;  
}
.navbar {
  background: #1e88e5 ;
    width:60%;
}

.sideNev{
    display: none;
      list-style: armenian
  }
.dropChapter{
  display:block;
  position:fixed;
  left: 60%;
  top: 0px; 
  font-weight: 700;
  z-index: 5;
  margin: 0px;
  
}

@media (min-width: 566px) { 
  .sideNev{
    display:block;

  }
  #topics div ul{
    padding: 0;
    margin: 0;
    list-style: none;
    }
     #topics div ul li:hover{
    background-color: rgb(211, 224, 233);
    color: whitesmoke;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;   
     }
  .dropChapter{
    display: none;
  }
  .nevBar{
  width:100%;
  align-self: flex-end;
  
}
 }

</style>

<template>
  <div class="container-fluid">
     <mdb-navbar
    position="top "
    transparent
    color="mdb"
    dark
    scrolling
    class="sticky-top"
    >
    <mdb-navbar-brand @click.native="toggleSideNav" class="button-collapse"><mdb-icon icon="bars"/></mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#/About" waves-fixed active>Overview</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
      <img src="../assets/lending.png" alt="Loading" class="rounded mx-auto d-block img-fluid">
  </div>
</template>

<script>
// @ is an alias to /src

import {
     mdbNavbar, 
    mdbNavItem, 
    mdbNavbarNav, 
    mdbNavbarToggler, 
    mdbNavbarBrand, 
    mdbIcon
} from 'mdbvue'; 
import{ mapActions} from 'vuex'; 
export default {
  name: 'Home',
  components: { 
    mdbNavbar, 
    mdbNavItem, 
    mdbNavbarNav, 
    mdbNavbarToggler, 
    mdbNavbarBrand, 
    mdbIcon
  }, 
   data() {
    return {};
  },
  methods: mapActions(['toggleSideNav']),
  computed: {
    computedPage () {
      return {
        activePage: this.page,
        toggle: false
      }
    }
  },
    mounted () {
    this.activePage = this.$route.name
  },
  updated () {
    this.activePage = this.$route.name
  }
}
</script>

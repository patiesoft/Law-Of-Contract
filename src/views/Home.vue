<template>
  <div class="container-fluid">
    <mdb-container fluid>
      <mdb-navbar
      position="top "
      transparent
      color="mdb"
      dark
      scrolling
      class="sticky-top"
      >
      <mdb-btn color="primary" @click.native="toggleSideNav">UNITS</mdb-btn>
    </mdb-navbar>
      <img src="../assets/lending.png" alt="Loading" class="rounded mx-auto d-block img-fluid">
    </mdb-container>
  </div>
</template>

<script>
// @ is an alias to /src

import {
     mdbNavbar, 
     mdbBtn,
     mdbContainer
} from 'mdbvue'; 
import{ mapActions} from 'vuex'; 
export default {
  name: 'Home',
  components: { 
    mdbNavbar, 
    mdbBtn,
    mdbContainer
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
      scrollToTop() {
        window.scrollTo(0,0);
    },
    mounted () {
    this.activePage = this.$route.name
  },
  updated () {
    this.activePage = this.$route.name
  }
}
</script>

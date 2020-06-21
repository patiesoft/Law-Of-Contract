<template>
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
        <mdb-nav-item href="#/" waves-fixed active>Home</mdb-nav-item>
        <mdb-nav-item href="#/About" waves-fixed active>Overview</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle slot="toggle"  waves-fixe  tag="li" outline="none" class="btn-red">Units</mdb-dropdown-toggle>
          <mdb-dropdown-menu color="red">
            <mdb-dropdown-item href="#/Unit1">Unit1</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit2">Unit2</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit3">Unit3</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit4">Unit4</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit5">Unit5</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit6">Unit6</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit7">Unit7</mdb-dropdown-item>
            <mdb-dropdown-item href="#/Unit8">Unit8</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
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
import { mapActions } from 'vuex';
export default {
  name: "NavbarPage",
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
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
};
</script>

<style scoped>

.navbar {
  background: #1e88e5 ;
}

</style>

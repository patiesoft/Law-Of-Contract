<template>
  <div class="white-skin mdb-admin-sidenav">
    <mdb-side-nav
      logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
      sideNavClass="sn-bg-4"
      mask="strong"
      :OpenedFromOutside.sync="toggle"
    >
      <li>
        <form class="search-form" role="search">
          <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </form>
      </li>
      <li>
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Dashboards" icon="tachometer-alt">
            <mdb-side-nav-item
              to="/"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 1</mdb-side-nav-item
            >
            <mdb-side-nav-item
              to="/dashboards/v-2"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 2</mdb-side-nav-item
            >
            <mdb-side-nav-item
              to="/dashboards/v-3"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 3</mdb-side-nav-item
            >
            <mdb-side-nav-item
              to="/dashboards/v-4"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 4</mdb-side-nav-item
            >
            <mdb-side-nav-item
              to="/dashboards/v-5"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 5</mdb-side-nav-item
            >
            <mdb-side-nav-item
              to="/dashboards/v-6"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Version 6</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Pages" icon="image">
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/login"
              >Login</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/register"
              >Register</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/pricing"
              >Pricing</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/about"
              >About us</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/single"
              >Single post</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/post"
              >Post listing</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              target="_blank"
              to="/pages/landing"
              >Landing Page</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/pages/customers"
              >Customers</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/pages/invoice"
              >Invoice</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/pages/page"
              >Page Creator</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/pages/support"
              >Support</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/pages/chat"
              >Chat</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Profile" icon="user">
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/profiles/basic-1"
              >Basic 1</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/profiles/basic-2"
              >Basic 2</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/profiles/extended"
              >Extended</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="CSS" fab icon="css3">
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/grid"
              >Grid system</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/media"
              >Media object</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/utilities"
              >Utilities / helpers</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/code"
              >Code</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/icons"
              >Icons</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/images"
              >Images</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/typo"
              >Typography</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/colors"
              >Colors</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/hover"
              >Hover effects</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/masks"
              >Masks</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/shadows"
              >Shadows</mdb-side-nav-item
            >
            <mdb-side-nav-item
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/css/skins"
              >Skins</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Components" icon="th">
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/buttons"
              >Buttons</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/cards"
              >Cards</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/panels"
              >Panels</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/list"
              >List group</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/pagination"
              >Pagination</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/progress"
              >Progress bars</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/tabs"
              >Tabs & pills</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/tags"
              >Tags, labels & badges</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/collapse"
              >Collapse</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/datepicker"
              >Date picker</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/timepicker"
              >Time picker</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/tooltips"
              >Tooltips</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/popovers"
              >Popovers</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/components/stepper"
              >Stepper</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Forms" far icon="check-square">
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/forms/basic"
              >Basic</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/forms/extended"
              >Extended</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Tables" icon="table">
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/tables/basic"
              >Basic</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/tables/extended"
              >Extended</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/tables/datatables"
              >DataTables</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Maps" icon="map">
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/maps/googlemaps"
              >Google Maps</mdb-side-nav-item
            >
            <mdb-side-nav-item
              class="ripple-parent"
              @click.native="width < 1440 && toggleSideNav(false)"
              to="/maps/fullscreen"
              >Full screen map</mdb-side-nav-item
            >
          </mdb-side-nav-cat>
          <mdb-side-nav-item
            header
            @click.native="width < 1440 && toggleSideNav(false)"
            icon="bolt"
            to="/modals/modals"
            >Modals</mdb-side-nav-item
          >
          <mdb-side-nav-item
            header
            @click.native="width < 1440 && toggleSideNav(false)"
            icon="chart-pie"
            to="/charts/charts"
            >Charts</mdb-side-nav-item
          >
          <mdb-side-nav-item
            header
            @click.native="width < 1440 && toggleSideNav(false)"
            far
            icon="calendar-check"
            to="/calendar/calendar"
            >Calendar</mdb-side-nav-item
          >
          <mdb-side-nav-item
            header
            @click.native="width < 1440 && toggleSideNav(false)"
            icon="th-large"
            to="/sections/sections"
            >Sections</mdb-side-nav-item
          >
        </mdb-side-nav-nav>
      </li>
    </mdb-side-nav>
  </div>
</template>

<script>
import {
  mdbSideNav,
  mdbSideNavNav,
  mdbSideNavCat,
  mdbSideNavItem,
  waves
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SideNav",
  props: {
    waves: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean
    }
  },
  components: {
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem
  },
  data() {
    return {
      active: 0,
      elHeight: 0,
      windowHeight: 0,
      toggle: true,
      width: 0
    };
  },
  computed: mapGetters(["sidenav"]),
  methods: {
    ...mapActions(["toggleSideNav"]),
    afterEnter(el) {
      el.style.maxHeight = "1000px";
    },
    beforeLeave(el) {
      el.style.maxHeight = 0;
    },
    setWidth() {
      this.width = window.innerWidth;
    }
  },
  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
  watch: {
    toggle(value) {
      this.toggleSideNav(value);
    },
    sidenav(value) {
      this.toggle = value;
    },
    width(value) {
      if (value < 1440) {
        this.toggle = false;
      } else this.toggle = true;
    }
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.side-nav {
  opacity: 1 !important;
  transition: transform 0.3s linear !important;
}
</style>

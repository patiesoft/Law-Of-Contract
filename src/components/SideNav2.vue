<template>
  <div class="white-skin mdb-admin-sidenav">
    <mdb-side-nav
      sideNavClass="sn-bg-9"
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
            <mdb-side-nav-item
            href="#/Unit1"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit 1</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit2"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit2</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit3"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit3</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit4"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit4</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit5"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit5</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit6"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit6</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit7"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit7</mdb-side-nav-item
            >
            <mdb-side-nav-item
              href="#/Unit8"
              @click.native="width < 1440 && toggleSideNav(false)"
              >Unit8</mdb-side-nav-item
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

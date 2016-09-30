<template>
  <section class="hero is-bold app-navbar">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet touchable sidebar-toggle" @click="toggleSidebar">
            <span class="icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </a>

          <a class="nav-item hero-brand touchable" href="#">
            <img src="../assets/logo.svg" alt="Campusnavi" class="img-brand">
            <div class="is-hidden-mobile">
              <span class="vue">Vue</span><strong class="admin">Admin</strong>
            </div>
          </a>

        </div>
        <div class="nav-center">

        </div>

        <div class="nav-right is-flex">
          <user-profile></user-profile>
        </div>
      </nav>
    </div>
  </section>
</template>

<script type="text/babel">
  import UserProfile from './UserProfile';

export default {
  vuex: {
    getters: {
      sidebar: state => state.sidebar
    }
  },

  components: {
    UserProfile
  },

  methods: {
    toggleSidebar () {
      this.sidebar.opened = !this.sidebar.opened;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '~bulma/sass/utilities/variables';
@import '../scss/base/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  /*box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);*/
  border-bottom:  $navbar-border-bottom;

  .nav {
    min-height: 60px;
  }

  .container {
    margin: auto 10px;
  }

  .nav-item {
    padding: 5px;
  }

  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }

  .sidebar-toggle {
    &:hover {
      background: $grey-lighter;
    }
  }

  .hero-brand {
    // text-indent: -3000px;
    padding: 0;
    justify-content: inherit;

    .img-brand {
      max-height: 60px;
      padding: 0 10px 0 0;
    }
  }

}


</style>

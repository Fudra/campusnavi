<template>
  <nav class="level app-levelbar">
    <div class="level-left">
      <div class="level-item">
        <h3 class="subtitle is-5">
          <span>{{ name }}</span>
        </h3>
      </div>
    </div>

    <!--<div class="level-right is-hidden-mobile">-->
      <!--<breadcrumb :list="list"></breadcrumb>-->
    <!--</div>-->
  </nav>
</template>

<script type="text/babel">
import Breadcrumb from 'vue-bulma-breadcrumb';

export default {
  vuex: {
    getters: {
      menu: state => state.menu
    }
  },

  components: {
    Breadcrumb
  },

  data () {
    return {
      defaultList: [
        {
          label: 'Home',
          link: 'Dashboard'
        }
      ]
    };
  },

  computed: {
    name () {
      return this.$route.name || this.$route.title;
    },

    list () {
      return this.defaultList.concat(this.find(this.name, this.menu));
    }
  },

  methods: {
    find (name, list) {
      let temp = [];
      for (let i = 0, l = list.length; i < l; ++i) {
        let item = list[i];
        if (item.label === name || item.link === name) {
          temp.push({
            label: item.label,
            link: item.link
          });
          break;
        }

        if (item.subMenu) {
          if (item.link) {
            temp.push({
              lable: item.label,
              link: item.link
            });
          }
          let e = this.find(name, item.subMenu);
          if (e.length) {
            temp = temp.concat(e);
          } else if (item.link) {
            temp.pop();
          }
        }
      }

      return temp;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">

  .level-item {
      padding: 40px 0;
  }

  .subtitle span {
    font-size:40px;
    font-weight: 200;
  }

</style>

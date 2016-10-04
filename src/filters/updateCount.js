import Vue from 'vue';

Vue.filter('updateCount', function (arr) {
   this.$set('filteredLength', arr.length);

   //   this.thisUpdateCounter = arr.length;
   // return it intact
   return arr;
});

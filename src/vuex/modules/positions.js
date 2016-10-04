import {
   COUNT_ITEMS,
   SEARCH_ITEM
} from '../mutation-types'

const state = {
   search: '',
   itemCount: -1
};

const mutations = {
   [SEARCH_ITEM] (state, value) {
      state.search = value;
      console.log('Debug: SEARCH_ITEM' + state.search);
   },

   [COUNT_ITEMS] (state, value) {
      state.itemCount = value;
      console.log('Debug: COUNT_ITEMS' + state.itemCount);
   }
};

export default {
   state,
   mutations
}

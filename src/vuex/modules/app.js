import {
   COUNT_ITEMS,
   SEARCH_ITEM
} from '../mutation-types';

const state = {
   search: '',
   itemCount: -1
};

const mutations = {
   [SEARCH_ITEM] (state, value) {
      state.search = value;
   },

   [COUNT_ITEMS] (state, value) {
      state.itemCount = value;
   }
};

export default {
   state,
   mutations
};

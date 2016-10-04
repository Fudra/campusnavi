import * as types from './mutation-types';

export const searchItem = ({dispatch}, value) => dispatch(types.SEARCH_ITEM, value);
export const countItems = ({dispatch}, value) => dispatch(types.COUNT_ITEMS, value);

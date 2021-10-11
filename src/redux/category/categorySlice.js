/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { buildCategoryTree, replaceKeysDeep } from '../../utils/utils';

export const categorySlice = createSlice( {
  name: 'category',
  initialState: {
    categories: [],
    categoriesTree: [],
    breadCrumbsTree: [],
    categoryById: {},
  },
  reducers: {
    setAllCategory: ( state, { payload } ) => {
      state.categories = payload;
      const cloneCategories = cloneDeep( state.categories );
      const instead = { _id: 'key', name: 'label', children: 'nodes' };
      const tree = buildCategoryTree( payload );
      state.categoriesTree = replaceKeysDeep( tree, instead );
      state.breadCrumbsTree = buildCategoryTree( cloneCategories, false );
    },
    setCategoryById: ( state, { payload } ) => {
      state.categoryById = payload;
    },
  },
} );

export const { setAllCategory, setCategoryById } = categorySlice.actions;

export default categorySlice.reducer;

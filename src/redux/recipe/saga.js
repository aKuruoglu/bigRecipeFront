import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getAllRecipesApi,
  getRecipeByIdApi,
  updateRecipeApi,
  addRecipeApi,
  deleteRecipeApi,
  getRecipesByCategoryApi, updateRecipeCategoryApi,
} from '../../api/apiRecipe';
import actionTypes from './actionTypes';
import { setAllRecipes, setRecipeById } from './slice';

export function* fetchRecipesSaga ( { payload } ) {
  try {
    const result = yield call( getAllRecipesApi, payload );
    yield put( setAllRecipes( result.data ) );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* fetchRecipesByIdSaga ( { payload } ) {
  try {
    yield put( setRecipeById( null ) );
    const result = yield call( getRecipeByIdApi, payload );
    yield put( setRecipeById( result.data ) );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* fetchRecipesByCategorySaga ( { payload } ) {
  try {
    const result = yield call( getRecipesByCategoryApi, payload );
    yield put( setAllRecipes( result.data ) );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* updateRecipeByIdSaga ( { payload } ) {
  try {
    yield call( updateRecipeApi, payload );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* updateRecipeCategorySaga ( { payload } ) {
  try {
    const result = yield call( updateRecipeCategoryApi, payload );
    yield put( setRecipeById( result.data ) );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* addRecipeByIdSaga ( { payload } ) {
  try {
    yield call( addRecipeApi, payload );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export function* deleteRecipeSaga ( { payload } ) {
  try {
    yield call( deleteRecipeApi, payload );
  } catch ( e ) {
    yield put( { type: 'TODO_FETCH_FAILED' } );
  }
}

export default [
  takeEvery( actionTypes.GET_ALL_RECIPE, fetchRecipesSaga ),
  takeEvery( actionTypes.GET_RECIPE_BY_ID, fetchRecipesByIdSaga ),
  takeEvery( actionTypes.GET_ALL_RECIPES_BY_CATEGORY, fetchRecipesByCategorySaga ),
  takeEvery( actionTypes.UPDATE_RECIPE, updateRecipeByIdSaga ),
  takeEvery( actionTypes.UPDATE_RECIPE_CATEGORY, updateRecipeCategorySaga ),
  takeEvery( actionTypes.ADD_RECIPE, addRecipeByIdSaga ),
  takeEvery( actionTypes.DELETE_RECIPE, deleteRecipeSaga ),
];

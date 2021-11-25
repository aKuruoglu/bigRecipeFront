import categoryActionsTypes from './categoryActionsTypes';

export const getCategories = () => ( { type: categoryActionsTypes.FETCH_CATEGORY_SAGA } );
export const getById = ( id ) => ( {
  type: categoryActionsTypes.GET_BY_ID,
  payload: {
    id,
  },
} );

export const editCategories = ( id, data, history ) => ( {
  type: categoryActionsTypes.EDIT_CATEGORY,
  payload: {
    data,
    id,
    history,
  },
} );

export const deleteCategory = ( id ) => ( {
  type: categoryActionsTypes.DELETE_CATEGORY,
  payload: {
    id,
  },
} );

export const addCategory = ( data, history ) => ( {
  type: categoryActionsTypes.ADD_CATEGORY,
  payload: {
    data,
    history,
  },
} );

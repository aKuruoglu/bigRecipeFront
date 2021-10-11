import axios from 'axios';
import config from '../config';

export const getAllRecipesApi = ( { page, limit } ) => axios.get( `${ config.baseUrl }/recipe/${ page }/${ limit }` );
export const getRecipeByIdApi = ( { id } ) => axios.get( `${ config.baseUrl }/recipe/${ id }` );
export const getRecipesByCategoryApi = ( { id, page, limit } ) => axios.get( `${ config.baseUrl }/recipe/category/${ id }/${ page }/${ limit }` );
export const updateRecipeApi = ( { data } ) => axios.put( `${ config.baseUrl }/recipe/${ data._id }`, data );
export const updateRecipeCategoryApi = ( { id, catId } ) => axios.put( `${ config.baseUrl }/recipe/${ id }/change-category/${ catId }` );
export const addRecipeApi = ( { data } ) => axios.post( `${ config.baseUrl }/recipe`, data );
export const deleteRecipeApi = ( { id } ) => axios.delete( `${ config.baseUrl }/recipe/${ id }`, {
  data: {},
  headers: {
    'Content-Type': 'application/json',
  },
} );

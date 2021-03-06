import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TreeMenu from 'react-simple-tree-menu';
import 'react-simple-tree-menu/dist/main.css';
import { getById } from '../../redux/recipe/actions';

const CategoryTree = ( { categoryTree, initialActiveKey, onClickItem = null } ) => {
  const [tree, setTree] = useState( null );

  useEffect( () => {
    let options = {};

    if ( !categoryTree.length ) {
      return;
    }

    if ( initialActiveKey ) {
      const temp = initialActiveKey.split( '/' );
      const initialOpenNodes = temp.splice( 0, temp.length - 1 ).join( '/' );
      options = {
        initialActiveKey,
        initialOpenNodes,
      };
    }

    setTree( <TreeMenu
      data={ categoryTree }
      hasSearch={ false }
      { ...options }
      onClickItem={ onClickItem }
    /> );
  }, [categoryTree, initialActiveKey, onClickItem] );

  return tree;
};

CategoryTree.propTypes = {
  categoryTree: PropTypes.arrayOf( PropTypes.object ).isRequired,
  getByIdCall: PropTypes.func.isRequired,
};

export default connect( ( state ) => ( {
  categoryTree: state.category.categoriesTree,
} ), {
  getByIdCall: getById,
} )( CategoryTree );

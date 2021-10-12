import React from 'react';
import { useHistory } from 'react-router-dom';

const WrapSimple = ( { children } ) => {
  const history = useHistory();

  const goBack = () => {
    if ( history.length > 2 ) {
      history.goBack();
    }
  };

  return (
    <div className="container h-100 p-3">
      <main className="h-100">
        <span onClick={ goBack } className="arrowBack">
          <i className="fas fa-arrow-left" />
        </span>
        {children}
      </main>
    </div>
  );
};

export default WrapSimple;

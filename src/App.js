import React, { Fragment } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';

const App = () => {
  return (
    <Fragment>
      <Header title="React App" />
      <Characters />
    </Fragment>
  );
};

export default App;

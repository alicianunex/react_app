import React, { Fragment } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import Footer from './components/Footer';
import './main.css';

const App = () => {
  return (
    <Fragment>
      <Header title="Rick and Morty" />
      <Characters />
      <Footer />
    </Fragment>
  );
};

export default App;

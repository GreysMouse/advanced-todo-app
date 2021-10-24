import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import './styles/app.css';
import './styles/app__container.css';

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

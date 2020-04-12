import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Main from './Main';

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

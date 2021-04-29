import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import MobileNavBar from './components/MobileNavBar';
import InfoSection from './components/InfoSection';

function App(props) {
  return (
    <div>
         <div className="bg-dark d-flex justify-content-center text-white align-items-center fw-bold" style={{ height: '40px' }}>
                Free shipping on orders over $49
    </div>
<div className="d-block d-lg-none sticky-top">
      <MobileNavBar/>
</div>
    <div className="d-none d-lg-block  sticky-top">
     <NavBar/>
    </div>
     <Header/>
<InfoSection/>
    </div>
  );
}

export default App;
import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import Title from './Title';
import style from './style.js'
// import useSite from './useSite';





function App() {
  // const {view} = useSite();

  return (
    
     <div style={style.bodyWrapper}>
    <div className="container">
      <div className="row">
      <header    style={style.headerWrapper}>
        <Title />
        <Navbar />
      </header>     
      </div>
          
      {/* <div style={style.contentWrapper}> */}
      {/* <i style={view===1 ? style.leftArrowShow : style.leftArrowHide}></i> */}
      <div className="row">
        <Content />
      </div>
      {/* <i style={view===1 ? style.rightArrowShow : style.rightArrowHide}></i> */}
      {/* </div> */}
          
        
    </div>
    </div>
  );
}

export default App;

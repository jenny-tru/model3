import React from 'react';
import './App.scss';
//import { useAlert } from 'react-alert';
import carView from './images/car-view.JPG';
import accessibility from './images/accessibility.JPG';

function App() {
  return (
  
    <div id="model3">
      <header className="screen">
        
        <div className="drive-view">
          <div className="speed">

            <h1 className="speed-number">70 <br /> mph</h1>
          </div>
          <div className="prndl">
          <h2>P R N D</h2>
          </div>
          <div className="car-view">
            <img src={carView} />
          </div>
          <div className="accessibility">
            <img src={accessibility} />
          </div>
        </div> 

        <div className="map">
             <iframe style={{height: '100%', width: '100%'}}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyQoRJK5qkFQRXy9CylEgEno&key=AIzaSyBQCUapHHYTqlW_x7H4aBU9og7VWvGRMEI">
              </iframe>
      </div> 
      </header>

      <div id="menu">
        <div className="item car-info">
          <button onClick={() => {
            alert('Clicked!')
          }}>🚘
          </button>
        </div>
        <div className="item music">
          <button onClick={() =>{
            alert('Clicked!')
          }}>🎵
          </button>
        </div>
        <div className="item expand-menu">📦</div>
        <div className="item driver-seat">🇲🇪</div>
        <div className="item ac-icon">💨</div>
        <div className="item temperature">🌡️</div>
        <div className="item passenger-seat">✋</div>
        <div className="item front-window">🍆</div>
        <div className="item back-window">🍑</div>
        <div className="item volume">🔊</div>
      </div>
    </div>
  );

    
}

export default App;

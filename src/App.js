import React, { useState, useReducer } from "react";
import "./App.scss";
import { MusicView } from "./MusicView";
import { ExtrasView } from "./extrasView";
import { AirCondView } from "./acView";
import carView from "./images/car-view.JPG";
import accessibility from "./images/accessibility.JPG";
import { SettingsView } from "./SettingsView";

//this updates the screen view
function viewReducer(state, event) {
  switch (event.type) {
    case 'update': 
      return {
        ...state,
        // we can add logic so that if event.view === state.view... 
        // we should hide everything
        // (some expression) ? (this if true) : (that if false)
        view: event.view === state.view ? null : event.view

      }

    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(viewReducer, { view: null });
  const view = state.view

  return (
    <div id="model3">
      <header className="screen">
        <div className="view-container">
          {/* this is where all the views go */}
          <SettingsView active={ view === 'settings'}/>
          <MusicView active={view === "music"} />
          <ExtrasView active={view === "extras"} />
          <AirCondView active={view === "ac"} /> 
        </div>
        <div className="drive-view">
          <div className="speed">
            <h1 className="speed-number">
              75 <br />
              mph
            </h1>
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
          <iframe
            style={{ height: "100%", width: "100%" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyQoRJK5qkFQRXy9CylEgEno&key=AIzaSyBQCUapHHYTqlW_x7H4aBU9og7VWvGRMEI"
          ></iframe>
        </div>
      </header>

      <div id="menu">
        <div className="item car-info">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: 'settings' })
            }}
          >
            🚘
          </button>
        </div>
        <div className="item music">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "music"});
            }}
          >
            🎵
          </button>
        </div>
        <div className="item extras">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "extras"});
            }}
          >
            📦
          </button>
        </div>
        <div className="item driver-seat">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "driver"});
            }}
          >
            🧍
          </button>
        </div>
        <div className="item ac-icon">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "ac"});
            }}
          >
            💨
          </button>
        </div>
        <div className="item temperature">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "temperature"});
            }}
          >
            🌡️
          </button>
        </div>
        <div className="item passenger-seat">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "passenger"});
            }}
          >
            🧑‍🤝‍🧑
          </button>
        </div>
        <div className="item front-window">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "passenger"});
            }}
          >
            🔼
          </button>
        </div>
        <div className="item back-window">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "passenger"});
            }}
          >
            🔙
          </button>
        </div>
        <div className="item volume">
          <button
            onClick={() => {
              dispatch({ type: 'update', view: "passenger"});
            }}
          >
            🔊
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

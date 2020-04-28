import React, { useReducer } from 'react';

const machine = {
  initial: 'half',
  states: {
    half: {
      on: {
        CLICK: 'full'
      }
    },
    full: {
      on: {
        CLICK: 'half'
      }
    }
  }
}

const initialState = {
  status: machine.initial
}

// state + event = nextState
function musicReducer(state, event) { // { type: 'CLICK' }
  return {
    ...state,
    status: machine
      .states[state.status] // what is the current status
      .on[event.type] // what is the next status
      || state.status
  }
}

export function MusicView({ active }) {
  const [state, dispatch] = useReducer(musicReducer, initialState);
  console.log(state);

  return (
    <div
      className="view"
      data-active={active || undefined}
      data-status={state.status}
      onClick={(event) => {
        dispatch({ type: 'CLICK' })
      }}>
      <h1>Music</h1>
    </div>
  )
}

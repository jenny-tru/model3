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

  // switch (state.status) {
  //   case 'half':
  //     switch (event.type) { // { type: 'CLICK' }
  //       case 'CLICK':
  //         return {
  //           ...state,
  //           status: 'full'
  //         }
        
  //       default:
  //         return state; // nothing changes
  //     }

  //   case 'full':
  //       switch (event.type) {
  //         case 'CLICK':
  //           return {
  //             ...state,
  //             status: 'half'
  //           }
          
  //         default:
  //           return state; // nothing changes
  //       }
    
  //   default:
  //     // this will never be reached
  //     return state; // nothing changes
  // }
}

// active is true or false
export function MusicView({ active }) {
  const [state, dispatch] = useReducer(musicReducer, initialState);

  console.log(state); // { status: 'half' }

  return (
    <div
      className="view"
      data-active={active || undefined}
      data-status={state.status}
      onClick={(event) => {
        // we don't care about the event
        dispatch({ type: 'CLICK' })
      }}>
      <h1>Music</h1>
    </div>
  )
}

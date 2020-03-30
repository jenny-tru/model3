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

function musicReducer(state, event) { // { type: 'CLICK' }
    return {
        ...state,
        status: machine
            .states[state.status] // what is the current status
            .on[event.type] // what is the next status
            || state.status
    }
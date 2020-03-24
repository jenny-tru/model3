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

function showAir(state, event) { 
    return {
        ...state,
        status: machine
            .states[state.status] // what is the current status
            .on[event.type] // what is the next status
            || state.status
    }

}


/* export function acView({ active }) {
    const [state, dispatch] = useReducer(showAir, initialState);

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
            <h1>AC View</h1>
        </div>
    )
} */

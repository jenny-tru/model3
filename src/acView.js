import React, {useReducer} from 'react';

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

function acReducer(state, event) { // { type: 'CLICK' }
    return {
        ...state,
        status: machine
            .states[state.status] // what is the current status
            .on[event.type] // what is the next status
            || state.status
    }
}


export function acView({ active }) {
    const [state, dispatch] = useReducer(acReducer, initialState);

    console.log(state); // { status: 'half' }

    return (
        <div
            className="view"
            data-active={active || undefined}
            data-status={state.status}
            onClick={(event) => {
                dispatch({ type: 'CLICK' })
            }}>
            <h1>Air Controls</h1>
        </div>
    )
}

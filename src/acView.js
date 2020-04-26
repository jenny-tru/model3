import React, {useReducer} from 'react';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

// active (in our case) means...
// it's the only active view
// and we don't control that
export function AirCondView({ active }) {
    return (
        <div
            className="view"
            data-active={active || undefined}>
            <h1>AC</h1>
        </div>
    )
}

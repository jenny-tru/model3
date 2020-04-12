import React, {useReducer} from 'react';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

// const acMachine = createMachine({
//     // replace full with open... everywhere
//     initial: 'open',
//     states: {
//         open: {
//             on:{
//                 CLICK: 'hidden'
//             }
//             // do the same thing here
//         },
//         // let's add another state
//         hidden: {
//             on: {
//                 CLICK: 'open'
//             }
//         }
//     }
// })


// active (in our case) means...
// it's the only active view
// and we don't control that
export function AirCondView({ active }) {
    return (
        <div
            className="view"
            data-active={active || undefined}>
            <h1>Air Controls</h1>
        </div>
    )
}

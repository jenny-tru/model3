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


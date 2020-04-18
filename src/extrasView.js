import React, {useReducer} from 'react'
import { createMAchine } from 'xstate'
import {useMachine} from '@xstate/react'

export function ExtrasView({ active }) {
    return (
        <div
            className="view"
            data-active={active || undefined}>
            <h1>Extra Stuff</h1>
        </div>
    )
}
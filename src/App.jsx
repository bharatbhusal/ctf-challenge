import React from 'react'
import { unlock } from './unlock'
import { decode } from "./decode"

const App = () => {
    return (
        <div>
            <h1>Unlock</h1>
            {/* <button onClick={unlock}>unlock</button> */}
            <button onClick={decode}>Decode</button>
        </div>
    )
}

export default App
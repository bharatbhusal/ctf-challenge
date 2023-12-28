import React from 'react'
import { unlock } from './unlock'

const App = () => {
    return (
        <div>
            <h1>Unlock</h1>
            <button onClick={unlock}>unlock</button>
        </div>
    )
}

export default App
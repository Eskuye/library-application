import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>          
        </div>
    )
}

export default App

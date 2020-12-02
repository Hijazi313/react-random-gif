import React from 'react'

import './App.css';
import Random from './components/Random';

const  App = ()=> {
    return (
        <div>
             <h1> Random Gif Application </h1> 
            <div className="container">
                <Random />
            </div>

        </div>
    )
}

export default App 
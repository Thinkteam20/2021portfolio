import React from 'react';
import './Greeting.css';
import { FaCode } from "react-icons/fa";


function Greeting() {
    return(
        <div className='home-section'>
        <div className="home-contents">
            <h1>Sangpil Jung</h1>
            <h3><FaCode /> Front End developer </h3>
        </div>
            <div>
                <button> ↓ </button>
            </div>
        </div>
    )
}

export default Greeting;


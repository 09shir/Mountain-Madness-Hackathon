import React, { useState } from 'react'
import Test from '../components/Test'
import '../App.css'

const Main = () => {
    return (
        <div className="meeting-full-page">
            <div className="meeting-header">
            <h1>Study Buddy</h1>
            <p>Welcome to Study Buddy! Join or host a meeting!</p>
            </div>
            <div className="meeting-options">
            <div className="meeting-join">
                <h2>Join.</h2>
                <p>Join a meeting</p>
                <button className="btn join">Join</button>
            </div>
            <div className="meeting-host">
                <h2>Host.</h2>
                <p>Host a meeting</p>
                <button className="btn host">Host</button>
            </div>
            </div>
        </div>
        );
}

export default Main;

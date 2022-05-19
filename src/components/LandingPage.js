import React from 'react'
import { Link } from 'react-router-dom'
import './loginpage.css'


import BackgroundImage from '../images/bn.jpg';

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / Register page</h1>
            <p className="main-para text-center">Buy and sell Fresh vegetables and fruits</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link>
               
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
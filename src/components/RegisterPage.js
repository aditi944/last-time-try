import React from 'react'
import { Link } from 'react-router-dom'
import hawker from '../images/hawker.png'
import customer from '../images/customer.png'

import './loginpage.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
           
            <h2>Create your personal account</h2>
            <form action="/home">
                    <h4>
                    Choose Your Account Type
                </h4>
                <br/>
                <div className="account-type">
                <div className="user">
                <img src={customer}/>
             </div>
             <div className="hawker">
                <img src={hawker}/>
             </div>
             
                </div>
                <br/>
              
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}

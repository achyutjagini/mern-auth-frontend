import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import api from '../api/index'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        const name = username
        const pass = password
        const payload = { name, password }
        console.log(JSON.stringify(payload))

        await api.signup(JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            window.alert(`signup successfull`)
            navigate('/login')
        }).catch(err => {
            console.log(err)
            setError('User already exists')
        }
        )
    }


    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1 class="login_h1">Sign Up</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input class="login_input" type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input class="login_input" type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button class="login_button" onClick={registerUser}>Sign Up</button>
                    <p class="p_login">Already have an account?<Link to="/login" class="link_login"> Log in</Link></p>

                </form>
            </div>
        </div>

    )
}

export default SignUp
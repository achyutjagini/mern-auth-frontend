import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import api from '../api/index'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const add_elem = () => {

    }

    const loginUser = async (e) => {
        e.preventDefault()
        const name = username
        const pass = password
        const payload = { name, password }
        console.log(JSON.stringify(payload))

        await api.signin(JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            window.alert(`login successfull`)
            navigate('/dashboard')
        }).catch(err => {
            setError('Invalid username or password')
            console.log(err)
        }
        )
    }




    return (
        <div className='container'>
            <div className='formdiv'>

                <form>
                    <div className='heading'>
                        <h1 class="login_h1">Log in</h1>
                    </div>
                    {/* <label>Username</label> */}
                    <input class="login_input" id="username" type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <br></br>
                    {/*     <label>Password</label> */}
                    <input class="login_input" type='password' id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button class="login_button" onClick={loginUser} >Log in</button>

                    <p class="p_login">Not a member yet? <Link to="/sign-up" class="link_login">Sign Up</Link></p>


                </form>
            </div>
        </div>

    )
}

export default Login

import "./navbar.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <h1>MERN app</h1>
                <div class="menu">

                    <Link class="link" to="/about"><p>About</p></Link>
                    <Link class="link" to="/services"><p>Services</p></Link>
                    <Link class="link" to="/contact"><p>Contact Us</p></Link>
                    <Link class="link" to="/sign-up"><p>Sign up</p></Link>
                </div>
                <Link class="link" to="/login">
                    <button>Sign in</button>
                </Link>

            </nav>

        </>
    )
}

export default NavBar
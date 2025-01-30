import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo_hrnet.png"

function Header() {
    return (
        <header className="ligne">
            <img src={logo} />
            <h1>HRnet</h1>
            <nav id="navp">
                <Link className="link" to="/">Create employee</Link>
                <Link className="link" to="/registre">Current Employees</Link>
            </nav>
        </header>
    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="ligne">
            <h1>HRnet</h1>
            <nav>
                <Link className="link" to="/">Create employee</Link>
                <Link className="link" to="/registre">Current Employees</Link>
            </nav>
        </header>
    )
}

export default Header
import React from "react";
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [login, setLogin] = useState("Login")

    const handleLogin = () => {
        login == "Login" ? setLogin("Logout") : setLogin("Login")
    }

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <button className="login" onClick={handleLogin}>{login}</button>
                    <li> 
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../App";

function Nabar() {
    const { state, dispatch } = useContext(UserContext);
    const TogleMenu = () => {
        if (state) {
            return (
                <>
                    <NavLink className="nav-link text-dark" to="/dashboard">
                        Dashboard
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/courses">
                        Courses
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/discussions">
                        Discussions
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/logout">
                        Logout
                    </NavLink>
                </>
            );
        } else {
            return (
                <>
                    <NavLink className="nav-link text-dark" to="/">
                        Login
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/Register">
                        Register
                    </NavLink>
                </>
            );
        }
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://i.postimg.cc/gjr2fyJZ/stdLogo.png" alt="logo" className="color" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <TogleMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nabar;

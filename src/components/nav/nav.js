import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/portfolio">Portfolios</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/commissionRequest/create">Commission Requests</Link>
            </li>

        </ul>
    )
}
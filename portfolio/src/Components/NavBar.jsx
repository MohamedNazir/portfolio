import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia'

const NavBar = () => {
    return(
        <div>
            
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark ">
        <NavLink className="navbar-brand" to="/">Mohamed Nazir</NavLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink className="nav-link" to ="/home">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to ="/about">About</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to ="/skills">Skills</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to ="/project">Project</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to ="/contact">Contact</NavLink>
                </li>
            </ul>
            <ul>
                <div><SocialMedia/></div>
            </ul>
        </nav>
        </div>
    )
}
export default NavBar;
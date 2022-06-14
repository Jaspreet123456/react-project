import React from 'react';
import NavLink from 'react-router-dom/NavLink';

const NavBar = () => {
    return (
        <>
            <h1>Welcome to my Page</h1>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <NavLink to='/Contact'>Contact</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/Employee'>Employee</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/About'>About Us</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/Attendance'>Attendance</NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
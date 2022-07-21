import React, {useState} from 'react'
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div>
            <div>
                <span><NavLink to={'/pre-junior'}>PreJunior </NavLink></span>
                <span><NavLink to={'/junior'}>Junior </NavLink></span>
                <span><NavLink to={'/junior-plus'}>JuniorPlus </NavLink></span>
            </div>

        </div>
    )
}

export default Header

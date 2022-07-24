import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div>
            <span><NavLink className={s.navlinks} to={'/pre-junior'}>PreJunior </NavLink></span>
            <span><NavLink className={s.navlinks} to={'/junior'}>Junior </NavLink></span>
            <span><NavLink className={s.navlinks} to={'/junior-plus'}>JuniorPlus </NavLink></span>
        </div>
    )
}

export default Header

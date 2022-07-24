import React, {useState} from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import s from './Header.module.css'

function HW5() {
    const [onOff, setOnOff] = useState(true)
    const onMouseHandler = () => {
        setOnOff(!onOff)
    }
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div className={s.navbar}>
                    <button className={s.button} onMouseOver={onMouseHandler}/>
                    {!onOff && <Header/>}
                </div>
                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5

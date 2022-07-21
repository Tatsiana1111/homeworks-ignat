import React, {useState} from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";

function HW5() {
    const [onOff, setOnOff] = useState(true)
    const onMouseHandler = () => {
        setOnOff(!onOff)
    }
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <span>
                    <button onMouseOver={onMouseHandler}>BUTTON</button>
                    {!onOff && <Header/>}
                </span>
                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5

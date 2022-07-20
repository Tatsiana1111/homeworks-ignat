import React from 'react'
import {AffairType, filterAffairs} from "./HW2";
import Affairs from "./Affairs";
import affairs from "./Affairs";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span> {props.affair.name} </span>
            <span> {props.affair.priority} </span>
            <SuperButton onClick={deleteCallback} red>X</SuperButton>
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair

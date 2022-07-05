import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

export type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return props.setFilter('all')
    }
    const setHigh = () => {
        return props.setFilter('high')
    }
    const setMiddle = () => {
        return props.setFilter('middle')
    }
    const setLow = () => {
        return props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

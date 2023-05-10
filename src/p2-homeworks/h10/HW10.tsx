import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loader from "../../loader.svg";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>((state) => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        const changeLoadingStatus = (isLoading: boolean) => dispatch(loadingAC(isLoading))
        setTimeout(changeLoadingStatus, 1000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img alt='loader' style={{width: '30px', height: '30px'}} src={loader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

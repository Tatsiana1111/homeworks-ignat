const initState = {
    isLoading: false
}
export type InitialStateType = {
    isLoading: boolean
}
type ActionType = {
    type: 'IS_LOADING_STATUS'
    isLoading: boolean
}


export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS_LOADING_STATUS': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {type: "IS_LOADING_STATUS", isLoading: isLoading}
} // fix any
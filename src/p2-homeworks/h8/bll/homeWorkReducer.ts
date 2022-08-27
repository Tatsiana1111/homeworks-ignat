import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state]
            stateCopy.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else return 0
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(age => age.age >= action.payload)
        }
        default:
            return state
    }
}
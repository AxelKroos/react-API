import {GET_INFO} from "../actions/actionTypes";

const initialState = {
    data: []
}

export default function currentInfo(state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}
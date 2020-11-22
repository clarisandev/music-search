import { GET_MUSIC } from '../constants'

const initialState = {
    search: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:    
        return {
            ...state,
            search: action.payload,
            };
        default:
            return state
    }
}

export default reducers;
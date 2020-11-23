import { GET_MUSIC, GET_PLAYER } from '../constants'

const initialState = {
    search: [],
    track: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:    
        return {
            ...state,
            search: action.payload,
            };
        case GET_PLAYER:
            return {
                ...state,
                track: action.payload 
            }
        default:
            return state
    }
}

export default reducers;
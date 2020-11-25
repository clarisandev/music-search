import { GET_MUSIC, GET_PLAYER, GET_ARTIST_TOP_FIVE, GET_ARTIST_ALBUMS, GET_ALBUM_TRACKS, GET_ALBUM } from '../constants'

const initialState = {
    search: [],
    track: [],
    artistTopFive: [],
    artistAlbums: [],
    tracks: [],
    album: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:
            return {
                ...state,
                search: action.payload
            };
        case GET_PLAYER:
            return {
                ...state,
                track: action.payload
            }
        case GET_ARTIST_TOP_FIVE:
            return {
                ...state,
                artistTopFive: action.payload
            }
        case GET_ARTIST_ALBUMS:
            return {
                ...state,
                artistAlbums: action.payload
            }
        case GET_ALBUM:
            return {
                ...state,
                album: action.payload
            }
        default:
            return state
    }
}

export default reducers;
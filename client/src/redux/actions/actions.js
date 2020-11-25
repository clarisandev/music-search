import axios from 'axios'
import {
    GET_MUSIC, GET_PLAYER, GET_ARTIST_TOP_FIVE, GET_ARTIST_ALBUMS, GET_ALBUM_TRACKS, GET_ALBUM
} from '../constants'
var qs = require('qs');

const url = "http://localhost:3001/";

export const actionSearch = (search) => {
    return (dispatch) => {
          axios.get(url + 'search/?search=' + search, { withCredentials: true }).then((res) => {
                dispatch({ type: GET_MUSIC, payload: res.data });
          })
    };
}

export const actionGetPlayer = (track_id) => {
      return (dispatch) => {
            axios.get(url + 'player/?track_id=' + track_id, { withCredentials: true }).then(res => {
                  dispatch ({ type: GET_PLAYER, payload: res.data })
            })
      }
}

export const actionGetArtistTopFive = (artist_id) => {
      return (dispatch) => {
            axios.get(url + 'artist/top5/?artist_id=' + artist_id, { withCredentials: true }).then( res=> {
                  dispatch ({ type: GET_ARTIST_TOP_FIVE, payload: res.data })
            })
      }
}

export const actionGetArtistAlbums = (id) => {
      return (dispatch) => {
            axios.get(url + 'artist/albums/?id=' + id, { withCredentials: true }).then( res => {
                  dispatch ({ type: GET_ARTIST_ALBUMS, payload: res.data  })
            })
      }
}

export const actionGetAlbum = (id) => {
      return (dispatch) => {
            axios.get(url + 'artist/tracks/?id=' + id , { withCredentials: true }).then(res => {
                  dispatch({ type: GET_ALBUM, payload: res.data })
            })
      }
}

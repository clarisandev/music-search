import axios from 'axios'
import {
    GET_MUSIC, GET_PLAYER
} from '../constants'
var qs = require('qs');

const url = "http://localhost:3001/";

export const actionSearch = (search) => {
    return (dispatch) => {
          axios.get(url + 'music/?search=' + search, { withCredentials: true }).then((res) => {
                dispatch({ type: GET_MUSIC, payload: res.data });
          })
    };
}

export const actionGetPlayer = (id) => {
      return (dispatch) => {
            console.log(id)
            axios.get(url + 'player/?track=' + id, { withCredentials: true }).then(res => {
                  dispatch ({ type: GET_PLAYER, payload: res.data })
            })
      }
}
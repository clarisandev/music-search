import axios from 'axios'
import {
    GET_MUSIC
} from '../constants'
var qs = require('qs');

const url = "http://localhost:3001/";

export const actionSearch = (search) => {
    return (dispatch) => {
          axios.get(url + 'music/?search=' + search, { withCredentials: true }).then((res) => {
                dispatch({
                      type: GET_MUSIC,
                      payload: res.data
                });
          })
    };
}
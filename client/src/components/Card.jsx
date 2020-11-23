import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { actionGetPlayer } from '../redux/actions/actions'

const Card = (props) => {
    const { key, album } = props
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {
        dispatch(actionGetPlayer(album.id))
        console.log(album.id)
        setTimeout(() => {
            return history.push('/player')
        }, 200)
    }

    return (
        <div key={key}>
            <h1 onClick = {handleClick}> {album.title}</h1>
            <h2>{album.artist}</h2>
            <h2>{album.album}</h2>
        </div>
    )
}

export default Card
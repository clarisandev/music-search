import React from 'react'
import { useHistory } from 'react-router'

const Card = (props) => {
    const { key, album } = props
    const history = useHistory()

    const handleClick = () => {
        setTimeout(() => {
            return history.push('/player')
        }, 200)
    }

    return (
        <div key={key}>
            <h1 onClick = {handleClick()}> {album.title}</h1>
            <h2>{album.artist}</h2>
            <h2>{album.album}</h2>
        </div>
    )
}

export default Card
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { actionGetPlayer, actionGetArtist } from '../redux/actions/actions'

const Card = (props) => {
    const { key, album } = props
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {
        dispatch(actionGetPlayer(album.id))
        setTimeout(() => {
            return history.push('/player')
        }, 200)
    }

    return (
        <div className='CardContainer' onClick={handleClick} key={key}>
            <div  className='TextCardContainer'>
                <p  className='CardTitle'> {album.title_short}</p>
                <p  className='CardAlbum'>{album.album}</p>
                <p  className='CardArtist'>{album.artist}</p>
            </div>
            <div  className='ImgCardContainer'>
                <img src={album.image} alt='' />
            </div>
        </div>
    )
}

export default Card
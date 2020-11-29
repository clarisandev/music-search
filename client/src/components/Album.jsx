import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetPlayer, actionGetAlbum, actionGetArtist } from '../redux/actions/actions'
import { useHistory } from 'react-router'

const Album = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const album = useSelector(state => state.reducers.album)
    const artistAlbums = useSelector(state => state.reducers.artistAlbums)

    const [albums, setAlbums] = useState(artistAlbums)

    const handleClickAlbum = (album_id) => {
        dispatch(actionGetAlbum(album_id))
        setTimeout(() => {
            return history.push('/album')
        }, 200)
    }

    return (
        <div className='albumContainer'>
            <div className='albumPlayer'>
                <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=500&color=EF5466&layout=dark&size=medium&type=album&id=${album.id}&app_id=dark`} width="700" height="400"></iframe>
            </div>
            <div div className='albumInfo'>
                {/* <p className='moreOf'>MORE OF {album.artist}</p> */}
                    {albums.slice(0, 4).map(album => {
                        return (
                            <div key={album.id} className='artistAlbum' onClick={e => handleClickAlbum(album.id)} >
                                <div className='albumImg'>
                                    <img src={album.image} alt="" />
                                </div>
                                <div className='albumTitle'>
                                    {album.title}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )

}

export default Album
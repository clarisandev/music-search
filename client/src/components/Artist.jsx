import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { actionGetPlayer, actionGetAlbum } from '../redux/actions/actions'

const Artist = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const artistTopFive = useSelector(state => state.reducers.artistTopFive)
    const artistAlbum = useSelector(state => state.reducers.artistAlbums)
    const artist = useSelector(state => state.reducers.artist)

    const handleClick = (track_id) => {
        dispatch(actionGetPlayer(track_id))
        setTimeout(() => {
            return history.push('/player')
        }, 200)
    }

    const handleClickAlbum = (album_id) => {
        dispatch(actionGetAlbum(album_id))
        setTimeout(() => {
            return history.push('/album')
        }, 200)
    }

    return (
        <div className='artistContainer' >
            <div container className='topFiveContainer'>
                <div className='topFiveText'>
                    {artist.name}  TOP 5
                </div>
                {artistTopFive.map((track, index) => {
                    return (
                        <div className='topFiveArtist' key={track.id} onClick={e => handleClick(track.id)}>
                            <div className='topFiveTitle'>
                                {index + 1} - {track.title}
                            </div>
                            <div className='topFiveDuration'>
                                {track.duration}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div container className='albumsContainer'>
                <div className='albumsText'>
                    ALBUMS
                </div>
                <div className='otherAlbums'>
                    {artistAlbum.map(album => {
                    return (
                        <div key={album.id} className='albumArtist' onClick={e => handleClickAlbum(album.id)} >
                            <div className='albumsTitle'>
                                {album.title}
                            </div>
                            <div className='albumsImg'>
                                <img src={album.image} alt="" />
                            </div>
                        </div>
                    )
                })}
                </div>
                
            </div>
        </div>
    )
}

export default Artist
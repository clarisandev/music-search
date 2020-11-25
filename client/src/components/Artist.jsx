import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { actionGetPlayer , actionGetAlbum} from '../redux/actions/actions'

const Artist = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const artistTopFive = useSelector(state => state.reducers.artistTopFive)
    const artistAlbum = useSelector(state => state.reducers.artistAlbums)

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
        <div>
            <Grid container xs={12} className = 'artistContainer' >
                <Grid container className='topFiveContainer' item xs={6}>
                <div  className='topFiveText'>
                    TOP 5 
                </div>
                    {artistTopFive.map((track, index)=> {
                        return (
                            <div className='topFiveArtist' key={track.id} onClick={e => handleClick(track.id)}>
                                <div className='topFiveTitle'>
                                {index+1} - {track.title}
                                </div>
                                <div className='topFiveDuration'>
                                {track.duration}
                                </div>
                            </div>
                        )
                    })}
                </Grid>
                <Grid container className='albumsContainer' item xs={6}>
                <div  className='albumsText'>
                    ALBUMS
                </div>
                    {artistAlbum.map(album => {
                        return(
                            <div key={album.id} className='albumArtist' onClick={e=> handleClickAlbum(album.id)} >
                                <div className='albumsTitle'>
                                   {album.title} 
                                </div>
                                <div className='albumsImg'>
                                     <img src={album.image} alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default Artist
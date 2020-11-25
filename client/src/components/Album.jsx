import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetPlayer } from '../redux/actions/actions'
import { useHistory } from 'react-router'

const Album = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const album = useSelector(state => state.reducers.album)

    const [ tracks, setTracks ] = useState(album.tracks)

    const handleClickTrack = (track_id) => {
         dispatch(actionGetPlayer(track_id))
         setTimeout(() => {
            return history.push('/player')
        }, 200)
    }



    return (
        <div className='albumContainer'>
            <div>
               <div className='albumInfo'>
                <img src={album.cover} alt= ''></img>
                {album.name}
                {album.artist}
            </div>
            <div className='albumtracks'>
                {(tracks.length>0)?(tracks.map(track => {
                    return (
                        <div className='trackinfo' key={track.id} onClick = {e => handleClickTrack(track.id)}>
                            <div>
                                {track.title}
                            </div>
                            <div>
                                {track.duration}
                            </div>
                        </div>
                    
                )})):('')}
            </div> 
            </div>
            <div>
            <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=500&color=EF5466&layout=dark&size=medium&type=album&id=${album.id}`} width="700" height="500"></iframe>
            </div>
        </div>
    )

}

export default Album
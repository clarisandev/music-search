import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'
import { actionGetArtistAlbums, actionGetArtistTopFive, actionGetArtist} from "../redux/actions/actions";

const Player = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const track = useSelector(state => state.reducers.track)

    const selector = document.querySelector("div.gridContainerInfo")

    selector.classList.add('magictime', 'puffIn')

    const handleClick = () => {
        dispatch(actionGetArtistTopFive(track.artistId))
        dispatch(actionGetArtist(track.artistId))
        dispatch(actionGetArtistAlbums(track.artistId))
        setTimeout(() => {
            return history.push('/artist')
        }, 300)
    }

    return (
        <div container className='playerContainer'>
            <div className='gridPlayerTrack' item xs={6}>
                <iframe className='player' scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=400&height=400&color=EF5466&layout=dark&size=medium&type=tracks&id=${track.id}app_id=dark`} width="400" height="400"></iframe>
            </div>
            <div className='gridPlayerInfo' item xs={6}>
                <div className='gridPlayerContainer'>
                    <div className='divPlayerTitle'>
                        {track.title_short}
                    </div>
                    <div className='divAlbumArtistCont'>
                        <div className='divPlayerAlbum'>
                            {track.album}
                        </div>
                        <div className='divPlayerArtist'>
                            {track.artist}
                        </div>
                    </div>
                </div>
                <div className='buttonSeeMoreContainer'>
                    <button className='buttonSeeMore' onClick={handleClick}>SEE MORE</button>
                </div>
            </div>
        </div>
    )
};

export default Player;
import { Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'
import { actionGetArtistAlbums, actionGetArtistTopFive } from "../redux/actions/actions";

const Player = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const track = useSelector(state => state.reducers.track)

    const onclicle = () => {
        dispatch(actionGetArtistTopFive(track.artistId))
        dispatch(actionGetArtistAlbums(track.artistId))
        setTimeout(() => {
            return history.push('/artist')
        }, 200)
    }

    return (
        <Grid container className='playerContainer'>
            <Grid className='gridPlayer' item xs={6}>
                <iframe className='player' scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=600&height=600&color=EF5466&layout=dark&size=big&type=tracks&id=${track.id}app_id=dark`} width="400" height="400"></iframe>
            </Grid>
            <Grid className='gridPlayer' item xs={6}>
                <div className='gridPlayerContainer'>
                <div className='divPlayerTitle'>
                    {track.title_short}
                </div>
                <div className='divPlayerAlbum'>
                    {track.album}
                </div>
                <div className='divPlayerArtist'>
                    {track.artist}
                </div>
                <div>
                    <button onClick = {onclicle}>casc</button>
                </div>
                </div>
            </Grid>
            
        </Grid>
    )
};

export default Player;
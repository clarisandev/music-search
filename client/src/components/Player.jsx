import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
    const track = useSelector(state => state.reducers.track)

    return (
        <Grid container spacing={3} className='playerContainer'>
            <Grid className='gridPlayer' item xs={6}>
                <div className='animate__backInDown'>
                    {track.title_short}
                </div>
                <div className='divPlayerAlbum'>
                    {track.album}
                </div>
                <div className='divPlayerArtist'>
                    {track.artist}
                </div>
            </Grid>
            <Grid className='gridPlayer' item xs={6}>
                <iframe className='player' scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=600&height=600&color=EF5466&layout=dark&size=big&type=tracks&id=${track.id}app_id=dark`} width="400" height="400"></iframe>
            </Grid>
        </Grid>
    )
};

export default Player;
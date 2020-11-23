import React from 'react'
import { useHistory } from 'react-router'
import Musicallite from '../styles/img/Musicallite.png'
import '../styles/styles.scss'

const NavBar = () => {
    const history = useHistory()
    const handleClickSearch = () => {
        history.push('/search')
    }
    const handleClickPlaylist = () => {
        history.push('/playlist')
    }
    const handleClickRadio = () => {
        history.push('/radio')
    }

    return (
        <div className='navBarContainer'>
            <div className='navBarLogoCont'>
                
            </div>
            <div className='navBarButtonCont'>
                <button className='navBarButton' onClick={handleClickSearch}>SEARCH</button>
                <button className='navBarButton' onClick={handleClickPlaylist}>PLAYLIST</button>
                <button className='navBarButton' onClick={handleClickRadio}>RADIO</button>
            </div>
        </div>
    )
}

export default NavBar
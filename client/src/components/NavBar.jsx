import React from 'react'
import { useHistory } from 'react-router'
import Logo1 from './img/Logo1.png'
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
    const handleClickLogo = () => {
        history.push('/')
    }
    return (
        <div className='navBarContainer'>
            <div className='navBarLogoCont'>
                <img className='navBarLogoImg' src={Logo1} alt = '' onClick={handleClickLogo} ></img> 
            </div>
            <div className='navBarButtonCont'>
                <button className='navBarButton' onClick={handleClickSearch}>START</button>
            </div>
        </div>
    )
}

export default NavBar
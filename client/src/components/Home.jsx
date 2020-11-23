import React, { useEffect, useState } from 'react'
import '../styles/styles.scss'
import homeImg2 from './homeImg2.jpg'
import gsap , {Power2} from 'gsap'

const Home = () => {

    const home = document.querySelector(".home")
    const slider = document.querySelector('.slider')

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(home, 1, { height: '80%' }, { height: '0%', ease: Power2.easeInOut })
        .to(home, 1.3, { width: '80%' }, { width: '100%', ease: Power2.easeInOut })
        .to(slider, 1.2, { x: '0%' }, { x: '-100%', ease: Power2.easeInOut }, '-=1.3')
    }, [])

    return (
        <div className='section' >
            <div className='home' >
                <img src={homeImg2} alt='' />
                <div className='HomeSearch'>
                    SEARCH YOUR FAV MUSIC
                </div>
                {/* <div className='HomeYour'>
                    YOUR
                </div>
                <div className='HomeFavMusic'>
                    FAV MUSIC
                </div> */}
            </div>
            <div className='slider'></div>
        </div>
    )
}

export default Home
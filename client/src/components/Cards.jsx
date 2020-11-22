import React from 'react'
import { useSelector } from 'react-redux'

const Cards = () => {

    const search = useSelector(state => state.reducers.search)

    return (
        <div>
            {search.map((album, index) => {
                return (
                    <div key={index} >
                       <h1>{album.title}</h1>
                       <h2>{album.artist}</h2>
                       <h2>{album.album}</h2>
                       <img src= {album.image} alt =''></img> 
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
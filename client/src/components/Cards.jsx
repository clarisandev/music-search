import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Grid } from '@material-ui/core'

const Cards = () => {
    
    const search = useSelector(state => state.reducers.search)

    return (
        <div container className='CardsContainer'>
            {search.map((album, index) => {
                return (
                    <div className='CardsInfo'>
                        <Card key={index} album={album} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
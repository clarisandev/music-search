import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Grid } from '@material-ui/core'

const Cards = () => {
    
    const search = useSelector(state => state.reducers.search)

    return (
        <Grid container className='CardsContainer'>
            {search.map((album, index) => {
                return (
                    <Grid item xs={6}>
                        <Card key={index} album={album} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Cards
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'


const Cards = () => {

    const search = useSelector(state => state.reducers.search)

    return (
        <div>
            {search.map((album, index) => {
                return (
                    <div>
                        <Card key={index} album={album} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionSearch } from '../redux/actions/actions'
import Cards from './Cards'
import { Grid, IconButton, TextField } from '@material-ui/core'

const Search = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        dispatch(actionSearch(search))
        setSearch('')
    }

    return (
        <div className='searchContainer'>
            <Grid container className='searchGrid'>
                <Grid item className='searchGridItem' xs={12}>
                    <TextField  className='searchInput' value={search} label="Search your music" onChange={handleChange} />
                    <button className='searchButton' onClick={handleClick}> <i class="fa fa-search"></i></button>
                </Grid>
                <Cards />
            </Grid>
        </div>
    );
}

export default Search;

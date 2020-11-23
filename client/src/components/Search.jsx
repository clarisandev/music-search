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
            <Grid container className='searchGrid' spacing={3}>
                <Grid item className='searchGridItem' xs={12}>
                    <TextField id="custom-css-standard-input" className='searchInput' value={search} label="Search your music" onChange={handleChange} />
                    <button className='searchButton' onClick={handleClick}>Search</button>
                    <IconButton aria-label="search" disabled color="primary">
                    <i class="fas fa-search"></i>
                    </IconButton>
                    <button class="search-btn" type="submit">
<span>Search</span>
</button>
                </Grid>
                <Cards />
            </Grid>
        </div>
    );
}

export default Search;

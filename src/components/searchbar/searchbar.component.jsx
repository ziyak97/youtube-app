import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(searchTerm)
        setSearchTerm('')
    }

    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Search..."
                    fullWidth
                    onChange={e => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
        </form>
        </Paper>
    )
}

export default SearchBar
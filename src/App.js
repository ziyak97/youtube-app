import React, { useState } from 'react'

import youtube from './api/youtube'
import { Grid } from '@material-ui/core'

import SearchBar from './components/searchbar/searchbar.component'
import VideoPlayer from './components/video-player/video-player.component'
import VideoList from './components/video-list/video-list.component'

import './App.css'

const App = () => {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async (searchTerm) => {
    console.log(process.env.REACT_APP_API_KEY)
    const response = await youtube.get('search', {
      params: {
        q: searchTerm,
        key: process.env.REACT_APP_API_KEY,
        maxResults: 5,
        part: 'snippet'
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
    
  }

  return (
    <Grid justify='center' container spacing={10}>
      <Grid item xs={12}>
        <SearchBar
          onFormSubmit={handleSubmit}
        />
      </Grid>

      <Grid item xs={8}>
        <VideoPlayer />
      </Grid>

      <Grid item xs={4}>
        <VideoList />
      </Grid>

    </Grid>
  )
}

export default App

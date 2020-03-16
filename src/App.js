import React, { useState, useEffect } from 'react'

import youtube from './api/youtube'
import { Grid } from '@material-ui/core'

import SearchBar from './components/searchbar/searchbar.component'
import VideoPlayer from './components/video-player/video-player.component'
import VideoList from './components/video-list/video-list.component'

const App = () => {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    handleSubmit('Javascript')
  })

  const handleSubmit = async (searchTerm) => {
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

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Grid justify='center' container spacing={10}>
      <Grid item xs={12}>
        <SearchBar
          onFormSubmit={handleSubmit}
        />
      </Grid>

      <Grid item xs={8}>
        <VideoPlayer
          selectedVideo={selectedVideo}
        />
      </Grid>

      <Grid item xs={4}>
        <VideoList
          selectVideo={selectVideo}
          videos={videos}
        />
      </Grid>

    </Grid>
  )
}

export default App

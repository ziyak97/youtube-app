import React from 'react'

import VideoItem from '../video-item/video-item.component'

import { Grid } from '@material-ui/core'

const VideoList = ({ videos, selectVideo }) => {
    console.log(videos)
    const videoItem = videos.map((video, id) => (
        <VideoItem key={id} video={video} selectVideo={selectVideo} />
    ))

    return (
        <Grid container spacing={10}>
            {videoItem}
        </Grid>
    )
}

export default VideoList
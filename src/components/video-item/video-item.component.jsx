import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({video, selectVideo}) => (
    <Grid item xs={12}>
        <Paper style={{ display: 'flex', alignItems: 'center', overflow: 'auto', cursor: 'pointer'}} onClick={() => selectVideo(video)}>
            <img style={{ marginRight: '20px', width: '55%'}} src={video.snippet.thumbnails.medium.url} alt='thumbnail' />
            <Typography variant='subtitle1'>{video.snippet.title}</Typography>
        </Paper>

    </Grid>
)

export default VideoItem
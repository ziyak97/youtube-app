import axios from 'axios'

export default axios.create({
    method: 'GET',
    baseURL: 'https://www.googleapis.com/youtube/v3'
})
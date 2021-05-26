const express = require('express');
const router = express.Router();
const APIKEY = process.env.APIKEY;


//for http requests
const axios = require('axios');
const PhotosAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers'


router.post('/', (req, res)=>{
    console.log('hi');
    const {rover, date} = req.body
    const dateString = new Date(date)
    const month = dateString.getMonth() + 1
    const day = dateString.getDate()
    const year = dateString.getFullYear()
    axios.get(`${PhotosAPI}/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${APIKEY}`).then(posts=>{
      res.json(photos.data);
    }).catch((error) => {console.log(error)})
});

module.exports = router;
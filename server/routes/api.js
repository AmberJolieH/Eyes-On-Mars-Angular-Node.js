const express = require('express');
const router = express.Router();



//for http requests
const axios = require('axios');
const PostAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers'


// GET POST
router.post('/', (req, res)=>{
    console.log('hi');
    const {rover, date} = req.body
    const dateString = new Date(date)
    const month = dateString.getMonth() + 1
    const day = dateString.getDate()
    const year = dateString.getFullYear()
    axios.get(`${PostAPI}/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${APIKEY}`).then(posts=>{
        console.log(posts.data);

        res.json(posts.data);
    }).catch((error) => {console.log(error)})

    // console.log('test running');
});

module.exports = router;
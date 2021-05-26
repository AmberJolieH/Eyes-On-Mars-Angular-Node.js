const express = require('express');
const router = express.Router();

//for http requests
const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com'


// GET POST
router.get('/', (req, res)=>{
    console.log('hi');
    axios.get(`${PostAPI}/posts`).then(posts=>{
        console.log(posts.data);

        res.json(posts.data);
    }).catch((error) => {console.log(error)})

    // console.log('test running');
});

module.exports = router;
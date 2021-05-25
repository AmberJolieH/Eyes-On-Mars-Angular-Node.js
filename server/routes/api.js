const express = require('express');
const router = express.Router();

//for http requests
const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com'


// GET POST
router.get('/', (req, res)=>{
    axios.get(`${PostAPI}/posts`).then(posts=>{
        console.log(posts.data);
    })
});

module.exports = router;
const express = require('express');
const router = express.Router();

// GET POST

router.get('/', (req, res)=>{
    res.send('post works');
});

module.exports = router;
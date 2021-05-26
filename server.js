const express = require('express');
const path = require('path');
const app = express();

// get post routes for Nasa API
const api = require('./server/routes/api');  


//use middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist'))); 
app.use('/api', api);

//catch all other routes --> returns to index in dist
app.get('*', (req,res)=>{
res.sendFile(path.join(__dirname, 'dist/eyes-on-mars/index.html')) 
})

// dynamic to either use static port or production port 
const port = process.env.PORT || 4600

app.listen(port, (req, res)=>{ 
    console.log(`RUNNING on port ${port}`);
})
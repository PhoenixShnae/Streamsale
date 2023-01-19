const express = require('express'); //pathing
const fs = require('fs'); //file operations
const cors = require('cors'); //cross origin requests
const path = require('path'); //directory and file pathing operations
const app = express(); //creates express app
app.use(cors())

//videos route
const Videos = require('./routes/Videos')
app.use('/videos', Videos)

//function to set listening port
app.listen(5000, () => {
    console.log('Listening on port 5000!')
});
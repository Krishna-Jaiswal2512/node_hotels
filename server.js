const express = require('express');
const app = express();
const Worker = require('./models/Worker')
const menuItem = require('./models/menuItem')
const db = require('./db')
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());
// Importing router files
const workerRoute = require('./routes/workerRoute')
const menuItemRoutes = require('./routes/menuItemroutes')


// Use the routers for person
app.use('/worker',workerRoute);


// Use the routers fro menuItems 
app.use('/menu',menuItemRoutes);


const PORT = process.env.PORT || 3000;

// Listening on port 300 
app.listen(PORT, ()=>{
    console.log('Server is running on port 3000 !!');
})
const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels"; // Remove the space here

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing thee mongodb connection
const db = mongoose.connection;

// Define event listeners for connection status
const hotels = async ()=>{
    try {
    await mongoose.connect(mongoURL, {});
    console.log('Database connected successfully');
} catch(error) {
    console.log("error while connecting to database",error);
}};

hotels();
module.exports = db;



// Isme kaisa ho rha hai mongodb command shell hota hai barabar 
// tho uske shell ko jab hum use kr rhe hai tho Connected to Mongodb server !! aa tho rha hai 
// but jab exit kar rhe hai tho bhi waha Connected to Mongodb server aarha hai .
// db.on('connected',() =>{
//     console.log('Connected to Mongodb server !!');
// });

// db.on('error',(error) =>{
//     console.log('Mongodb connection error:', error);
// });

// db.on('disconnected',()=>{
//     console.log('MongoDB disconnected!!');
// })



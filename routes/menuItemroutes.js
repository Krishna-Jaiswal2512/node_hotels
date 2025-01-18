const express = require('express');
const MenuItem = require('../models/menuItem');
const router = express.Router();
// POST route to add a person
router.post('/', async(req, res) => {
    try{
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('Data Saved!');
    res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error !!'});
}})


// GET method to get the person 
router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('Data Fetched !');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error !'});
    }
})

// Paramertized GET method 
router.get('/:tastetype', async(req,res)=>{
    try{
        // Extract the work type from the URL parameter
        const tastetype = req.params.tastetype
        if(tastetype == 'sour' || tastetype == 'sweet' || tastetype == 'spicy')
        {
            const response = await MenuItem.find({taste:tastetype});
            console.log('response fetched !');
            res.status(200).json(response);
        }
        else
        {
            res.status(404).json({error: 'Invalid work Type !'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server error !'});
    }
})

module.exports = router;
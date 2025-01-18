const express = require('express');
const Worker = require('../models/Worker');
const router = express.Router();
// POST route to add a person
router.post('/', async(req, res) => {
    try{
    const data = req.body;
    const newWorker = new Worker(data);
    const response = await newWorker.save();
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
        const data = await Worker.find();
        console.log('Data Fetched !');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error !'});
    }
})

// Paramertized GET method 
router.get('/:worktype', async(req,res)=>{
    try{
        // Extract the work type from the URL parameter
        const workType = req.params.worktype
        if(workType == 'chef' || workType == 'Manager' || workType == 'waiter')
        {
            const response = await Worker.find({work:workType});
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


// Updating the record , we are going to use PUT method for updating the records.
// Hum id k jagah kuch bhi use kar sakte hai 
// This id represents the id of the object into the mongodb which we have to update.
// Client isme update krne k liye ID bhi send karengey jo object mongodb m update karna hai 
router.put('/:id', async(req, res) => {
    try{
        // Extract the id from the URL parameter. 
        const workerid = req.params.id;

        // This will extract data from the 
        // Client jo data bhej ta hai wo req.body m save hota hai. 
        // Aur y wahi data bhejega jika id upar diya hua id hoga 
        const updatedPersondata = req.body;

        const response = await Worker.findByIdAndUpdate(workerid, updatedPersondata,{
            // Return the updated document
            new : true,

            // Run mongoose validation
            runValidator: true
        })


        // Agar wo naam ka ID hi nhi hoga tho Person not found ayega 
        if(!updatedPersondata){
            return res.status(404).json({error:'Person not found !!'});
        }

        console.log('data Updated !!');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal Server error !!'});

    }
})


// Delete method 
router.delete('/:id', async(req,res) =>{
    try{
        // Extract the person ID from the URL parameter
        const workerid = req.params.id;

        // Assuming you have a Person model 
        const response = await Worker.findByIdAndDelete(workerid);
        if(!response){
            return res.status(404).json({error: 'Person not Found !!'});
        }
        console.log('data delete !!');
        res.status(200).json({message: 'Worker Deleted Successfully !! '});

    }catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }
})
module.exports = router;
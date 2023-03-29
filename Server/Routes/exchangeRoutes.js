const express = require("express");
const Crypto = require("../Models/crypto")

const router = express.Router();

router.get("/getdata", async (req,res)=>{
        try {
         const crypto =  await Crypto.find();
         res.status(200).json(crypto);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
       
            
      
});
router.post("/savedata", async (req,res)=>{
    try {  
        console.log(req.body);
        const {exchange_id,name,volume_1hrs_usd,volume_1day_usd,volume_1mth_usd,url} = req.body
        console.log(req.body.exchange_id);
        Crypto.insertMany({exchange_id,name,volume_1hrs_usd,volume_1day_usd,volume_1mth_usd,url})
        res.status(200).json(crypto);
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
   
        
  
});

module.exports = router
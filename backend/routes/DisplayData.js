const express=require('express');
const router=express.Router();
router.post('/foodData',(req,res)=>{
    try{
        console.log("Data fetched from MongoDB:",global.food_varities);
        res.send([global.food_varities]);
    }catch(err){
        console.error(err.message);
        res.send("server error");
    }
});
module.exports=router;
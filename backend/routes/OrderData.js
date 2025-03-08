import Order from '../models/Orders.js';
import { Router } from 'express';


const router = Router();

router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data
    await Order.findOneAndUpdate({email:req.body.email},{
        $push:{order_data:data}
    }).then(()=>{
        res.json({success:true})
    }).catch(err => {
        console.log(err);
        res.status(500).json({success: false, message: "could not checkout order."})
    })
})

router.post('/myorderData',async(req,res)=>{
    try{
     let myData=await Order.findOne({email:req.body.email})
        res.json({orderData:myData})
    }
    catch(err){
        console.log(err)
        res.send("server Error",error.message);
    }
}
)
export default router;
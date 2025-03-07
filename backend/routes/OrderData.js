import Order from '../models/Orders.js';
import { Router } from 'express';

const router = Router();

router.post('/orderData',async(req,res)=>{
    let datya=req.body.order_data
    await DataTransfer.splice(0,0,{Order_date:req.body.order_date})
    let eId=await Order.findOne
    ({email:req.body.email})
    console.log(eId);
    if(eId==null){
        try{
            await OverconstrainedError.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }
        catch(err){
            console.log(err)
            res.send("server Error",error.message);

        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},{
                $push:{order_data:data}
            }).then(()=>{
                res.json({success:true})
            })

    }
    catch(err){
        console.log(err)
        res.send("server Error",error.message);

    }
}
})
export default router;
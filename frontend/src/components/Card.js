import React,{useState,useRef,useEffect} from 'react'
import {useCart} from './ContextReducer'
import {useDispatchCart} from './ContextReducer'
export default function Card(props) {
let dispatch=useDispatchCart();
let options=props.options;
const priceRef=useRef();
let data=useCart()
let priceoptions= Object.keys(options);
const[qty,setQty]=useState(1);
const[size,setSize]=useState("");
 const handleaddtocart=async ()=>{
  let food=[]
  for(const item of data){
    if(item.id===props.foodItem._id){
      food.push(item);
      break;
    }
    
  }
  if(food.length>0){
    if(food.size===size){
        await dispatch({type:"UPDATE",id:props.foodItem._id,qty:qty,price:finalPrice}); 
        return;
    }
    else if(food.size!==size){
        await dispatch({type:"ADD",id:props.foodItem._id,qty:qty,price:finalPrice,size:size,name:props.foodItem.name});
        return;
    }


   return;

}
await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size});
 }
let finalPrice=qty* parseInt(options[size]);
useEffect(() => {
    setSize(priceRef.current.value);
},[])

    return (
        <div>
            <div>

                <div className="card mt-3 " style={{ "width": "18rem", "maxheight": "360px","backgroundColor":"black", "color":"white","hover":"shadow-lg" }} >
                   
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"190px",objectFit:"fill"}} />
                   
                    <div className="card-body">
                    <h5 className='card-title'>{props.foodItem.foodName}</h5>
                        <p className="card-text">{props.foodItem.description}</p>
                        <div className="container w-100">
                            <select className='m-2 h-100  bg-success rounded'  onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (<option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                               {priceoptions.map((data)=>{
                                      return(
                                        <option key={data} value={data}>{data}</option>
                                      )

                               })}
                            </select>
                            <div className='d-inline h-100 fs-5'>${finalPrice}/-</div>
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success' onClick={handleaddtocart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

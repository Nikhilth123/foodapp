import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
    const [credentials,setcredentials]=React.useState({name:'',email:'',password:'',geolocation:''});

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("https://foodapp-wj07.onrender.com/api/CreateUser",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            location:credentials.geolocation
          })
        });
        const json=await response.json();
        console.log(json);
        if(!json.success){
               alert('Enter valid Credentials') 
        }
      }

      const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})

      }

  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'onChange={onChange} value={credentials.password} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="password" className="form-control" name='geolocation'onChange={onChange} value={credentials.geolocation} />
  </div>
 
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )
}

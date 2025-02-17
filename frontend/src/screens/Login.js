import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Login() {
   const [credentials,setcredentials]=React.useState({email:'',password:''});
   let navigate=useNavigate();
  
      const handleSubmit=async (e)=>{
          e.preventDefault();
          const response=await fetch("https://foodapp-wj07.onrender.com/api/LoginUser",{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email:credentials.email,
              password:credentials.password,
        
            })
          });
          const json=await response.json();
          console.log(json);
          if(!json.success){
                 alert('Enter valid Credentials') 
          }
          if(json.success){
            localStorage.setItem('authtoken',json.authToken);
            console.log(localStorage.getItem('authtoken'));
           navigate('/');
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
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'onChange={onChange} value={credentials.password} id="exampleInputPassword1"/>
  </div>
  
 
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/creatuser' className='m-3 btn btn-danger'>signup</Link>
</form>
</div>
    </>
  )
}

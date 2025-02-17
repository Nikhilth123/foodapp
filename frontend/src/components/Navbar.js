import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/creatuser">signup</Link>
                            </li>
                          
                        </ul>
                        <div style={{"display":"flex" ,"justifyContent":"center", "alignItems":"center"}}>
                            <input type='search' placeholder='search food item' className='form-control  m-2' style={{"width":"200px"}}/>
                            
                            
                            <button type='submit' style={{"width":"65px" ,"height":"40px", "borderRadius":"10px"}}>search</button>
                          </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


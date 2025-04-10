import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import { useCart } from "./ContextReducer";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
    const [cartView, setCartView] = useState(false);
    let data = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authtoken");
        toast.success("Logged out successfully!", { position: "top-right", autoClose: 2000 });
        navigate("/login");
    };

    return (
        <div>
            {/* Toast Container for showing notifications */}
            <ToastContainer />
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/">Home</Link>
                            </li>
                            {localStorage.getItem("authtoken") && (
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" to="/myOrder">My Orders</Link>
                                </li>
                            )}
                        </ul>

                        {!localStorage.getItem("authtoken") ? (
                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/creatuser">Signup</Link>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <div className="btn bg-white text-success mx-2" onClick={() => setCartView(true)}>
                                    My Cart{" "}
                                    <Badge bg="secondary" text="dark">{data.length}</Badge>
                                </div>
                                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                                <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
                            </div>
                        )}

                        <div className="d-flex align-items-center">
                            <input type="search" placeholder="Search food item" className="form-control m-2" style={{ width: "200px" }} />
                            <button type="submit" style={{ width: "65px", height: "40px", borderRadius: "10px" }}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

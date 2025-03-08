import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]); // ✅ Initialize with empty array

  const fetchMyOrder = async () => {
    try {
      console.log(localStorage.getItem("userEmail"));
      const res = await fetch("https://foodapp-wj07.onrender.com/api/auth/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch order data");
      }

      const response = await res.json();

      // ✅ Ensure orderData is always an array
      if (response.order_data && response.order_data.length > 0) {
        setOrderData(response.order_data);
      } else {
        setOrderData([]); // Set empty array if no orders
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrderData([]); // Handle errors by setting empty orderData
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {/* ✅ If no orders, show message */}
          {orderData.length === 0 ? (
            <div style={{ color: "black", fontSize: "18px", textAlign: "center", marginTop: "20px" }}>
              You haven't ordered anything. Order something to show.
            </div>
          ) : (
            orderData
              .slice(0)
              .reverse()
              .map((orderGroup, index) => (
                <div key={index} className="w-100">
                  {/* Order Date */}
                  <h5 className="mt-5">{orderGroup[1]}</h5>
                  <hr />

                  <div className="row">
                    {orderGroup[0].map((item, itemIndex) => (
                      <div key={itemIndex} className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                          <img
                            src={item.img}
                            className="card-img-top"
                            alt={item.name}
                            style={{ height: "120px", objectFit: "fill" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="container w-100 p-0" style={{ height: "38px" }}>
                              <span className="m-1">{item.qty}</span>
                              <span className="m-1">{item.size}</span>
                              <div className="d-inline ms-2 h-100 w-20 fs-5">
                                ₹{item.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

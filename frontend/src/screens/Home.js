import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Crausol from '../components/Crausol';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch('https://foodapp-wj07.onrender.com/api/food/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    setFoodCat(response[1]);
    setFoodItems(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Crausol />
      </div>
      <div className='container'>
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div key={data._id}>
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              
              {/* Bootstrap Row for Food Items */}
              <div className='row'>
                {foodItems.length > 0 ? (
                  foodItems
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className='col-md-4 col-lg-3 mb-3'>
                        <Card foodItem={filteredItem}
                        options={filteredItem.options[0]}
                        
                        />
                      </div>
                    ))
                ) : (
                  <div className='col-12'>No such Data</div>
                )}
              </div>

            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

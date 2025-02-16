import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crausol = () => {
    const [images, setImages] = useState([]);
    const accessKey = "RIk9L3F2i5GOnmNyO365TRwiNWMYBdziHdrIGmvgqjA"; // 🔑 Replace with your API key

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=food&client_id=${accessKey}&per_page=5`
                );
                setImages(response.data.results);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
         
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id} style={{objectFit:"contain !important"}}>
                        <img
                            src={image.urls.regular}
                            alt={image.alt_description}
                            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
                        />
                    </div>
                ))}
            </Slider>
           
        </div>
    );
};

export default Crausol;

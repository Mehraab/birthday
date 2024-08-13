import React from 'react';
import Slider from "react-slick";

const images = [
    "/images/IMG_20190816_125024.jpg",
    "/images/IMG-20170818-WA0002.jpg",
  "/images/IMG-20191128-WA0015.jpg",
  "/images/IMG-20200107-WA0006.jpg",
  "/images/IMG-20200321-WA0001.jpg",
  "/images/engagement.jpg",
     "/images/eg1.jpg"
];

const App = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div style={{ textAlign: "center", padding: "50px", backgroundColor: "#ffe6e6" }}>
            <h1 style={{ color: "#ff66b3" }}>Happy Birthday, My Love!</h1>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slide-${index}`} style={{ width: "30%",height: "30%", borderRadius: "10px" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default App;

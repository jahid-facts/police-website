import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo from '../../assets/Logo.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

const SliderTop = () => {
    

    const innovativePowerSlider = {
        // className: "center mx-4",
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 5,
        // swipeToSlide: true,
        // adaptiveHeight: true,
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
        className: "center",
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const [innovativePower, setInnovativePower] = useState([
        { id: 1, image: Logo },
        { id: 2, image: Logo },
        { id: 3, image: Logo },
        { id: 4, image: Logo },
    ]);
    
    return (
        <>
            <div className="slider__carousel">
                <Slider {...innovativePowerSlider}>
                    {
                        innovativePower.length !== 0 && innovativePower.map((item, id) => {
                            return (
                                <div key={id} className="slider__box__card">
                                    <div className="software__img">
                                        <img src={item.image} className="img-fluid " alt="software_img" loading='lazy' />
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
            </div>
        </>
    );
};

export default SliderTop;
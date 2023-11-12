
import React, { useState, useEffect } from 'react';
import "./HeaderTop.css";
// import moment from 'moment';
// import "../../../node_modules/moment/locale/bn";
// import 'moment/locale/bn'; // Import Bengali (Bangla) locale
import BanglaTime from './BanglaTime ';
import SliderTop from './SliderTop';
import axios from 'axios';


const HeaderTop = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const [data,setData] = useState({
        name : "",
        designation : "",
    })
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);
    useEffect(() => {
       axios.get(`dig`)
       .then(res => {
           console.log(res, "ff")
           setData(res.data)
       }) 
    },[])

    // moment.locale('bn'); // Set locale to Bengali (Bangla)
    // const currentTime = moment().format('dddd, MMM DD, YYYY'); // Format time in "LT" format

    const currentDate = new Date().toLocaleDateString('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    return (
        <div className="ht__bg__color">
            <div className={`active1 ${show && 'hidden'}`}>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-3">
                            <a href={data?.designation} className='text-decoration-none'><p className="ht__top__txt mb-2">{data?.name}</p></a>
                            
                        </div>
                        <div className="col-md-5">
                            {/* <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                                <input className="ht__input__search me-2" type="search" placeholder="অনুসন্ধান" aria-label="অনুসন্ধান" />
                                <button className="ht__btn__search" type="submit">খুঁজুন</button>
                            </form> */}
                        </div>
                        <div className="col-md-4">
                            {/* <p className="ht__top__txt text-end mb-2" > {currentTime} </p> */}
                            <p className="ht__top__txt text-end mb-2" > {currentDate} </p>
                            {/* <BanglaTime /> */}
                        </div>

                    </div>

                    <div className="row pt-2">
                        <div className="col-12">
                            <SliderTop />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeaderTop;


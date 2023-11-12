import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import axios from 'axios';
import imgUrl from '../../imgUrl';


const PhotoGallery = () => {

    const [galleryImages, setGalleryImages] = useState([]);


    const fetchData = async () => {
        try {
            const res = await axios.get("/image-gallery");
            setGalleryImages(res.data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);



    const [modalGalleryIsOpen, setModalGalleryIsOpen] = useState(false);
    function openModalGallery() {
        // alert("mmm");
        setModalGalleryIsOpen(true);
    }
    function closeModalGallery() {
        setModalGalleryIsOpen(false);

    }
    const responsiveSettings = [
        {
            breakpoint: 800,
            autoplay: "true",
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    const [arr, setArr] = useState([]);

    return (
        <div className="container pt-2 mb-5">
            <div className="row g-3">
                <div className="col-md-9">
                    <h6 className="rc__hd__txt">ফটো গ্যালারি</h6>
                    <div className="row g-3 gx-md-4 pt-2">
                        {
                            galleryImages !== undefined && galleryImages.map((item, id) => {
                                return (
                                    <div key={id} className="col-md-4">
                                        <div className="img__area">
                                            {/* <img src={`${imageURL}/${item.card_image}`} alt="image" className="img__size" loading='lazy'/> */}
                                            <img src={`${imgUrl}/${item.mainImage}`} alt="image" className="img__size" loading='lazy' />
                                            <div className="img__overlay" type="button" onClick={() => { openModalGallery(); setArr(item) }}>
                                                আরও ছবি দেখুন <br /><i className="ps-2 fa-solid fa-rocket"></i>
                                            </div>
                                            <p className="img__title">{item.title}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                        <Modal
                            isOpen={modalGalleryIsOpen}
                            onRequestClose={closeModalGallery}
                            className="mymodal"
                            overlayClassName="myoverlay"
                            contentLabel="Example Modal"
                        >
                            {/* <div className='card-body modal__body'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeModalGallery}><i className="fa-solid fa-xmark close_btn"></i></span>
                                            <h6 className="modal__title">{arr.title}</h6>
                                        </div>
                                    </div>
                                    <Slide slidesToScroll={2} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                                        {
                                            arr.multipleImg !== undefined && arr.multipleImg.map((item, id) => <div key={id} className="slide__img">
                                               
                                                <img src={item.image} alt="image" loading='lazy' />
                                            </div>
                                            )
                                        }
                                    </Slide>
                                </div>
                                
                            </div> */}
                            <div className='card-body modal__body'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeModalGallery}><i className="fa-solid fa-xmark close_btn"></i></span>
                                            <h6 className="modal__title">{arr.title}</h6>
                                        </div>
                                    </div>
                                    <Slide slidesToScroll={2} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                                        {
                                            arr.multipleImages !== undefined && arr.multipleImages?.split(',').map((item, id) => <div key={id} className="slide__img">
                                                <img src={`${imgUrl}/${item}`} alt="image" loading='lazy' />
                                            </div>
                                            )
                                        }
                                    </Slide>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="row py-4">
                        <div className="col-12">
                            <div className="gallery__btn__area">
                                <Link to="/photo-gallery" className="gallery__btn">আরও ছবি</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>

    );
};

export default PhotoGallery;

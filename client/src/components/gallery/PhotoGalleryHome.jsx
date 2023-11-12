import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import imgUrl from '../../imgUrl';


const PhotoGalleryHome = () => {

    const [galleryImages, setGalleryImages] = useState([]);


    // {
        //     id: 1, title: "জন্ম ও মৃ্ত্যু নিবন্ধন।", imgs: gal1, multipleImg: [
        //         { id: 1, image: perMent, caption: "slide" },
        //         { id: 2, image: gal1, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 2, title: "বাণিজ্য মেলা/২০২২", imgs: gal2, multipleImg: [
        //         { id: 1, image: perMent, caption: "slide" },
        //         { id: 2, image: gal2, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 3, title: "বাণিজ্য মেলা/২০২২", imgs: gal3, multipleImg: [
        //         { id: 1, image: perMent, caption: "slide" },
        //         { id: 2, image: gal3, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 4, title: "দুর্গাপূজা/ ২০২২", imgs: gal4, multipleImg: [
        //         { id: 1, image: perMent, caption: "slide" },
        //         { id: 2, image: gal4, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 5, title: "দুর্গাপূজা/ ২০২২", imgs: gal4, multipleImg: [
        //         { id: 1, image: gal4, caption: "slide" },
        //         { id: 2, image: under_construction, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 6, title: "তথ্য অধিকার র‌্যালী", imgs: gal5, multipleImg: [
        //         { id: 1, image: gal5, caption: "slide" },
        //         { id: 2, image: under_construction, caption: "slide" },
        //         { id: 3, image: under_construction, caption: "slide" },
        //     ]
        // },
        // {
        //     id: 7, title: "দুর্গাপূজা/ ২০২২ ব্রিফিং", imgs: gal6, multipleImg: [
        //         { id: 1, image: gal6 },
        //         { id: 2, image: under_construction },
        //         { id: 3, image: under_construction },
        //     ]
        // },
        // {
        //     id: 8, title: "ক্যাম্প প্রশিক্ষণ পরীক্ষা", imgs: gal7, multipleImg: [
        //         { id: 1, image: gal7 },
        //         { id: 2, image: under_construction },
        //         { id: 3, image: under_construction },
        //     ]
        // },
        // {
        //     id: 9, title: "বঙ্গমাতা ফুটবল", imgs: gal7, multipleImg: [
        //         { id: 1, image: gal7 },
        //         { id: 2, image: under_construction },
        //         { id: 3, image: under_construction },
        //     ]
        // },
    useEffect(() => {
        axios.get("/image-gallery")
            .then(res => {
                setGalleryImages(res.data);
            })
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
        <>
            <div className="pt-2">
                <h6 className="rc__hd__txt">ফটো গ্যালারি</h6>
                <div className="row g-3 gx-md-4 pt-2">
                    {
                        galleryImages !== undefined && galleryImages.slice(0,6).map((item, id) => {
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
                                            {/* <img src={`${imageURL}/${image}`} alt="image" loading='lazy'/> */}
                                            <img src={`${imgUrl}/${item}`} alt="image" loading='lazy' />
                                        </div>
                                        )
                                    }
                                </Slide>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="row py-2">
                    <div className="col-12">
                        <div className="gallery__btn__area">
                            <Link to="/photo-gallery" className="gallery__btn">আরও ছবি</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PhotoGalleryHome;

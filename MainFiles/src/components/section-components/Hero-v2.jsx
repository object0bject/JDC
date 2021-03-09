import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { sectionData } from './../../data/section.json';

// install Swiper components
SwiperCore.use([Navigation]);

const HeroDemoV2 = (props) =>{
    let data = sectionData.bannerV2;
    let publicUrl = process.env.PUBLIC_URL+'/';
   
    return(
        <>
        {/* <!--=================== hero area ===================--> */}
        
        <section className="hero-area home2" style={{background:`url(${publicUrl + data.background})`}}>
            <Swiper
            className="home2-hero"
            navigation
            >
                {data.slider.map((slide, i)=>{
                    return(
                        <>
                        <SwiperSlide key={i}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 col-lg-8">
                                    {/* <!--===================== hero inner area =====================--> */}
                                    <div className="hero-inner-content">
                                        <span>{slide.subtitle}</span>
                                        <h1>{slide.title}</h1>
                                        <div className="hero-action">
                                            <Link to="/about" className="btn">More About Us</Link>
                                            <button className="spacil-btn" onClick={()=>  props.setOpen()}>
                                                <span><i className="flaticon-play-button"></i></span>
                                                How We work
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!--===================== End of hero inner area =====================--> */}
                                    </div>
                                    <div className="col-lg-4 position-static d-none d-lg-block">
                                    {/* <!--======================= slider image =======================--> */}
                                    <div className="slider-image">
                                        <img src={slide.image} alt="Slider" />
                                    </div>
                                    {/* <!--===================== End of slider image =====================--> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <ModalVideo key={i} channel={slide.channelName} autoplay isOpen={props.isOpen} videoId={slide.videoId} onClose={() =>  props.setOpen()} />
                        </>
                    )
                })}
                
            </Swiper>
        </section>
        {/* <!--===================== End of hero area =====================--> */}

        </>

    )
}

export default HeroDemoV2;
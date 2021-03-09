import { React } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

function Hero (props){
    let data = sectionData.banner;
    let publicUrl = process.env.PUBLIC_URL+'/'

    return(
        <>
        {/* <!--=================== hero area ===================--> */}

        <section className="hero-area" style={{background:`url(${publicUrl + data.background})`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {/* <!--=================== hero inner area ===================--> */}

                <div className="hero-inner-content">
                  <span
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1.5s"
                    >
                      {data.subtitle}</span>
                  <h1
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1.5s"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="1.5s"
                  >
                    {data.content1} <br />
                    {data.content2}
                  </p>
                  <div
                    className="hero-action wow fadeInUp"
                    data-wow-delay="0.8s"
                    data-wow-duration="1.5s"
                  >
                    <Link to="/about" className="btn">More About Us</Link>
                    <button className="spacil-btn" onClick={()=> props.setOpen()}>
                      <span><i className="flaticon-play-button"></i></span>
                      How We work
                    </button>
                    <ModalVideo channel={data.channelName} autoplay isOpen={props.isOpen} videoId={data.videoId} onClose={() => props.setOpen()} />
                  </div>
                </div>

                {/* <!--=================== End of hero inner area ===================--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!--===================== End of hero area =====================--> */}

        </>

    )
}

export default Hero;
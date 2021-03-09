import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { sectionData } from './../../data/section.json';

const Faq = () =>{
  let data = sectionData.faq;
  const [isOpen, setOpen] = useState(false)
    return(
        <>
            {/* <!-- faq --> */}
    <section className="faq pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* <!-- faq content --> */}
            <div
              className="faq-content wow fadeInUp"
              data-wow-delay=".2s"
              data-wow-duration="1.5s"
            >
              <h2>{data.sectionHeading.title}</h2>
              <p>
                {data.sectionHeading.content}
              </p>
              <div className="accordion-wrapper">
                <div id="accordion">
                  {data.singleFaq.map((faq, i)=>{
                    return(
                      <div
                        key={i}
                        className="panel wow fadeInUp"
                        data-wow-delay={`${i * 0.2}s`}
                        data-wow-duration="1.5s"
                      >
                        <div className="panel-header">
                          <button
                            className={`btn ${faq.status === false ? 'collapsed' : ''}`}
                            data-toggle="collapse"
                            data-target={`#faq${i + 1}`}
                            aria-expanded="true"
                          >
                            <span className="checkbox"><i className="flaticon-check"></i></span>
                            {faq.title}
                            <span className="arrow">
                                <i className="flaticon-down-arrow"></i>
                                </span>
                          </button>
                        </div>

                        <div
                          id={`faq${i + 1}`}
                          className={`collapse ${faq.status === true ? 'show' : ''}`}
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="panel-body">
                            {faq.content}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* <!-- End of faq content --> */}
          </div>
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0">
            <div
              className="faq-video wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1.5s"
            >
              <img src={data.faqVideo.background} alt="" />
               <button type="button" className="btn vbox-item" onClick={()=> setOpen(true)}>
                  <span><i className="flaticon-play-button"></i></span>
              </button>
              <ModalVideo channel={data.faqVideo.channelName} autoplay isOpen={isOpen} videoId={data.faqVideo.videoId} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End of faq --> */}
        </>
    )
}
export default Faq;
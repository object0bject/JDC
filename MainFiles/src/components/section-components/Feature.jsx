import { React } from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

function Feature(props){

    let data = sectionData.feature;

    return (
        <>
        {/* <!--=================== feature area ===================--> */}
        <section className={`feature-area pb-90 ${props.isOpen ? "video-modal-open":"video-modal-close"}`} >
          <div className="container">
            <div className="row justify-content-center">
                {
                   data.map(
                    (feature, i) =>                
                        <div className="col-lg-4 col-md-6" key={i} >
                            {/* <!--=================== single feature ===================--> */}

                            <div
                            className="single-feature wow fadeInUp"
                            data-wow-delay="0.3s"
                            data-wow-duration="1.5s"
                            >
                            <span className="feature-bg">
                                <i className={feature.icon}></i>
                            </span>
                                <i className={feature.icon}></i>
                            <h4>{feature.title}</h4>
                            <p>
                            {feature.content}
                            </p>

                            {/* <!--=================== feature action ===================--> */}
                            <div className="feature-action">
                                <Link to="#">Read More</Link>
                                <Link to="#"><i className="flaticon-reply"></i></Link>
                            </div>
                            {/* <!--=================== feature action ===================--> */}

                            </div>

                            {/* <!--=================== End of single feature ===================--> */}
                        </div>
                        
                    )
                  

                }
     
            </div>
          </div>
        </section>
        {/* <!--=================== End of feature area ===================--> */}
        </>
    )
}
export default Feature;

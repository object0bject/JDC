import { React } from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

function AboutV2(){
    let imagealt = 'Construction image'
    let data = sectionData.aboutV2;

    return (
        <>
                {/* <!--======================== about area ========================--> */}
    <section className="about about-style2 pb-120 pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-8 offset-md-2 offset-lg-0">
            {/* <!--======================== about image ========================--> */}
            <div
              className="about-image-content wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.5s"
            >
              <span className="experince">{data.experience}</span>
              <div className="image-wrap">
                <img src={data.image} alt={imagealt} />
              </div>
              <span className="line"></span>
            </div>
            {/* <!--======================== End of about image ========================--> */}
          </div>
          <div className="col-lg-6 offset-lg-1">
            {/* <!--======================== about content ========================--> */}
            <div className="about-content">
              <div className="about-header">
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.5s"
                >
                 {data.title}
                </h2>
              </div>
              <p
                className="wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="1.5s"
              >
                {data.content}
              </p>
              <blockquote
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="1.5s"
              >
                <p>
                    "{data.quoteContent}"
                </p>
                <h6>{data.quoteTitle}</h6>
              </blockquote>

              <Link
                className="btn wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="1.5s"
                to="/about"
                >More About Us
              </Link>
            </div>
            {/* <!--======================== End of about content ========================--> */}
          </div>
        </div>
      </div>
    </section>
    {/* <!--======================== End of about area ========================--> */}
        </>
    )
}
export default AboutV2;

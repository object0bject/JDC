import { React } from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

function About(){
    let imagealt = 'About construction'
    let data = sectionData.about;
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <>
        {/* <!--====================== about area ======================--> */}

        <section className="about pb-120">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6">
                {/* <!--====================== about content ======================--> */}
                <div className="about-content">
                <div className="about-header">
                    <span
                    className="wow fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1.5s"
                    >
                        {data.subtitle}
                    </span>
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
                    data-wow-delay="0.3s"
                    data-wow-duration="1.5s"
                >
                    {data.content}
                </p>

                <ul
                    className="meta-list wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1.5s"
                >
                    {
                        data.metaList.map( (cur, i) => {
                            return(
                                <li key={i}>
                            <span><i className="flaticon-check"></i></span>
                            {cur.itemContent}
                            </li>
                            ) 
                        })
                        
                    }
                    
                </ul>
                <Link
                    to="/about"
                    className="btn wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.5s"
                    >Get A Quote
                </Link>
                </div>
                {/* <!--====================== End of about content ======================--> */}
            </div>
            <div className="col-lg-5 offset-lg-1 order-lg-1 order-first">
                {/* <!--====================== about image ======================--> */}
                <div
                className="about-image-content wow fadeInRight"
                data-wow-delay="0.3s"
                data-wow-duration="1.5s"
                >
                <span className="experince">{data.experience}</span>
                <div className="image-wrap">
                    <img src={publicUrl + data.image} alt={imagealt} />
                </div>
                <span className="line"></span>
                </div>
                {/* <!--====================== End of about image ======================--> */}
            </div>
            </div>
        </div>
        </section>

        {/* <!--====================== End of about area ======================--> */}
        </>
    )
}
export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../global-components/SectionTitle';
import { sectionData } from './../../data/section.json';
const Team = () => {
    let data = sectionData.team;
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <>
            {/* <!--========================= our team =========================--> */}
            <section className="team pb-90" style={{background:`url(${publicUrl + data.background})`}}>
            <div className="container">
                <div className="row justify-content-center pt-120">
                <div className="col-md-8">
                    {/* <!--========================= section title =========================--> */}

                    <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />

                    {/* <!--========================= section title =========================--> */}
                </div>
                </div>  
                <div className="row">
                    {data.member.slice(0, 3).map( (member, i) =>{
                        return (
                            <div
                                className="col-lg-4 col-md-4 col-sd-6 wow fadeInUp"
                                data-wow-delay={`${i * 0.2}s`}
                                data-wow-duration="1.5s"
                                key={i}
                            >
                                {/* <!--========================= single team =========================--> */}
                                <div className="single-team">
                                <div className="main-part">
                                    <img src={member.image} alt="team member" />
                                    <div className="social-link">
                                    <ul>    
                                        <li>
                                            <Link to={member.facebookLink}><i className="flaticon-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={member.twitterLink}><i className="flaticon-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={member.linkdinLink}><i className="flaticon-linkedin"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={member.instagramLink}><i className="flaticon-instagram"></i></Link>
                                        </li> 
                                    </ul>
                                    </div>
                                </div>
                                <div className="hover-part">
                                    <div className="member-details">
                                    <h6>{member.name}</h6>
                                    <span>{member.designation}</span>
                                    </div>
                                </div>
                                </div>
                                {/* <!--========================= End of single team =========================--> */}
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            </section>
            {/* <!--========================= End of our team =========================--> */}
        </>
    )
}

export default Team;
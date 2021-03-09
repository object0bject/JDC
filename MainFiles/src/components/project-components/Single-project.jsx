import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from './../../data/project.json';

const SingleProject =()=>{
    let data = projectData.projectDetails;
    let asideData = projectData.projectSideBar;
    return (
        <>
             {/* <!--================== project details ==================--> */}
            <section className="project-details pb-110">
            <div className="container">
                <div className="row">
                <div
                    className="col-lg-8 order-1 order-lg-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1.5s"
                >
                    {/* <!--============ project details inner ============--> */}
                    <div className="project-details-inner">
                    <img src={`${process.env.PUBLIC_URL}/${data.image}`}alt="" />
                    <h3>{data.title}</h3>
                    <p>
                       {data.contentOne}
                    </p>

                    <p>
                        {data.contentTwo}
                    </p>
                    <h3>Project Goals</h3>
                    <div className="project-details-bottom-part">
                        <img src={data.descriptionImage} alt="" />
                        <p>
                            <span>{data.contentThree}</span>
                            <span>{data.contentFour}</span>
                            {data.contentFive}
                        </p>
                    </div>
                    </div>
                    {/* <!--================== End of project details inner ==================--> */}
                </div>
                <div
                    className="col-lg-4 col-md-8 offset-md-2 order-0 order-lg-1 offset-lg-0 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1.5s"
                >
                    <aside className="project-sidebar">
                    {/* <!--================== single widget ==================--> */}
                    <div className="single-widget more-image">
                        {asideData.imageGallery.map((image,i)=>{
                            return <img src={`${process.env.PUBLIC_URL}/${image}`} alt="gallery" key={i} />
                        })}
                    </div>
                    {/* <!--================== End of single widget ==================--> */}

                    {/* <!--================== single widget ==================--> */}
                    <div className="single-widget project-info">
                        <div className="widget-header">
                        <h4>{asideData.projectInfo.title}</h4>
                        </div>
                        <div className="widget-content">
                        <ul>
                            {asideData.projectInfo.infoList.map((item, i)=>{
                              return(
                                <li key={i}>
                                    <p>{item.title}</p>
                                    <span>{item.content}</span>
                                </li>
                              )  
                            })}
                        </ul>
                        {/* <!--================== share project ==================--> */}
                        <div className="share-project">
                            <p>{asideData.share.title}</p>
                            <ul className="social-list">
                                {asideData.share.socialList.map((social, i)=>{
                                    return (
                                        <li key={i}>
                                            <Link to={social.link}><i className={social.icon}></i></Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/* <!--================== End of Share project ==================--> */}
                        </div>
                    </div>
                    {/* <!--================== End of single widget ==================--> */}
                    </aside>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default SingleProject;
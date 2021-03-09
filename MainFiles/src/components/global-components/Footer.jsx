import React from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const Footer =()=>{
    let data = sectionData.footer;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
            {/* <!--======================== footer ========================--> */}

            <footer className="pt-120" style={{background:`url(${publicUrl + data.background})`}}>
            {/* <!--======================== wanna contact ========================--> */}
            <div className="subscription">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    {/* <!--======================== wanna contact ========================--> */}
                    <div className="wanna-contact">
                        <h2>{data.footerTop.title}</h2>
                        <Link className="btn" to="/contact"> Get Started </Link>
                    </div>
                    {/* <!--======================== End of wanna contact ========================--> */}
                    </div>
                </div>
                </div>
            </div>
            {/* <!--======================== End of contact ========================--> */}

            {/* <!--======================== footer content ========================--> */}
            <div className="footer-main-content">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    {/* <!--======================== single footer items ========================--> */}
                    <div className="single-footer-items">
                        <div className="items-header">
                        <h4>{data.mainFooter.about.title}</h4>
                        </div>
                        <div className="about-items-content">
                        <p>
                        {data.mainFooter.about.content}
                        </p>
                        <p>
                            Call us at {data.mainFooter.about.phone} or <br />
                            request An <span>Appointment Online.</span>
                        </p>
                        </div>

                        {/* <!--======================== footer social  ========================--> */}
                        <div className="footer-social">
                        <ul className="social-list">
                            <li>
                            <Link to={data.mainFooter.about.social.facebookLink}><i className="flaticon-facebook"></i></Link>
                            </li>
                            <li>
                            <Link to={data.mainFooter.about.social.twitterLink}><i className="flaticon-twitter"></i></Link>
                            </li>
                            <li>
                            <Link to={data.mainFooter.about.social.instagramLink}><i className="flaticon-instagram"></i></Link>
                            </li>
                            <li>
                            <Link to={data.mainFooter.about.social.linkdinLink}><i className="flaticon-linkedin"></i></Link>
                            </li>
                        </ul>
                        </div>
                        {/* <!--======================== End of footer social  ========================--> */}
                    </div>
                    {/* <!--======================== End of single footer items ========================--> */}
                    </div>

                    <div className="col-lg-2 col-md-6">
                    {/* <!--======================== single footer items ========================--> */}
                    <div className="single-footer-items">
                        <div className="items-header">
                        <h4>{data.mainFooter.pageLink.title}</h4>
                        </div>
                        {/* <!--======================== service items ========================--> */}
                        <div className="footer-service">
                        <ul>
                            {data.mainFooter.pageLink.pageLink.map((page, i)=>{
                               return <li key={i}><Link to={page.pageLink}>{page.pageName}</Link></li>
                            })}
                        </ul>
                        </div>
                        {/* <!--======================== End of service items ========================--> */}
                    </div>
                    {/* <!--======================== End of single footer items ========================--> */}
                    </div>

                    <div className="col-lg-3 col-md-6">
                    {/* <!--======================== single footer items ========================--> */}
                    <div className="single-footer-items">
                        <div className="items-header">
                        <h4>{data.mainFooter.latestPost.title}</h4>
                        </div>
                        {/* <!--======================== latest footer blog items ========================--> */}
                        <div className="footer-blog">
                        <ul>
                            {data.mainFooter.latestPost.singleLatest.map((latest, i) =>{
                                return (
                                    <li key={i}>
                                        <div className="media">
                                    <img
                                        src={latest.image}
                                        alt="Latest Blog"
                                        />
                                        <div className="media-body">
                                        <h6 className="mt-0">
                                            <Link to="#">{latest.title}</Link>
                                        </h6>
                                        <p>{latest.publishDate}</p>
                                        </div>
                                    </div>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                        {/* <!--======================== End of latest footer blog items ========================--> */}
                    </div>
                    {/* <!--======================== End of single footer items ========================--> */}
                    </div>

                    <div className="col-lg-3 col-md-6">
                    {/* <!--======================== single footer items ========================--> */}
                    <div className="single-footer-items">
                        <div className="items-header">
                        <h4>{data.mainFooter.workingHour.title}</h4>
                        </div>
                        {/* <!--======================== time option ========================--> */}
                        <div className="footer-time-option">
                        <ul>
                            {data.mainFooter.workingHour.wordsDay.map((day, i)=>{
                                return (
                                    <li key={i}>
                                        <p>{day.dayName}</p>
                                        <span>{day.startTime} – {day.endTime}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                        {/* <!-- End of time option --> */}
                    </div>
                    {/* <!-- End of single footer items --> */}
                    </div>
                </div>
                </div>
            </div>
            {/* <!--======================== End of footer content ========================--> */}

            {/* <!--======================== footer bottom ========================--> */}
            <div className="footer-bottom">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="footer-bottom-content">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="copy-right">
                            <p>
                                Copyright {data.footerBottom.copyRightYear} Al Right Reserved
                                <a href={data.footerBottom.copyRightLink}> {data.footerBottom.copyRightFrom}</a>
                            </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-menu-link">
                            <ul>
                                {data.footerBottom.bottomPageLink.map((page, i)=>{
                                    return <li key={i}><Link to={page.pageLink}>{page.pageName}</Link></li>
                                })}
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <!--======================== End of footer bottom ========================--> */}
            </footer>
            {/* <!--======================== End of footer ========================--> */}
        </>
        )
}
export default Footer;
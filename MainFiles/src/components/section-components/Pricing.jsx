import { React } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../global-components/SectionTitle';
import { sectionData } from './../../data/section.json';

function Pricing(){
    let data = sectionData.pricing;

    return (
        <>
            {/* <!--====================== pricing ======================--> */}
            <section className="pricing pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            {/* <!--====================== section title ======================--> */}
                            <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />
                            {/* <!--====================== section title ======================--> */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {data.singlePrice.map((feature, i)=>{
                           return(
                            <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay={`${i * 0.2}s`}
                            data-wow-duration="1.5s"
                            key={i}
                            >
                                {/* <!--====================== single pricing ======================--> */}
                                <div className={`single-pricing mb-30 ${feature.activeStatus === true ? "active": ""}`}>
                                    <h4>{feature.title}</h4>
                                    <span className="icon"><i className={feature.icon}></i></span>
                                    <h2>${feature.amount}<span>/{feature.duration} Month</span></h2>
                                    <ul className="pricing-list">
                                        {feature.features.map((cur, i) =>{
                                            return (
                                                <li key={i}>
                                                    <span><i className={cur.icon}></i></span> {cur.content}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="price-more">
                                        <Link to="/pricing" className="btn">Start Purchasc</Link>
                                    </div>
                                </div>
                            </div>
                           ) 
                        })}
                        
                    {/* <!--====================== End of single pricing ======================--> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Pricing;

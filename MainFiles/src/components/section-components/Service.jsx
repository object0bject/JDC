import { React } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../global-components/SectionTitle';
import { sectionData } from './../../data/section.json';


const Service = () =>{
    let data = sectionData.service;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
        
        {/* <!--===================== service =====================--> */}

        <section className="service pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">

                <SectionTitle title={data.serviceSectionHeading.title} titleContent={data.serviceSectionHeading.content} />
                        
              </div>
            </div>
            <div className="row no-gutters">
              {data.singleService.map((service, i)=>{
                return <div className="col-md-6 col-lg-4" key={i}>
                  {/* <!--===================== single service =====================--> */}
                  <div
                    className={`single-service text-center wow ${service.animation}`}
                    data-wow-delay="0.3s"
                    data-wow-duration="1.5s"
                    style={{background:`url(${publicUrl + service.image})`}}
                  >
                    <div>
                      <i className={service.icon}></i>
                      <h4>{service.title}</h4>
                      <p>
                        {service.content}
                      </p>
                      <div className="service-action">
                        <Link to="/service">Read More <span className="btn">+</span></Link>
                      </div>
                    </div>
                  </div>
                  {/* <!--===================== End of single service =====================--> */}
                </div>
              })}
            </div>
          </div>
        </section>
        {/* <!--===================== End of service =====================--> */}

        </>
    )
}
export default Service;

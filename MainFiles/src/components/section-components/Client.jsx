import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import { sectionData } from './../../data/section.json';

const Client = () =>{
    let data = sectionData.client;

    return(
        <>
        {/* <!--===================== testimonial =====================--> */}
        <section className="testimonial pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                {/* <!--===================== section title =====================--> */}

                <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />

                {/* <!--===================== section title =====================--> */}
              </div>
            </div>
            <div className="row">
                
                {data.clientReview.map((comment, i)=>{
                   return <div className="col-md-6" key={i}>
                    {/* <!--===================== single testimonial =====================--> */}
                   <div
                     className="single-testimonial wow fadeInUp"
                     data-wow-delay={`${i * 0.2}s`}
                     data-wow-duration="1.5s"
                   >
                     <div className="bg-icon"><i className="flaticon-double-quotes"></i></div>
                     <div className="author-details">
                       <div className="author-image">
                         <img src={comment.image} alt="" />
                         <div className="author-name">
                           <h5>{comment.name}</h5>
                           <span>{comment.designation}</span>
                         </div>
                       </div>
                       <div className="star">
                         <i className="flaticon-star-1"></i>
                         <i className="flaticon-star-1"></i>
                         <i className="flaticon-star-1"></i>
                         <i className="flaticon-star-1"></i>
                         <i className="flaticon-star-1"></i>
                       </div>
                     </div>
                     <p className="author-comment">
                       {comment.comment}
                     </p>
                   </div>
                 </div>
                })}
              
            {/* <!--===================== End of single testimonial =====================--> */}
            </div>
          </div>
        </section>
       {/* <!--===================== End of testimonial =====================--> */}
        </>
    )
}
export default Client;
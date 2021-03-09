import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import { sectionData } from './../../data/section.json';
import SinglePostItem from './../global-components/Single-post';

const Blog =()=>{
    let data = sectionData.blog;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return(
        <>
            {/* <!--==================== blog ====================--> */}
            <section className="blog pb-90 mb-120" style={{background:`url(${publicUrl + data.background})`}}>
            <div className="container">
                <div className="row justify-content-center pt-120">
                <div className="col-md-8">
                    {/* <!--==================== section title ====================--> */}

                    <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />
                    
                    {/* <!--==================== section title ====================--> */}
                </div>
                </div>
                <div className="row justify-content-center">
                    {data.singleBlog.slice(0, 3).map((blog, i)=>{
                        return (
                            <SinglePostItem image={blog.image} title={blog.title} content={blog.content} key={i}/>
                        )
                    })}
                </div>
            </div>
            </section>
            {/* <!--==================== End of blog ====================--> */}
        </>
    )
}
export default Blog;
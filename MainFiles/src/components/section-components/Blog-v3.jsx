import { React } from 'react';
import SectionTitle from '../global-components/SectionTitle';
import SinglePostItem from '../global-components/Single-post';
import { sectionData } from './../../data/section.json';

const BlogV3 =()=>{
    let data = sectionData.blog;
    return(
        <>
            {/* <!--==================== blog ====================--> */}
            <section className="blog mb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <!--==================== section title ====================--> */}

                        <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />
                        
                        {/* <!--==================== section title ====================--> */}
                    </div>
                </div>
                <div className="row justify-content-center">
                    {data.singleBlog.map((blog, i)=>{
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
export default BlogV3;
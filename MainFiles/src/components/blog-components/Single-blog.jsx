import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from "./../../data/blog.json";
import Comment from "./Comment";
import Reply from './Reply';
import Search from './Search';

export default function SingleBlog() {
    let data = blogData;
    return (
        <>
            {/* <!--==================== blog details ====================--> */}
            <section className="blog-details pb-120">
            <div className="container">
                <div className="row">
                <div
                    className="col-lg-8 order-1 order-lg-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1.5s"
                >
                    {/* <!--==================== blog details inner ====================--> */}
                    <div className="blog-details-inner">
                    <img src={data.blogDetails.image} alt="main blog" />
                    <h3>{data.blogDetails.title}</h3>
                    <div className="single-blog-meta media align-items-center">
                        <div className="author media align-items-center">
                        <img src={data.blogDetails.authorImage} alt="Author" />
                        <div className="media-body">
                            <p>By: {data.blogDetails.authorName}</p>
                        </div>
                        </div>
                        <ul className="meta-list media align-items-center">
                            {data.blogDetails.meta.map((meta, i)=>{
                                return(
                                    <li key={i}>
                                        <span><i className={meta.icon}></i> </span> {meta.content}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <p>
                        {data.blogDetails.contentOne}
                    </p>
                    <p>
                        {data.blogDetails.contentTwo}
                    </p>
                    <blockquote>
                        <p>
                            {data.blogDetails.quote.content}
                        </p>
                        <h6>{data.blogDetails.quote.author}</h6>
                    </blockquote>
                    <p>
                        {data.blogDetails.contentThree}
                    </p>
                    <h3>{data.blogDetails.subTitle}</h3>
                    <p>
                        {data.blogDetails.contentFour}
                    </p>
                    <p>
                        {data.blogDetails.contentFive}
                    </p>
                    <div className="share-blog media">
                        <span>{data.blogDetails.share.title}</span>
                        <div className="media-body">
                        <ul className="social-list">
                            {data.blogDetails.share.socileList.map((social, i)=>{
                               return(
                                <li key={i}>
                                    <Link to={social.link}><i className={social.icon}></i></Link>
                                </li>
                               ) 
                            })}
                        </ul>
                        </div>
                    </div>
                    
                    {/*-- comment --*/}
                    <Comment/>

                    {/* <!--==================== leave a reply ====================--> */}

                    <Reply />

                    {/* <!--==================== End of leave a reply ====================--> */}
                    </div>
                    {/* <!--==================== End of blog details inner ====================--> */}
                </div>
                <div
                    className="col-lg-4 col-md-8 offset-md-2 order-0 order-lg-1 offset-lg-0 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1.5s"
                >
                    <aside className="project-sidebar">
                    {/* <!--======================= single blog widget =======================--> */}
                    <Search/>
                    {/* <!--==================== End of single widget ====================--> */}

                    {/* <!--==================== single widget ====================--> */}
                    <div className="blog-widget recent-post">
                        <div className="widget-header">
                        <h4>{data.asideBlog.recentPost.title}</h4>
                        </div>
                        <div className="widget-content">
                        <ul>
                            {data.asideBlog.recentPost.singleRecent.map((recent, i)=>{
                               return(
                                <li className="media" key={i}>
                                    <img src={recent.image} alt="" />
                                    <div className="media-body">
                                        <span>{recent.pubDate}</span>
                                        <h6>
                                        <Link to={recent.postLink}>{recent.title}</Link>
                                        </h6>
                                    </div>
                                </li>
                               ) 
                            })}
                        </ul>
                        </div>
                    </div>
                    {/* <!--==================== End of single widget ====================--> */}

                    {/* <!--==================== single widget ====================--> */}
                    <div className="blog-widget category-post">
                        <div className="widget-header">
                        <h4>{data.asideBlog.category.title}</h4>
                        </div>
                        <div className="widget-content">
                        <ul>
                            {data.asideBlog.category.singleCategory.map((category, i)=>{
                                return (
                                    <li className="media" key={i}>
                                        <i className="flaticon-label"></i>
                                        <Link to={category.cateLink}>{category.cateName}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                    {/* <!--==================== End of single widget ====================--> */}

                    {/* <!--==================== single widget ====================--> */}
                    <div className="blog-widget tags-post">
                        <div className="widget-header">
                        <h4>{data.asideBlog.tags.title}</h4>
                        </div>
                        <div className="widget-content">
                            {data.asideBlog.tags.singleTag.map((tag, i)=>{
                               return <Link key={i} to={tag.tagName} className="btn">{tag.tagName}</Link>
                            })}
                        </div>
                    </div>
                    {/* <!--==================== End of single widget ====================--> */}
                    </aside>
                </div>
                </div>
            </div>
            </section>
            {/* <!--==================== End of blog details ====================--> */}
        </>
    )
}


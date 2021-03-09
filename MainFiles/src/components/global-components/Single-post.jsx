import React from 'react';
import { Link } from 'react-router-dom';

const SinglePostItem = (props) =>{
    return (
        <div className="col-lg-4 col-md-6">
            {/* <!--==================== single blog ====================--> */}
            <div
            className="single-blog-wrap wow fadeInUp"
            data-wow-delay={`${props.i * 0.2}s`}
            data-wow-duration="1.5s"
            >
            {/* <!--==================== blog image ====================--> */}
            <div className="blog-image">
                <Link to='/blog-details'>
                <img src={props.image} alt="blog one"
                /></Link>
            </div>
            {/* <!--==================== End of blog image ====================--> */}

            <div className="blog-bottom">
                <h4>{props.title}</h4>
                <p>
                    {props.content}
                </p>
                <div className="blog-action">
                <Link to="/blog-details">
                    Read More
                    <span className="btn"><i className="flaticon-add-1"></i></span>
                </Link>
                </div>
            </div>
            </div>
            {/* <!--==================== End of single blog ====================--> */}
        </div>
    )
}
export default SinglePostItem;
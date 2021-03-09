import React from 'react';
import { Link } from 'react-router-dom';

export default function Comment() {
    return (
        <>
           {/* <!--==================== comments ====================--> */}
           <div className="comments">
                <h3>3 Comments</h3>
                <ul className="reply-list">
                <li className="single-comment">
                    <img src="assets/img/blog/reply.jpg" alt="" />
                    <div className="coument-body">
                    <div className="comment-author">
                        <ul>
                        <li>Diego Fou</li>
                        <li>jan 06 2019</li>
                        </ul>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt utx gh labore et
                        dolor magna ali Ut enim ad minim veniam, quis nostrud
                        exercitation .
                    </p>
                    <div className="reply-achion">
                        <Link to="#"><i className="flaticon-reply-all"></i>Reply</Link>
                    </div>
                    </div>
                    <ul className="reply-list">
                    <li className="single-comment">
                        <img src="assets/img/blog/reply2.jpg" alt="" />
                        <div className="coument-body">
                        <div className="comment-author">
                            <ul>
                            <li>Fiego Fou</li>
                            <li>jan 06 2019</li>
                            </ul>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt utx gh labore
                            et dolor magna ali Ut enim ad minim veniam, quis
                            nostrud exercitation .
                        </p>
                            <div className="reply-achion">
                                <Link to="#"><i className="flaticon-reply-all"></i>Reply</Link>
                            </div>
                        </div>
                    </li>
                    </ul>
                </li>
                <li className="single-comment">
                    <img src="assets/img/blog/reply3.jpg" alt="" />
                    <div className="coument-body">
                    <div className="comment-author">
                        <ul>
                        <li>Hiego Fou</li>
                        <li>jan 06 2019</li>
                        </ul>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt utx gh labore et
                        dolor magna ali Ut enim ad minim veniam, quis nostrud
                        exercitation .
                    </p>
                    <div className="reply-achion">
                        <Link to="#"><i className="flaticon-reply-all"></i>Reply</Link>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            {/* <!--====================End of comments ====================--> */} 
        </>
    )
}


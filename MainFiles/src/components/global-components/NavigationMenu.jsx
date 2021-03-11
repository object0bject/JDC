import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu =(props)=>{
    const [addStickyClass, setAddStickyClass] = useState(' ');
    const [scrollTop, setScrollTop] = useState(0);
    const [navHide, setNavHide] = useState(false);
    const myRef = React.createRef();
  
    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          if(scrollTop > 200 ){
              setAddStickyClass('make_me_sticky')
          }
          else{
            // setAddStickyClass('make_me_sticky')
          }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

      useEffect(()=>{
        myRef.current.scrollTo(0,0)
      },[myRef])

    return(
        <>
            {/* <!-- Start header area --> */}
        <header className={`${addStickyClass} ${props.isOpen ? "video-modal-open":"video-modal-close"}`} ref={myRef}>
        {/* <!-- header top --> */}
        <div className="header-top">
            <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-4 d-none d-lg-block">
                {/* <!-- logo box --> */}
                <div className="logo-box">
                    <Link to="/"><img src="assets/img/logo.png" alt="logo"/></Link>
                </div>
                {/* <!-- End of logo box --> */}
                </div>
                <div className="col-lg-6 d-none d-md-block">
                {/* <!-- header meta --> */}
                <div className="header-meta">
                    <ul className="meta-list">
                    <li>
                        <span className="icon">
                            <i className="flaticon-phone-call"></i>
                        </span>
                        <div className="meta-content">
                        <p>Contact Available</p>
                        <span>(+00)888.666.88</span>
                        </div>
                    </li>
                    <li>
                        <span className="icon">
                            <i className="flaticon-placeholder"></i>
                        </span>
                        <div className="meta-content">
                        <p>Our Location</p>
                        <span>New York city, US</span>
                        </div>
                    </li>
                    </ul>
                </div>
                {/* <!-- End of header meta --> */}
                </div>
                <div className="col-md-2 d-none d-lg-block">
                {/* <!-- getting started button --> */}
                <div className="getting-started">
                    <Link to="/contact" className="btn">Get to Start</Link>
                </div>
                {/* <!-- End of getting started button --> */}
                </div>
            </div>
            </div>
        </div>
        {/* <!-- End of header top --> */}
        <div className="menu-inner-area">
            <div className="container">
            <div className="row align-items-center position-relative">
                <div className="col-md-3 col-lg-2 col-5">
                {/* <!-- logo box --> */}
                <div className="logo-box">
                    <Link to="/"><img src="assets/img/logo.png" alt="logo"/></Link>
                </div>
                {/* <!-- End of logo box --> */}
                </div>
                <div className="col-md-9 col-lg-8 col-7 position-static">
                <div className="menu-wrapper position-static">
                    <div className="header-menu position-static">
                    <div id="menu-button" onClick={()=>setNavHide(!navHide)}><i className="flaticon-menu"></i></div>
                    {/* <!-- main menu --> */}
                    <ul style={window.innerWidth < 992 ?  {   display: `${navHide ? 'block': 'none'}`} :  {   display: `${navHide ? 'block': 'block'}`} }>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="#!">Page</Link>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="*">404</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#!">Project</Link>
                            <ul>
                                <li><Link to="/project">Project</Link></li>
                                <li>
                                <Link to="/project-details">Project Detais</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* <!-- End of main menu --> */}
                    </div>
                </div>
                </div>
                <div className="col-md-2 d-none d-lg-block">
                {/* <!-- getting started button --> */}
                <div className="getting-started">
                    <button className="btn">Get to Start</button>
                </div>
                {/* <!-- End of getting started button --> */}
                </div>
            </div>
            </div>
        </div>
        </header>
        {/* <!-- End of the header area --> */}
            </>
        )
    }
    export default NavigationMenu;

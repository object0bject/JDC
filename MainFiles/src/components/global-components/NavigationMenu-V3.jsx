import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const NavigationMenuV3 =()=>{
    const [search, setSearch] = useState('')
    const [addStickyclass, setAddStickyclass] = useState(' ');
    const [scrollTop, setScrollTop] = useState(0);
    const [navHide, setNavHide] = useState(false);

  
    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          
          if(scrollTop > 120 ){
              setAddStickyclass('make_me_sticky')
          }
          else{
            setAddStickyclass('make_me_sticky')
          }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

      useEffect(() => {
      }, [search])

    return(
      <>
      <header className={`header-style2  header-style3 ${addStickyclass}`}>
    {/* <!--=================== End of header top ===================--> */}
    <div className="menu-inner-area">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-md-3 col-5 col-sm-4">
            {/* <!--=================== logo box ===================--> */}
            <div className="logo-box">
              <Link to="/"
                ><img src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="logo"
              /></Link>
            </div>
            {/* <!--=================== End of logo box ===================--> */}
          </div>
          <div className="col-lg-8 col-4 col-md-7 col-sm-6 position-static">
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
          <div className="col-md-2 col-3 col-sm-2 col-lg-1">
            {/* <!--=================== search something ===================--> */}
            <div
              className="search-something"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <Link to="#"><i className="flaticon-search"></i></Link>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">search here</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#">
                        <input type="text" placeholder="Search Here" value={search} onChange={()=>{setSearch()}}/>
                        <button type="submit"><i className="flaticon-search"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!--=================== End of search something ===================--> */}
          </div>
        </div>
      </div>
    </div>
  </header>

  </>
    )
   
}

export default NavigationMenuV3;

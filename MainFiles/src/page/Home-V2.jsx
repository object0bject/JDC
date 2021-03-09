import React, { Component } from 'react';
import NavigationMenuV2 from '../components/global-components/NavigationMenu-V2';
import BlogV2 from '../components/section-components/Blog-v2';
import HeroDemoV2 from '../components/section-components/Hero-v2';
import MapContactWrapper from '../components/section-components/MapContactWrapper';
import Pricing from '../components/section-components/Pricing';
import Video from '../components/section-components/Video';
import ScrollTop from './../components/global-components/BackToTop';
import Footer from './../components/global-components/Footer';
import Layouts from './../components/global-components/Layouts';
import AboutV2 from './../components/section-components/About-v2';
import ProjectV2 from './../components/section-components/Project-v2';
import Service from './../components/section-components/Service';


class HomeV2 extends Component {
    state ={
        isOpen: false
    }
    setOpen =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
   render(){ 
       return(
           <Layouts pageTitle='HomeDemo2'>
               <NavigationMenuV2 isOpen={this.state.isOpen}/>
               <HeroDemoV2 isOpen={this.state.isOpen} setOpen ={this.setOpen}/>
               <AboutV2 />
               <Video />
               <Service />
               <ProjectV2 />
               <Pricing />
               <MapContactWrapper />
               <BlogV2 />
               <Footer />
               <ScrollTop />
               
           </Layouts>
       )
   } 
}
export default HomeV2;
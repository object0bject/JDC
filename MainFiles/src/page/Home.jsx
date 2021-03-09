import React, { Component } from 'react';
import ScrollTop from '../components/global-components/BackToTop';
import Footer from '../components/global-components/Footer';
import NavigationMenu from '../components/global-components/NavigationMenu';
import Blog from '../components/section-components/Blog';
import Counter from '../components/section-components/Counter';
import Faq from '../components/section-components/Faq';
import Team from '../components/section-components/Team';
import Layouts from './../components/global-components/Layouts';
import About from './../components/section-components/About';
import Client from './../components/section-components/Client';
import Feature from './../components/section-components/Feature';
import Hero from './../components/section-components/Hero';
import Project from './../components/section-components/Project';
import Service from './../components/section-components/Service';

class Home extends Component {
    state ={
        isOpen: false
    }
    setOpen =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    componentDidMount(){
        window.scrollTo(0,0)
    }
   render(){ 
       return(
           <Layouts pageTitle='Home'>
               <NavigationMenu isOpen={this.state.isOpen}/>
               <Hero isOpen={this.state.isOpen} setOpen ={this.setOpen} />
               <Feature isOpen={this.state.isOpen}/>
               <About />
               <Counter />
               <Service />
               <Project />
               <Faq />
               <Team />
               <Client />
               <Blog />
               <Footer />
               <ScrollTop />
           </Layouts>
       )
   }
   
        
      
    
}
export default Home;
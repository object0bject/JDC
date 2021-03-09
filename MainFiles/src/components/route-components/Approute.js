import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogPage from '../../page/Blog';
import ErrorPage from '../../page/Error';
import FaqPage from '../../page/Faq';
import Home from '../../page/Home';
import HomeV2 from '../../page/Home-V2';
import SingleBlogPage from '../../page/Single-blog';
import About from './../../page/About';
import ContactPage from './../../page/Contact';
import PricingPage from './../../page/Pricing';
import Project from './../../page/Project';
import Service from './../../page/Service';
import SingleProjectPage from './../../page/Single-project';
import TeamPage from './../../page/Team';

function AppRoute() {

    return (
        < BrowserRouter >
            < Switch >
                < Route path = '/' exact component = { Home } />  
                < Route path = { `/home-v2` } component = { HomeV2 } /> 
                < Route path = { `/about` } component = { About } />  
                < Route path = { `/service` } component = { Service } /> 
                < Route path = { `/project` } component = { Project } />  
                < Route path = { `${process.env.PUBLIC_URL}/project-details/:id` } component = { SingleProjectPage } /> 
                < Route path = { `/project-details` } component = { SingleProjectPage } />  
                < Route path = { `/blog` } component = { BlogPage } />  
                < Route path = { `/blog-details` } component = { SingleBlogPage } />  
                < Route path = { `/faq` } component = { FaqPage } /> 
                < Route path = { `/team` } component = { TeamPage } />  
                < Route path =  '/pricing' component = { PricingPage } />  
                < Route path = "/contact" component = { ContactPage }/> 
                < Route path='*' component = { ErrorPage }/> 
            </ Switch> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;
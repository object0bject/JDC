import React, { useEffect } from 'react';
import SingleBlog from '../components/blog-components/Single-blog';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import ScrollTop from './../components/global-components/BackToTop';
import PageTitle from './../components/global-components/PageTitle';
import { sectionData } from './../data/section.json';

const SingleBlogPage = () =>{
    let data = sectionData.sectionTitle.singleBlog;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <Layouts pageTitle='Blog Details'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <SingleBlog/>
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default SingleBlogPage;
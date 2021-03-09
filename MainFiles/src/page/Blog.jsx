import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import BlogV3 from '../components/section-components/Blog-v3';
import ScrollTop from './../components/global-components/BackToTop';
import Layouts from './../components/global-components/Layouts';
import NavigationMenuV3 from './../components/global-components/NavigationMenu-V3';
import PageTitle from './../components/global-components/PageTitle';
import { sectionData } from './../data/section.json';

const BlogPage = () =>{
    let data = sectionData.sectionTitle.blog;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return(
        <>
        <Layouts pageTitle='Blog Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <BlogV3 />
            <Footer />
            <ScrollTop />   
        </Layouts>
        </>
    )
}
export default BlogPage;
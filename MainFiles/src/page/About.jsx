import React, { useEffect } from 'react';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import PageTitle from '../components/global-components/PageTitle';
import BlogV2 from '../components/section-components/Blog-v2';
import Team from '../components/section-components/Team';
import Video from '../components/section-components/Video';
import ScrollTop from './../components/global-components/BackToTop';
import Footer from './../components/global-components/Footer';
import Layouts from './../components/global-components/Layouts';
import About from './../components/section-components/About';
import Service from './../components/section-components/Service';
import { sectionData } from './../data/section.json';

const AboutPage =()=>{
    let data = sectionData.sectionTitle.about;

    useEffect(() => {
            window.scrollTo(0,0);
    }, [])

    return(
        <Layouts pageTitle='About Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <About />
            <Video />
            <Service />
            <Team />
            <BlogV2 />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default AboutPage;
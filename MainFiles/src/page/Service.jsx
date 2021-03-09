import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import Service from '../components/section-components/Service';
import ScrollTop from './../components/global-components/BackToTop';
import Layouts from './../components/global-components/Layouts';
import NavigationMenuV3 from './../components/global-components/NavigationMenu-V3';
import PageTitle from './../components/global-components/PageTitle';
import { sectionData } from './../data/section.json';

const ServicePage = () =>{
    let data = sectionData.sectionTitle.service;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return(
        <Layouts pageTitle='Service Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <Service />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default ServicePage;
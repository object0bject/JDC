import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import ScrollTop from './../components/global-components/BackToTop';
import Layouts from './../components/global-components/Layouts';
import PageTitle from './../components/global-components/PageTitle';
import MapContactWrapperV2 from './../components/section-components/MapContactWrapper-v2';
import { sectionData } from './../data/section.json';

const ContactPage =()=>{
    let data = sectionData.sectionTitle.contact;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return(
        <Layouts pageTitle='Contact Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <MapContactWrapperV2 />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default ContactPage;
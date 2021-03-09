import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import ScrollTop from './../components/global-components/BackToTop';
import PageTitle from './../components/global-components/PageTitle';
import Faq from './../components/section-components/Faq';
import { sectionData } from './../data/section.json';

const FaqPage =()=>{
    let data = sectionData.sectionTitle.faq;
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return(
        <Layouts pageTitle="Faq Page">
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <Faq />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default FaqPage;
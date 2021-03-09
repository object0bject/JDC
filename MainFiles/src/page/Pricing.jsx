import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import Pricing from '../components/section-components/Pricing';
import ScrollTop from './../components/global-components/BackToTop';
import PageTitle from './../components/global-components/PageTitle';
import { sectionData } from './../data/section.json';

const  PricingPage =()=>{
    let data = sectionData.sectionTitle.pricing;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])

    return(
        <Layouts pageTitle='Pricing Page'>
            <NavigationMenuV3/>
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <Pricing />
            <Footer />
            <ScrollTop />
        </Layouts>
    )

}
export default PricingPage;
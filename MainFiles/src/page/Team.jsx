import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import ScrollTop from './../components/global-components/BackToTop';
import Layouts from './../components/global-components/Layouts';
import NavigationMenuV3 from './../components/global-components/NavigationMenu-V3';
import PageTitle from './../components/global-components/PageTitle';
import TeamV2 from './../components/section-components/Team-v2';
import { sectionData } from './../data/section.json';

const TeamPage = () =>{
    let data = sectionData.sectionTitle.team;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return(
        <Layouts pageTitle='Service Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <TeamV2 />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default TeamPage;
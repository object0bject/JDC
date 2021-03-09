import React, { useEffect } from 'react';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import PageTitle from '../components/global-components/PageTitle';
import ScrollTop from './../components/global-components/BackToTop';
import Footer from './../components/global-components/Footer';
import Layouts from './../components/global-components/Layouts';
import ProjectV3 from './../components/section-components/Project-v3';
import { sectionData } from './../data/section.json';


const  ProjectPage =()=>{
    let data = sectionData.sectionTitle.project;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return(
        <Layouts pageTitle='Project Page'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <ProjectV3 />
            <Footer />
            <ScrollTop />
        </Layouts>
    )
}
export default ProjectPage;
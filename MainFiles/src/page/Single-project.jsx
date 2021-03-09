import React, { useEffect } from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3';
import ScrollTop from './../components/global-components/BackToTop';
import PageTitle from './../components/global-components/PageTitle';
import SingleProject from './../components/project-components/Single-project';
import { sectionData } from './../data/section.json';

const SingleProjectPage = (props) =>{
    let data = sectionData.sectionTitle.singleProject;
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Layouts pageTitle='Single Project'>
            <NavigationMenuV3 />
            <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
            <SingleProject/>
            <Footer />
            <ScrollTop />
        </Layouts>

    )
}
export default SingleProjectPage;
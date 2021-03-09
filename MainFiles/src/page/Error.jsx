import React from 'react'
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts'
import NavigationMenuV3 from '../components/global-components/NavigationMenu-V3'
import PageTitle from '../components/global-components/PageTitle';
import ErrorContent from '../components/section-components/ErrorContent';
import { sectionData } from './../data/section.json';

function ErrorPage() {
    let data = sectionData.sectionTitle.error;
    return (
        <div>
            <Layouts pageTitle='Error Page'>
                <NavigationMenuV3 />
                <PageTitle pageTitle={data.title} background={data.background} pageName={data.pageName}/>
                <ErrorContent />
                <Footer />
            </Layouts>

        </div>
    )
}

export default ErrorPage;
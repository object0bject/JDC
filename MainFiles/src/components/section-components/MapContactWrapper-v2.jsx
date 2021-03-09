import React from 'react';
import { sectionData } from '../../data/section.json';
import Map from "../global-components/Map";
import Contact from './Contact';

const MapContactWrapperV2 =()=>{
    let data = sectionData.mapDescription;
    return (
        <>
        <section className="contact contact-page pb-120">
          {/* <!--====================== contact information ======================--> */}
            <Contact />
          {/* <!--====================== contact information ======================--> */}

          {/* <!--================= map =================--> */}
          <div className="contact-map">
                <Map let={data.let} lng={data.lng} zoom={data.zoom} mapLetLng={data.mapLetLng.center}/>
          </div>
          {/* <!--====================== End of map ======================--> */}
        </section>
        </>
    )
}

export default MapContactWrapperV2;
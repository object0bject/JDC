import React from 'react';
import { sectionData } from '../../data/section.json';
import Map from "../global-components/Map";
import Contact from './Contact';

const MapContactWrapper =()=>{
    let data = sectionData.mapDescription;
    return (
        <>
        <section className="contact pb-120">
          {/* <!--================= map =================--> */}
          <div className="contact-map">
                <Map let={data.let} lng={data.lng} zoom={data.zoom} mapLetLng={data.mapLetLng.center}/>
          </div>
          {/* <!--====================== End of map ======================--> */}
    

          {/* <!--====================== contact information ======================--> */}
            <Contact />

          {/* <!--====================== contact information ======================--> */}
        </section>
        </>
    )
}

export default MapContactWrapper;
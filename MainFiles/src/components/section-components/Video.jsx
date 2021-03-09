import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';
const Video =()=>{
    let data = sectionData.video;
    let publicUrl = process.env.PUBLIC_URL+'/'
    const [isOpen, setOpen] = useState(false)
    return(
        <>
            {/* <!--======================= action video =======================--> */}
            <div className="action-video mb-120" style={{background:`url(${publicUrl + data.background})`}}>
            <div className="overlay">
                <Link className="venobox vbox-item" to="#!" onClick={()=> setOpen(true)}>
                    <span><i className="flaticon-play-button"></i></span>
                </Link>
                <ModalVideo channel={data.channelName} autoplay isOpen={isOpen} videoId={data.videoId} onClose={() => setOpen(false)} />
            </div>
            </div>
            {/* <!--======================= End of action video =======================--> */}
        </>
    )
}

export default Video;
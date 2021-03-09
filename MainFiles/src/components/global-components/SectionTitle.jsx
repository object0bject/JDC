import { React } from 'react';

function SectionTitle(props) {
    return (
        <>
        <div className="section-title text-center">
            <h2
            className="wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.5s"
            >
            {props.title}
            </h2>
            <p
            className="wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="1.5s"
            >
            {props.titleContent}
            </p>
        </div>
        </>
    )
}

export default SectionTitle;
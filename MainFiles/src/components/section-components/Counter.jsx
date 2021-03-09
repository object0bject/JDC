import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { sectionData } from './../../data/section.json';

class Counter extends Component {

    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
      
render(){
    let data = sectionData.counter;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
           {/* <!--================ counter  ================--> */}
           
            <section className="counter mb-120" style={{background:`url(${publicUrl + data.background})`}}>
            <div className="container-fluid">
                <div className="row">
                    {data.singleCounter.map((singleCount, i) =>{
                        return(
                            <div className="col-lg-3 col-md-6" key={i}>
                                {/* <!--================ single counter ================--> */}
                                <div className="single-counter">
                                <span>
                                    <i className={singleCount.icon}></i>
                                </span>
                                <div className="counter-content">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? singleCount.value : 0} />
                                    </VisibilitySensor>
                                
                                    <span>+</span>
                                    <h3>{singleCount.title}</h3>
                                </div>
                                </div>
                                {/* <!--================ End of single counter ================--> */}
                            </div>

                        )
                    })}
                
                </div>
            </div>
            </section>

    {/* <!--================ End of counter  ================--> */}
        </>
    )
}

}
export default Counter;

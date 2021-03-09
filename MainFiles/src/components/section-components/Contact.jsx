import React, { Component } from 'react';
import { sectionData } from './../../data/section.json';
import axios from "axios";

export default class Contact extends Component {
  constructor(props){
    super()
    this.data = sectionData.contact
  }
  state ={
      name: '',
      email: '',
      phone: '',
      sub:'',
      message:'',
      mailSuccess:false
  }
  onHandSubmit =(e)=>{
   e.preventDefault()
   this.fetchApi()
  }
  onchangeHandler =(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  fetchApi(){
    axios({
        method: "POST", 
        url:"http://donisr.w3webscript.com/send/index.php", 
        data:  this.state
      })
      .then(res=>{
        console.log(res);

        if(res.status === 200){
          this.setState({
            mailSuccess : true
          })
        }
      })
  }

    render(){
        return(
            <div
            className="contact-information wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.5s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="information-inner">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="address-inner">
                          {/* <!--===================== header =====================--> */}
                          <div className="headre">
                            <h2>{this.data.getAdvice.title}</h2>
                          </div>
                          {/* <!--====================== End of header ======================--> */}
    
                          {/* <!--====================== address information ======================--> */}
                          <div className="address-information">
                            <ul>
                              {this.data.getAdvice.address.map( (address, i)=>{
                                return (
                                  <li className="media" key={i}>
                                    <span className="icon">
                                      <i className={address.icon}></i>
                                    </span>
                                    <div className="media-body">
                                      <h4>{address.title}</h4>
                                      <p>{address.contentOne}</p>
                                      <p>{address.contentTwo}</p>
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                          {/* <!--====================== End of address information ======================--> */}
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="form-content">
                          {/* <!--====================== header ======================--> */}
                          <div className="headre">
                            <h2>{this.data.inputInfo.title}</h2>
                          </div>
                          {/* <!--====================== End of header ======================--> */}
    
                          <div className="form-information">
                            <form onSubmit={this.onHandSubmit}>
                              <div className="row">
                                <div className="col-md-6">
                                  <label htmlFor="name">
                                    <input
                                      onChange={this.onchangeHandler}
                                      name="name"
                                      value={this.state.name}
                                      type="text"
                                      placeholder="Your Name"
                                      required
                                    />
                                    <span><i className="flaticon-user"></i></span>
                                  </label>
                                </div>
    
                                <div className="col-md-6">
                                  <label htmlFor="email">
                                    <input
                                      onChange={this.onchangeHandler}
                                      name="email"
                                      value={this.state.email}
                                      type="email"
                                      placeholder="Email Id"
                                      required
                                    />
                                    <span><i className="flaticon-envelope"></i></span>
                                  </label>
                                </div>
    
                                <div className="col-md-6">
                                  <label htmlFor="phone">
                                    <input
                                      onChange={this.onchangeHandler}
                                      name="phone"
                                      value={this.state.phone}
                                      type="tel"
                                      placeholder="Phone No"
                                    />
                                    <span
                                      ><i className="flaticon-phone-call-1">
                                          </i></span>
                                  </label>
                                </div>
    
                                <div className="col-md-6">
                                  <label htmlFor="subject">
                                    <input
                                      onChange={this.onchangeHandler}
                                      name="sub"
                                      value={this.state.sub}
                                      type="text"
                                      placeholder="Your Subject"
                                    />
                                    <span
                                      ><i className="flaticon-edit-button">
                                          </i></span>
                                  </label>
                                </div>
    
                                <div className="col-md-12">
                                  <label htmlFor="msg">
                                    <textarea
                                      onChange={this.onchangeHandler}
                                      name="message"
                                      value={this.state.message}
                                      name="message"
                                      placeholder="Your Message"
                                      required
                                    ></textarea>
                                    <span
                                      ><i className="flaticon-speech-bubble">
                                          </i></span>
                                  </label>
                                </div>
    
                                <div className="col-md-12">
                                  <div className="form-action">
                                    <button type="submit" className="btn">
                                      Send Message
                                    </button>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="sending-information">
                                  {this.state.mailSuccess === true ? <span>Mail Sent Successfully</span> : "" }
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

import React, { Component } from 'react';

export default class Reply extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }
  submitHandler =(e)=>{
    e.preventDefault()
  }
  changeHandler =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    render() {
        return (
            <>
              <div className="leave-reply">
                <h3>Leave a Reply</h3>
                <form action="#" onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name*" onChange={this.changeHandler} value={this.state.name} name='name' />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Email*" onChange={this.changeHandler}  value={this.state.email} name='email'/>
                    </div>
                    <div className="col-md-12">
                      <textarea placeholder="Your Comment*" onChange={this.changeHandler}  value={this.state.message} name='message'></textarea>
                      <button type="submit" className="btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </>
        )
    }
}


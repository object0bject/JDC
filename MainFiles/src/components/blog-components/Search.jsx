import React, { Component } from 'react';

export default class Search extends Component {
    state = {
        search:""
    }
    serachHandler =(e)=>{
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <>
                <div className="blog-widget search-blog">
                    <form action="#" onSubmit={this.submitHandler}>
                    <label htmlFor="search">
                        <input onChange={this.serachHandler} type="search" placeholder="Search" value={this.state.search} name='search' />
                    </label>
                        <button><i className="flaticon-search"></i></button>
                    </form>
                </div>
            </>
        )
    }
}

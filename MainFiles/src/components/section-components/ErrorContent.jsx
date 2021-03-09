import React from 'react'
import { Link } from 'react-router-dom'

function ErrorContent() {
    return (
        <div>
            <section className="pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="error-content text-center">
                                <h1>404</h1>
                                <h3>Page Not Found</h3>
                                <p>This page you are looking is not available or has been removed. Try going to Home page by using the button below.</p>
                                <Link to='/' className='btn'>Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorContent;
import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'


function Landing() {
    return (
        <main>
            <nav>
            <img
                src={logo}
                alt="jobster logo"
                className="logo"
            />
            </nav>
            <div className="container page">
            {/* Info */}
                <div className="info">
                    <h1>
                    job <span>Tracking</span> app
                    </h1>
                    <p>some text files will be here for informing the public about our company </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img
                    src={main}
                    alt="job hunt"
                    className="img main-img"
                />
            </div>
        </main>
    );
}

export default Landing
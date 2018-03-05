import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Home = props => {
    return (
        <div className="home-container">
            <div className="home-blurb">
                <p className="home-info">
                    The American Recovery and Reinvestment Act of 2009 (ARRA) (Pub.L. 111–5),
                    nicknamed the Recovery Act, was a stimulus package enacted by the 111th U.S.
                    Congress and signed into law by President Barack Obama in February 2009.
                    Developed in response to the Great Recession, the ARRA's primary objective was
                    to save existing jobs and create new ones as soon as possible. Other objectives
                    were to provide temporary relief programs for those most affected by the
                    recession and invest in infrastructure, education, health, and renewable energy.
                </p>
            </div>
            <div className="home-contact">
                <Link to='/contact'>Contact your local public authority figure</Link>
            </div>
        </div>
    )
}
export default Home;
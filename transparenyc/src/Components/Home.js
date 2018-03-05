import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

const Home = props => {
    return (
        <div className="home-container">
            <div className="home-blurb">
                <p className="home-info">
                   The information about public funding and
                    government agencies is very dense. It could be a challenge for the average New
                    Yorker to find out whether the issues they care about are receiving funding, or
                    even which organization is responsible for the issues they care about. When
                    someone wants to contact a representative, vote for a candidate, or determine
                    which organization to support, it is critical to have access to digestible
                    information regarding these issues.
                </p>
                <p className="home-info">
                    <span id="transparency">transpareNYC</span> takes all the project funding information from the publicly provided API
                    and organizes it into a much more readable form. We hope that by making this
                    information easy to understand, it would give the average NYC resident knowledge
                    about whether the issues they care about are being addressed and which agencies
                    are responsible.
                </p>
            </div>
            <div className="home-contact">
                <Link to='/contact'>Contact your local public authority figure</Link>
            </div>
        </div>
    )
}
export default Home;
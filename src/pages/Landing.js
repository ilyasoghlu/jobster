

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import{ Logo }from '../components';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <Wrapper>
            <nav>
            <Logo />
            </nav>
            <div className="container page">
            {/* Info */}
            <div className="info">
                <h1>
                job <span>Tracking</span> app
                </h1>
                <p>some text files will be here for informing the public about our company </p>
                <Link
                to="/register"
                className="btn btn-hero"
                >
                Login / Register
                </Link>
            </div>
            <img
                src={main}
                alt="job hunt"
                className="img main-img"
            />
            </div>
        </Wrapper>
    );
}


export default Landing
import React from 'react';
import { Link } from 'react-router-dom';

// Since we know we don't need lifecycle methods, the footer will be
// a functional component

// Within the return statement, since we are using JSX, you can include javascript statements
// like Date().getFullYear
export default () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><Link className="nav-link" to="/aboutus">About us</Link></li>
                        <li><Link className="nav-link" to="/blog">Blog</Link></li>
                        <li><Link className="nav-link" to="/press">Press</Link></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><Link className="nav-link" to="#"><i className="ion-logo-facebook"></i></Link></li>
                        <li><Link className="nav-link" to="#"><i className="ion-logo-twitter"></i></Link></li>
                        <li><Link className="nav-link" to="#">><i className="ion-logo-googleplus"></i></Link></li>
                        <li><Link className="nav-link" to="#"><i className="ion-logo-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
            Copyright &copy; {new Date().getFullYear()} DevLog
        </footer>
    )
}
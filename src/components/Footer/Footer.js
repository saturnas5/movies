import React from "react";
import {Link} from "react-router-dom";
import logo from '../../img/logo.png'

const Footer = () => {
    
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer__logo-box">
                        <img className='footer__logo-box-img' src={logo} alt="logo"/>
                    </div>
                    <div className="footer__info-box">
                        <div className="footer__nav-box">
                            <ul className="footer__nav-box-list">
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Popular</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/upcoming'>Upcoming</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/top-rated'>Top Rated</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Trending</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__terms-box">
                            <ul className="footer__nav-box-list">
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Privacy Policy</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Terms</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__contact-box">
                            <ul className="footer__nav-box-list">
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>About Us</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Contact Us</Link>
                                </li>
                                <li className="footer__nav-box-list-item">
                                    <Link className='footer__nav-box-list-item-link' to='/'>Work with Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                        <span className="footer__copyright-text">
                            Copyright © 2022.
                        </span>
                </div>
            </footer>    
        </>
    )
}

export default Footer;
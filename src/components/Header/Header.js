import React from "react";
import {Link} from "react-router-dom";
import logo from '../../img/logo.png';
import '../../css/style.css';
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {

    return (
        <header className='header'>
            <div className="container header-flex">
                <div className="header__logo-box">
                    <img src={logo} alt="" className="logo-box__logo"/>
                </div>
                <SearchBox/>
                <div className="header__nav-box">
                    <ul className="nav-box__list">
                        <li className="nav-box__list-item"><Link to='/'>Popular</Link></li>
                        <li className="nav-box__list-item"><Link to='/upcoming'>Upcoming</Link></li>
                        <li className="nav-box__list-item"><Link to='/top-rated'>Top Rated</Link></li>
                        <li className="nav-box__list-item"><Link to='/login'>Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
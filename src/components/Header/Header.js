import React from "react";
import {Link} from "react-router-dom";
import logo from '../../img/logo.png';
import '../../css/style.css';

const Header = () => {

    return (
        <header className='header'>
            <div className="container header-flex">
                <div className="header__logo-box">
                    <img src={logo} alt="" className="logo-box__logo"/>
                </div>
                <div className="header__search-box">
                    <input type="text" className="search-box__input"/>
                </div>
                <div className="header__nav-box">
                    <ul className="nav-box__list">
                        <li className="nav-box__list-item"><Link to='/'>Home</Link></li>
                        <li className="nav-box__list-item"><Link to='#'>Home</Link></li>
                        <li className="nav-box__list-item"><Link to='#'>Home</Link></li>
                        <li className="nav-box__list-item"><Link to='#'>Home</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
import React from "react";
import "./../styles/Navigation.css";
import {Link} from "react-router-dom";
import {LinkX, animateScroll as scroll } from "react-scroll";


function Navigation({loggedIn}){

    return(
        <div className="nav">
            <Link 
                className="nav-left" 
                to="/">
                    DUCK STUDIO
            </Link>

            <div className="nav-middle">
                <h3><Link to="/">Home</Link></h3>
                <h3><LinkX 
                    to="section1" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}> 
                        Store
                </LinkX></h3>
                <h3><LinkX 
                    to="section2" 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}>
                        Contact
                </LinkX></h3>
            </div>

            <div className="nav-right">
                <img 
                    className="profile-icon" 
                    src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png" 
                    alt="profile">
                </img>

                {loggedIn
                    ? <button 
                        className="auth-button" 
                        onClick={() => localStorage.removeItem("token")}>
                            Logout
                      </button>
                    : <div className="auth">
                        <button className="auth-button"><Link to="/signup">Signup</Link></button>
                        <button className="auth-button"><Link to="/login">Login</Link></button>
                      </div>
                }

                <Link to="/cart">
                    <img 
                        className="cart-icon" 
                        src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png" 
                        alt="cart">
                    </img>
                </Link>
            </div>
        </div>
    );

}

export default Navigation;


import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };


    return (
        <div className={isScrolled ? "navbar scrolled" :"navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="" 
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>MyList</span>

                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://cdn.shopify.com/s/files/1/1566/2889/articles/PORTADA-TC_2048x.progressive.jpg?v=1625573349" alt="" />
                    
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar

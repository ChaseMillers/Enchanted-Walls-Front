import React from 'react';
import Menu from '../menu/Menu';
import "./Layout.css";
import Footer from "../footer/Footer"
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation'

const Layout = ({
    heroImage = "https://i.imgur.com/JUT81Za.png",
    imageClassName = "hero-image",
    className,
    children,
    link,
    routes,
    bannerIMG = false,
    animation = false,
}) => {

    return (
            <div>
                <Menu />
                <div className="content-container">
                <div className="routes">{routes}</div>
        
                    {bannerIMG && (
                        <Link
                            to={link}>
                            <img
                            className={imageClassName} 
                            src={heroImage}
                            alt="title product"
                            ></img>
                        </Link>
                        )
                    }

                    {animation && (
                            <Animation />
                        )
                    }
              
                <div className={className}>{children}</div>
                <Footer />
                </div>
            </div>
    );}

export default Layout;
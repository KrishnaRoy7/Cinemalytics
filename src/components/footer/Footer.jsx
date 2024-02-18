import React from "react";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Cinemalytics revolutionizes the way you discover, explore, and enjoy movies and TV shows. With its comprehensive features and user-friendly interface, it's the ultimate companion for cinephiles everywhere. Download Cinemalytics today and unlock a world of cinematic wonders!
                </div>
                <div className="socialIcons">
                <a href="https://www.instagram.com/__roy__krishna__/" target="_blank">
                <span className="icon">
                        <FaInstagram  color="white"/>
                    </span>
                </a>
                    <a href="https://github.com/KrishnaRoy7" target="_blank">
                    <span className="icon">
                        <FaGithub color="white"/>
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/krishna-chandra-roy-098467228/" target="_blank">
                    <span className="icon">
                        <FaLinkedin color="white"/>
                    </span>
                    </a>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

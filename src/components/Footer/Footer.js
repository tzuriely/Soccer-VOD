import React from 'react';

const Footer = () => (
    <div className="footer-container">
        <hr></hr>
        <div className="footer">
            <div className="footer-terms">
            DISCLAIMER: Soccer-VOD.com does not host any of the videos embedded here. 
            All videos are uploaded by football / soccer fans to websites like YouTube or Dailymotion. 
            Our mission here, is to organize those videos and to make your search for the latest soccer goals easier. 
            We simply link to the video that is already hosted on other web sites. 
            If you are concerned about copyrighted material appearing in this website,
            we suggest that you contact the web site that is hosting the video and have it removed from there. 
            Once the content is removed from the website hosting your content, it will automatically be removed from Soccer-VOD.com.
            </div>
            <div className="footer-contact">
                <div className="footer-contact-social">
                    <div className="footer-contact-social-title">
                        Contact With Us:
                    </div>
                    <img className="footer-contact-social-icon" src="/images/social/facebook.png"/>
                    <img className="footer-contact-social-icon" src="/images/social/twitter.png"/>
                    <img className="footer-contact-social-icon" src="/images/social/youtube.png"/>
                </div>
                <div className="footer-contact-mail"></div>
            </div>
        </div>
    </div>

)

export default Footer;
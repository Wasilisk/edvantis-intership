import React from 'react';
import {SocialLinksProps} from "./types";
import {ReactComponent as FacebookIcon} from "../../../assets/icons/social-media/facebook.svg"
import {ReactComponent as InstagramIcon} from "../../../assets/icons/social-media/instagram.svg"
import {ReactComponent as YoutubeIcon} from "../../../assets/icons/social-media/youtube.svg"
import {SocialLinksStyles} from "./styles";


const SocialLinks = ({social_links}: SocialLinksProps) => {
    return (
        <SocialLinksStyles>
            <p>Follow Us</p>
            <div className="links">
                <a href={social_links.facebook} target="_blank" data-testid="facebook-link">
                    <FacebookIcon/>
                </a>
                <a href={social_links.instagram} target="_blank" data-testid="instagram-link">
                    <InstagramIcon/>
                </a>
                <a href={social_links.youtube} target="_blank" data-testid="youtube-link">
                    <YoutubeIcon/>
                </a>
            </div>
        </SocialLinksStyles>
    );
};

export default SocialLinks;
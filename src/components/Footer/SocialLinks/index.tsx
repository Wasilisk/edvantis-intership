import React from 'react';
import {SocialLinksProps} from "./types";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import YoutubeIcon from "../../../assets/icons/YoutubeIcon";
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
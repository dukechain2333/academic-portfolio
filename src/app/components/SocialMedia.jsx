"use client";

import personalInfo from '../../../data/personalInfo.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faXTwitter,
    faInstagram,
    faFacebook,
    faGoogleScholar,
    faOrcid
} from '@fortawesome/free-brands-svg-icons';

const Box = ({href, label, onClick, children}) => (
    <a target="_blank"
       rel="noopener noreferrer"
       href={href}
       aria-label={label}
       className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7 mx-2"
       onClick={onClick}>
        {children}
    </a>
);

const SocialMedia = () => {
    return (
        <div className="flex flex-wrap justify-between max-w-full">
            {personalInfo.social_media.linkedin && (
                <Box href={personalInfo.social_media.linkedin} label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.X && (
                <Box href={personalInfo.social_media.X} label="X">
                    <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.instagram && (
                <Box href={personalInfo.social_media.instagram} label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.facebook && (
                <Box href={personalInfo.social_media.facebook} label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.github && (
                <Box href={personalInfo.social_media.github} label="Github">
                    <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.google_scholar && (
                <Box href={personalInfo.social_media.google_scholar} label="Google Scholar">
                    <FontAwesomeIcon icon={faGoogleScholar} size="xl" style={{color: "#000000"}}/>
                </Box>
            )}
            {personalInfo.social_media.orcid && (
                <Box href={personalInfo.social_media.orcid} label="ORCID">
                    <FontAwesomeIcon icon={faOrcid} size="xl" style={{color: "#000000",}}/>
                </Box>
            )}
        </div>
    );
};

export default SocialMedia;
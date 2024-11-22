import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import gmail from "../assets/Icons/gmail.png"
import wp from "../assets/Icons/wp.png"
import { openGitHubPage, openLinkedInPage, openGmail, openWhatsApp } from "../utilities/Helpers/ExternalConnection";

export const icons = [
    { src: linkedin, alt: "LinkedIn", onClick: () => openLinkedInPage("david-keci-917712274") },
    { src: github, alt: "GitHub", onClick: () => openGitHubPage("Davidi24") },
    { src: gmail, alt: "Gmail", onClick: () => openGmail("kecidavid22@example.com") },
    { src: wp, alt: "WhatsApp", onClick: () => openWhatsApp("+355677564436") }
  ];

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const footerIcons = [
    <LinkedInIcon fontSize="medium"/>,
    <InstagramIcon fontSize="medium"/>,
    <EmailOutlinedIcon fontSize="medium"/>,
    <GitHubIcon fontSize="medium"/>, 
    <WhatsAppIcon fontSize="medium"/>
   ]
   


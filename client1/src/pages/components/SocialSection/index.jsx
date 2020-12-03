import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import './responsive.css';
import './styles.css';

export default function SocialSection(){
  return (
    <div className="Social__Section">
      <a 
        href="https://www.linkedin.com/school/universidadecandidomendes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a 
        href="https://www.facebook.com/ucamoficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a 
        href="https://www.instagram.com/ucam.oficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://twitter.com/UCAM_oficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  )
}

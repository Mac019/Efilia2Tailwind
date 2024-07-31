import React from 'react';
import groupLogo from '../asset/Group36.png';
import groupLinkdin from '../asset/Linkdin.png';
import groupFacebook from '../asset/Facebook.png';
import groupInstagram from '../asset/Instagram.png';

const Footer = () => {
  return (
    <div className="w-full h-36 bg-[#2C3531] flex justify-evenly items-center">
      <div className="pl-40">
        <img src={groupLogo} alt="Group 20" className="h-12 w-auto" />
      </div>
      <div className="flex-2 flex justify-evenly items-center space-x-8">
        <a href="https://example.com/link1" className="text-white no-underline">Area of Expertise</a>
        <a href="https://example.com/link2" className="text-white no-underline">Feasibility analysis</a>
        <a href="https://example.com/link3" className="text-white no-underline">About us</a>
      </div>
      <div className="flex justify-center space-x-8 pr-40">
        <img src={groupLinkdin} alt="LinkedIn" className="h-6 w-auto" />
        <img src={groupFacebook} alt="Facebook" className="h-6 w-auto" />
        <img src={groupInstagram} alt="Instagram" className="h-6 w-auto" />
      </div>
    </div>
  );
}

export default Footer;

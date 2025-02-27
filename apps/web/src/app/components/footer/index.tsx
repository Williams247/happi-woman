import React from 'react';
import { AppIcon } from '../app-icon';
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiLinkedin,  FiFacebook  } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#333333] flex md:flex-row flex-col justify-between  md:px-20 md:py-12 p-10 text-[#F5F5F5]">
      <div className="flex md:flex-row flex-col gap-x-10 gap-y-6 md:gap-y-0">
        <div>
          <AppIcon />
          <p className='pt-4'>Join thousands of women achieving <br /> their dreams with HappyWoman.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white pb-3">Features</h3>
          <ul>
            <li>Marketplace</li>
            <li>Loans & Grants</li>
            <li>Mentorship</li>
            <li>Learning</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white pb-3">Links</h3>
          <ul>
            <li>About us</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-white">Follow us</h3>
        <div className="flex gap-x-3 pt-3">
        <FiTwitter />
        <FiLinkedin />
        <FiFacebook />
        <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;

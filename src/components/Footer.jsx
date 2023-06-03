import React from "react";
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";
function Footer() {
  return (
    <section className="flex flex-col mt-40">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className="font-poppins text-dimWhite mt-4 ml-8 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex gap-x-4 mt-10 md:mt-0 md:gap-x-16">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="">
              <h3 className="text-white text-[18px]">{footerlink.title}</h3>
              <ul className="flex flex-col gap-y-2 mt-5">
                {footerlink.links.map((link, index) => (
                  <li>
                    <a href={link} className="text-dimWhite">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-white rounded-full my-10"></div>
      <div className="flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0">
        <p className="font-poppins text-white text-center sm:text-left">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-x-4 mb-2 justify-center sm:justify-start">
          {socialMedia.map((social) => (
            <img key={social.id} src={social.icon} alt="social icon" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;

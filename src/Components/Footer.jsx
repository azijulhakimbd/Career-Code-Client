import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer flex flex-col md:flex-row flex-wrap justify-between items-start container mx-auto px-4 py-10 text-success gap-8">
        
        {/* Logo & Info */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://i.postimg.cc/sgLdKYQp/MAH-TECH-20220313-004420.png"
            className="w-[60px] rounded-full border-2 border-success mb-3"
            alt="MAH Technology"
          />
          <p>
            <span className="font-bold">MAH Technology</span>
            <br />
            Providing reliable tech since 2018
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

import { FaXTwitter } from "react-icons/fa6";
import logo from "./../../assets/logo.png"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#021a2b] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-4">
        {/* Left Logo */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <img
            src={logo}
            alt="Hero.io Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold tracking-wide">HERO.IO</span>
        </div>



        {/* Right Social Links */}
        <div className="flex flex-col sm:items-end">
          <h3 className="text-sm font-medium mb-2 text-gray-300">
            Social Links
          </h3>
          <div className="flex gap-4 text-gray-400">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm pt-4">
        Copyright © 2025 - All right reserved
      </div>
    </footer>
    );
};

export default Footer;
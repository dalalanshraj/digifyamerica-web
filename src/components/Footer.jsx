import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TrustpilotWidget from "./TrustpilotWidget";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin";

export default function Footer() {
  return (
    <>
      {/* Connect Section */}
      <section className="bg-[#fff] py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <h1 className="text-xl sm:text-4xl md:text-2xl text-[#2E2E2E]">
            Connect with Us!
          </h1>

          <HashLink
            to="/contact/"
            className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg shadow transition hover:scale-105"
          >
            Contact Our Team
          </HashLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3C53] text-white px-6 py-12">
        {/* GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Column 1 */}
          <div>
            <a href="tel:+17862242351">
              <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
                Give us a call: +1 786-224-2351
              </button>
            </a>

            <div className="mb-3">
              <a
                href="https://wa.me/14482381683"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p>
              <a href="mailto:contact@digifyamerica.com">
                contact@digifyamerica.com
              </a>
            </p>

            <p className="mt-3">
              34990 Emerald Coast Pkwy, Suite 300,
              <br />
              Destin, FL 32541
            </p>

            <div className="mt-4 flex justify-center md:justify-start gap-4 text-2xl">
             <a href="https://www.facebook.com/profile.php?id=61574315640630"> <FaFacebook /></a>
            <a href="https://www.instagram.com/digifyamerica/"> <FaInstagram /></a> 
             <a href="https://wa.me/14482381683"> <FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2 */}
           <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Services</h2>
            <ul className="mt-4 space-y-1 text-sm   text-white/90">
              <li>
                <Link to="/web-designing/">Websites Development</Link>
              </li>
              <li>
                <Link to="/search-engine-optimization">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/graphic-design/">Graphic Design</Link>
              </li>
              <li>
                <Link to="/social-media-marketing/">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/branding/">Branding</Link>
              </li>
              <li>
                <Link to="/video-production/">Video Production</Link>
              </li>
            </ul>
          </div>
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Company</h2>
            <ul className="mt-4 space-y-1 text-sm   text-white/90">
              <li>
                <Link to="/about-us/">About</Link>
              </li>
              <li>
                <Link to="/pricing/">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blogs/">Blog</Link>
              </li>
              <li>
                <Link to="/24/7-Support/">24/7 Support</Link>
              </li>

              <li>
                <Link to="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Terms-&-Conditions/">Terms & Conditions</Link>
              </li>

              <li>
                <HashLink to="/contact/">Contact</HashLink>
              </li>
            </ul>
          </div>


          {/* Column 4 → Trustpilot */}
          <div>
            <h2 className="text-xl mb-3 mx-3">Reviews</h2>
            <TrustpilotWidget  />
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10">
          <h2 className="text-xl mb-3">Our Location</h2>

          <iframe
            src={mapSrc}
            className="w-full h-72 md:h-60 rounded-lg"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white pt-6 flex justify-center items-center gap-6 text-sm text-white/80 flex-wrap">
          
          <p>
            © 2025 Powered by{" "}
            <a href="https://digifyamerica.com" className="hover:text-white">
              Digify America
            </a>
          </p>

          <p>
            A Brand of Technologist E Solution Pvt. Ltd.
          </p>

        </div>
      </footer>
    </>
  );
}
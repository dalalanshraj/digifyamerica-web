import React, { useState, useEffect } from "react";
import  { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
 
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
// import founderImage from "../../assets/service-vector/hand-drawn-digital-natives-illustration.webp";
import DirectbookingIcons from "../../components/DirectbookingIcons";
import { HashLink } from "react-router-hash-link";
import ProblemSection from "../../components/ProblemSection";
import SolutionSection from "../../components/SolutionSection";
import ProcessSection from "../../components/ProcessSection";
import TestimonialsSection from "../../components/Testimonial";
import { useLocation } from "react-router-dom";
import CompatibleSection from "../../components/CompatibleSection";
import Projects from "../Projects.jsx";

const services = [
  {
    image: "/service-vector/webDev.webp",
    title: "Web Development",
    description:
      "Don't keep your website as a digital business card but your hardest-working employee.",
    link: "web-designing/",
  },
  {
    image:  "/service-vector/seo.webp",
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost website visibility, drive organic traffic, and rank higher on search engine results pages.",
    link: "search-engine-optimization/",
  },
  {
    image:  "/service-vector/graphic.webp",
    title: "Graphic & Logo Design",
    description:
      "Your visual identity speaks before you do. Our design team creates:",
    link: "graphic-design/",
  },
  {
    image:  "/service-vector/brading.webp",
    title: "Branding",
    description:
      "If you want them even more minimal, more professional, or more punchy, just tell me the vibe you want.",
    link: "branding/",
  },
  {
    image:   "/service-vector/socialMedia.webp",
    title: "Social Media Marketing ",
    description:
      "Social Media Marketing boosts brand visibility, engagement, and sales through targeted strategies.",
    link: "social-media-marketing/",
  },

  {
    image:  "/service-vector/videoPro.webp",
    title: "Video production",
    description:
      "Video production that brings your story to life with powerful visuals.",
    link: "video-production/",
  },
  // Add more services here
];

 
const projectsPerPage = 2;

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>DigifyAmerica - Home</title>
        <meta
          name="description"
          content="Digital marketing, branding, and web 
        development services in the USA. 
        Boost your business with Digify America."
        />
      </Helmet>
      <div className="bg-[#fff]">
        <section className="relative  w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            // poster="/images/hero-thumbnail.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlay (NO BLUR) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 mt- text-center text-white">
            <h1 className="text-3xl fontplayfair  sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Turn your <span className="text-[#1a9dc7]">vacation rental</span>{" "}
              into a <br />
              <span className="text-[#1a9dc7]">direct booking machine</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-gray-200">
              We help vacation rental owners increase bookings, reduce OTA
              commissions, and build a brand guests choose directly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to={"/contact/"}>
                <button className="bg-[#456882] hover:bg-[#36576c] px-6 py-3 rounded-xl text-white cursor-pointer font-semibold transition">
                  Get Free Booking Audit
                </button>
              </Link>
              {/* <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                See How It Works
              </button> */}
            </div>
          </div>
        </section>

        {/* <ProblemSection /> */}
        {/* <SolutionSection /> */}
        {/* <ProcessSection /> */}

        <section className="bg-[#fff] py-0 text-[#1B3C53] text-center px-4 ">
          {/* Text Content */}
          <div className="max-w-3x2   py-20">
            <h2 className="text-[28px]  font-semibold sm:text-3xl md:text-5xl  mb-4 fontplayfair">
              Ready to stop relying on OTAs? <br />
              {/* <span className=" font-sans font-semibold sm:text-3xl md:text-4xl">(or inside one tent)</span> */}
            </h2>
            <p className="text-2xl sm:text-[25px] font-[400] mb-6 opacity-[0.8]">
              Get a free audit of your current marketing and discover how many
              bookings you’re leaving on the table.
            </p>
            <HashLink
              to="/contact/"
              className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg 
             shadow-[0_4px_0px_#456882] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#1B3C53] 
             active:translate-y-[2px] active:shadow-none"
            >
              Book your free audit
            </HashLink>
          </div>

          {/* Image */}
          {/* <div className="flex justify-center">
        <img
          src={ssimg}
          alt="Device showcase"
          className="w-[141]  h-[797] max-w-2xl "
        />
      </div> */}
        </section>
        <section className="relative bg-[#fff] px-4 md:px-8 overflow-hidden">
          <div className="relative text-center ">
            {/* <p className="uppercase tracking-[4px] text-[#1B3C53] text-sm md:text-lg font-semibold relative z-10">
              WHY CHOOSE US
            </p> */}

            {/* Background Text */}
            <h2
              className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  fontplayfair
  font-bold
  uppercase
  whitespace-nowrap
  text-[4rem]
  md:text-[8rem]
  lg:text-[7rem]
  pointer-events-none
  select-none
  text-[#222]
  opacity-6
  tracking-[0.15em]
  "
            >
              WHY CHOOSE US
            </h2>

            {/* Main Heading */}
            <h3 className="relative z-10 mt-10 text-[32px] md:text-[55px] leading-tight fontplayfair text-[#1B3C53]">
              Beyond A Regular Marketing Plan
            </h3>
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto max-w-7xl pt-32 md:pt-25 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1 text-[#234C6A]">
                {/* <div className="w-20 h-1 bg-[#1B3C53] mt-1 mb-8"></div> */}

                <p className="text-lg leading-8 text-[#234C6A]">
                  In a world where everyone claims to be
                  <span className="font-semibold text-[#1B3C53]">
                    {" "}
                    innovative{" "}
                  </span>
                  and
                  <span className="font-semibold text-[#1B3C53]">
                    {" "}
                    cutting-edge,
                  </span>
                  what truly sets Digify America apart is not just what we do,
                  but how we do it.
                </p>

                <div className="mt-5">
                  <h4 className="text-2xl font-semibold fontplayfair mb-6 text-[#1B3C53]">
                    Customization At Our Core
                  </h4>

                  <p className="leading-8 mb-1">
                    Every business has unique goals and challenges. That's why
                    we reject cookie-cutter marketing solutions and build
                    strategies tailored specifically for your growth.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-[#1B3C53] font-bold">✓</span>
                      <span>
                        <strong>We start from scratch:</strong> Every strategy
                        begins with a blank canvas, not a recycled template.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#1B3C53] font-bold">✓</span>
                      <span>
                        <strong>We immerse ourselves:</strong> Understanding
                        your business becomes our obsession.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#1B3C53] font-bold">✓</span>
                      <span>
                        <strong>We build for your audience:</strong> Solutions
                        designed specifically for the people you need to reach.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#1B3C53] font-bold">✓</span>
                      <span>
                        <strong>We align with your goals:</strong> KPIs that
                        match your business objectives, not vanity metrics.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="/service-vector/hand-drawn-digital-natives-illustration.webp"
                    alt="Why Choose Us"
                    loading="lazy"
                    className="
              w-full
              rounded-[30px]
               mt-10
              object-cover
            "
                  />

                  {/* Decorative Box */}
                  <div
                    className="
              hidden lg:block
              absolute
              -bottom-6
              -left-6
              w-32
              h-32
              border-4
              border-[#1B3C53]
              rounded-2xl
            "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DirectbookingIcons />

        <section className="relative py-1 px-4  overflow-hidden">
          {/* Heading */}
          <div className="relative text-center mb-20">
            {/* Small Label */}
            {/* <p className="uppercase tracking-[4px] text-[#1B3C53] text-sm md:text-lg font-semibold relative z-10">
      WHAT WE OFFER
    </p> */}

            {/* Background Text */}
            <h2
              className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  fontplayfair
  font-bold
  uppercase
  whitespace-nowrap
  text-[4rem]
  md:text-[8rem]
   lg:text-[6.50rem]
  pointer-events-none
  select-none
  text-[#222]
  opacity-6
  tracking-[0.15em]
  "
            >
              SERVICES
            </h2>

            {/* Main Heading */}
            <h5 className="relative z-10 text-[32px] md:text-[60px] font-[300] fontplayfair text-[#1B3C53] mt-4">
              Our Services
            </h5>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link key={service.title} to={service.link}>
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

       
   <Projects />
 
      </div>

      <TestimonialsSection />
      <CompatibleSection />
    </>
  );
}

export default Home;

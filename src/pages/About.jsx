import React from "react";
import { Helmet } from "react-helmet-async";
import { Eye, Target } from "lucide-react";

import founderImage from "../assets/Owner/Image.jpeg";

import { useState } from "react";
import PartnerSection from "../components/partnerSection";
import TestimonialsSection from "../components/Testimonial";

const testimonials = [
  {
    text: "DigifyAmerica completely transformed our online presence! We were struggling to get noticed, but their team developed a comprehensive strategy that delivered real results. Our website traffic has skyrocketed, and we've seen a significant increase in leads. Highly recommend their professional and knowledgeable team!",
    author: "Sarah M., Austin, TX",
    //     role: "Marketing Director",
    //     image: "/images/person1.jpg",
  },
  {
    text: "We hired DigifyAmerica for their SEO services, and it was one of the best decisions we've made. They were meticulous, transparent, and we started seeing our search rankings climb within just a few months. The communication was excellent, and they explained everything in a way that was easy to understand. A true partner in our business growth.",
    author: "David P., Los Angeles, CA",
    //     role: "Greybeard Realty",
    //     image: "/images/person2.jpg",
  },
  {
    text: "Kevin has been amazing to work with. He didn’t just throw big marketing terms at us — he actually explained what needed to be done in simple language. We started seeing more calls and inquiries within weeks. Super reliable and easy to talk to.",
    author: "Maria R., New York, NY",
    //     role: "Harborview Realty",
    //     image: "/images/person3.jpg",
  },
  {
    text: "I can't say enough good things about DigifyAmerica's PPC expertise. Our ad spend was generating very little return before we started working with them. They optimized our campaigns, and now we're seeing an incredible return on investment. The team is data-driven and genuinely committed to our success. A fantastic partner!",
    author: "Kevin J., Chicago, IL",
    //     role: "Harborview Realty",
    //     image: "/images/person3.jpg",
  },
  {
    text: "Roger really knows his stuff when it comes to SEO. He spotted things on our website we never noticed, fixed them, and our Google ranking went up in just a couple of months. He checks in regularly, which makes us feel like he actually cares about our business.",
    author: "Jessica L., Miami, FL",
    //     role: "Harborview Realty",
    //     image: "/images/person3.jpg",
  },
  {
    text: "Mike really turned around our social media. He has a great eye for what works with our audience and our engagement has gone way up. He also checks in often so we always know what’s going on.",
    author: "Brian S., Seattle, WA",
    //     role: "Harborview Realty",
    //     image: "/images/person3.jpg",
  },
];
const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <title>About Us - Digify America</title>
      <meta
        name="description"
        content="Learn more about Digify America's mission, vision and services we provide to help businesses grow online."
      />
      <div className="bg-[#fff]">
        <section className=" px-4 md:px-8 pt-20">
          <div className="container mx-auto max-w-7xl pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-1 lg:order-1 relative w-full lg:w-auto">
                <img
                  loading="lazy"
                  src="/service-vector/digital-growth.webp"
                  alt=""
                  className="w-[100vh] h-auto mt-8 rounded-lg   object-cover"
                />
              </div>

              {/* This is the text div.
        It now has the order-2 class for all screens and lg:order-2 to keep it on the right.
      */}
              <div className="order-2 lg:order-2 text-center lg:text-left text-[#234C6A]">
                <h1 className="text-[29px] md:text-[50px]  text-[#1B3C53] fontplayfair">
                  Your digital growth partner
                </h1>
                <strong className="font-[500] text-2xl Poppins-font">
                  Our Story
                </strong>

                <p className="">
                  Headquartered in sunny Florida but digitally present
                  everywhere, Digify America have built reputation by treating
                  clients' growth as primary mission. What drives us is seeing
                  businesses transform through strategic digital presence. Our
                  leadership team built Digify America because we saw too many
                  companies getting generic solutions that looked pretty but
                  failed to deliver results.{" "}
                </p>
                <strong className="font-[500] text-2xl Poppins-font">
                  Our Team
                </strong>
                <p className="">
                  Behind every successful Digify project stands a diverse team
                  of specialists who combine deep technical knowledge with
                  creative vision:{" "}
                </p>
                <ul className="list-disc ml-10">
                  <li>
                    <strong className="font-[500] Poppins-font">
                      Digital Strategists:{" "}
                    </strong>
                    The big-picture thinkers who map your journey from where you
                    are to where you want to be
                  </li>
                  <li>
                    <strong className="font-[500] Poppins-font">
                      UX/UI Designers:{" "}
                    </strong>
                    Experience architects who create intuitive, engaging digital
                    environments
                  </li>
                  <li>
                    <strong className="font-[500] Poppins-font">
                      Full-Stack Developers:{" "}
                    </strong>
                    Code craftspeople who build robust, scalable technical
                    solutions
                  </li>
                  <li>
                    <strong className="font-[500] Poppins-font">
                      Content Creators:
                    </strong>
                    Storytellers who understand that words and images need to
                    work as hard as your website
                  </li>
                  <li>
                    <strong className="font-[500] Poppins-font">
                      SEO Specialists:{" "}
                    </strong>
                    Search experts, who know how to make it easy to find your
                    brand.
                  </li>
                  <li>
                    <strong className="font-[500] Poppins-font">
                      Analytics Pros:
                    </strong>
                    Data interpreters who translate numbers into actionable
                    insights What unites us is a shared passion for solving
                    problems. We are the people who get excited about conversion
                    rates, user flows, and elegant code and these elements
                    translate directly to your business success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-4 md:px-8 pt-20">
          <div className="container mx-auto max-w-7xl pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 text-center lg:text-left text-[#234C6A]">
                <h2 className="text-[29px] md:text-[50px] text-[#1B3C53] fontplayfair leading-tight">
                  Founder - Roger Brown
                  {/* <span className="block text-sm md:text-md text-[#456882] font-normal ml-[413px] -mt-3">
                    ( aka Sourabh Singh )
                  </span> */}
                </h2>
                <p className="text-lg  mb-8">
                  With 9+ years of experience as the Founder of Digify America,
                  a Florida-based internet marketing agency, I am dedicated to
                  helping businesses achieve their potential through innovative
                  marketing solutions. My work emphasizes service delivery and
                  team management, reflecting a commitment to empowering
                  businesses in adapting to evolving market landscapes.
                </p>
                <p className="text-lg  mb-8">
                  As a Vacation Rentals Inventory Specialist at{" "}
                  <a href="https://www.emeraldcoastbyowner.com/">
                    EmeraldCoastByOwner.com
                  </a>{" "}
                  ,
                  <a href="https://www.destinflorida.com/">DestinFlorida.com</a>{" "}
                  , and <a href="https://smokymountainsbyowners.com/">SmokyMountainsByOwners.com</a>  for over 7.5 years, I
                  contribute to connecting vacation rental owners and managers
                  with guests in top travel destinations. My expertise in
                  service delivery and team management aligns with the mission
                  to enhance guest and owner experiences in the vacation rental
                  space.
                </p>
                <a
                  href="https://www.linkedin.com/in/roger-brown-48390b14/"
                  className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg mr-20
             shadow-[0_4px_0px_#456882] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#fff] 
             active:translate-y-[2px] active:shadow-none"
                >
                  Know More
                </a>
              </div>

              <div className="order-1 lg:order-2 relative w-full lg:w-auto">
                <img
                  loading="lazy"
                  src={founderImage}
                  alt="Founder Roger Brown"
                  className="w-[70vh] h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className=" py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card */}
              <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                  <Eye className="h-10 w-10 text-[#1c75bc]" />
                </div>
                <h3 className="text-2xl md:text-3xl Poppins-font font-[300] text-white mb-4 text-center ">
                  Our Vision
                </h3>
                <p className="text-white text-center">
                  To be the leading digital marketing agency, empowering
                  businesses to achieve extraordinary growth in the digital
                  world.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                  {/* Mission Icon (Target) */}
                  <Target className="h-10 w-10 text-[#1c75bc]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-[300] Poppins-font text-white mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-white text-center">
                  Our mission is to craft innovative and data-driven digital
                  strategies that connect your brand with the right audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TestimonialsSection />
        {/* <p
          className="
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.7rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[11rem] 
"
        >
          Our partners
        </p>
        <PartnerSection /> */}
      </div>
    </>
  );
};

export default About;

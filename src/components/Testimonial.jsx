import React from 'react';
import { Helmet } from "react-helmet-async"; 


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
import PartnerSection from '../components/partnerSection';


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
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
     
      <div className='bg-[#D2C1B6]'>
      
        
        <p className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.4rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[9rem] 
'>
          Our Testimonial
        </p>
        <div className="w-full py-22  pt-45">
          <h3 className='text-center  text-[25px] md:text-[60px] font-[300] mx-1 fontplayfair whitespace-nowrap text-[#1B3C53]'>Hear From Those Who Trust Us</h3>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={40}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full max-w-8xl mx-auto"
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <SwiperSlide
                  key={idx}
                  className={`max-w-md px-6 py-8 rounded-lg shadow-md relative flex flex-col items-center text-center transition-all duration-300 ${isActive
                      ? 'bg-[#234C6A] text-[#fff]'
                      : 'bg-[#456882] text-[#fff]'
                    }`}
                  style={{ height: 'auto' }}
                >
                  <p className="text-lg leading-relaxed mb-4">“{item.text}”</p>
                  <div className="mt-6">
                    {/* <img
                    //   src={item.image}
                      alt={item.author}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    /> */}
                    <h4 className={`font-semibold ${!isActive ? 'text-white' : 'text-[#fff]'}`}>
                      {item.author}
                    </h4>
                    <p className={`text-sm ${!isActive ? 'text-gray-400' : 'text-blue-100'}`}>
                      {item.role}
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6  rotate-45"></div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6 text-center"></div>
        </div>

        
      </div>
    </>
  );
};

export default TestimonialsSection;
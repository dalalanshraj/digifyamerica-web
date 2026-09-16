import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Digifyamerica is a professional company with excellent customer service and a highly skilled staff. Their prices are fair and their websites are topnotch. I highly recommend this company.",
    title: "Digifyamerica is a professional company…",
    author: "Gail",
  },
  {
    text: "Quick and easy website with easy additions. DigifyAmerica was seamless to work with. They got the website up and going quickly and were quick to help with changes.",
    title: "Quick and easy website with easy additions",
    author: "DeWanna Jackson",
  },
  {
    text: "Kevin is great to work with.  He created a great website for my condo rental business and is currently working on my social media presence.  ",
    title: "Kevin is great to work with",
    author: "Gloria Thomas",
  },
  {
    text: "Digifyamerica, has exceeded my expectations.Very easy to work with. Roger Brown was my direct contact on this project and was very helpful. I have already recommended them to my friends and colleagues. How skillfully and patiently they handled my not so easy project was remarkable. I highly recommend them.",
    title: "Digifyamerica great people to work with",
    author: "SUKAINA",
  },
  {
    text: "Went with DigifyAmerica.com for my website they were recommended to me by another friend. I have been very please with Kevin & the rest of the team they have done a wonderful job if I need anything I just give them a call and they are happy to help. Thank you DigifyAmerica.com",
    title: "Went with DigifyAmerica.com",
    author: "Ann Phillips",
  },
  {
    text: "I am very technically challenged. I have 15 properties on Emerald Coast by Owner. Roger, who I have dealt with for years on that site, approached me with the idea of a website of my own to advertise my short term rentals in Destin and Miramar Beach, FL. The price was really nominal compared to what I would get, so I agreed to have Digifyamerica build me a website. It turned out great! Very happy with it, and I am getting bookings from it! Donna Daniel",
    title: "Perfect for Small Time Property Managers!",
    author: "Donna Daniel",
  },
  {
    text: "I couldn’t be happier with the website that Digify America created for my short-term vacation rental business. Gerry, Kevin, and the entire team took the time to understand my vision and transformed it into a professional, modern, and user-friendly website that perfectly showcases both of my Panama City Beach vacation rental properties.Their attention to detail, creativity, and technical expertise were evident throughout the entire process. They were responsive, easy to work with, and always willing to answer questions or make adjustments to ensure everything was exactly the way I wanted it.The finished website not only looks fantastic but is also optimized for performance and makes it easy for potential guests to learn about our properties and book their stay. Since launching, I’ve received numerous compliments on the design and functionality of the site.If you’re looking for a company that genuinely cares about your success and delivers high-quality work, I highly recommend Digify America. Thank you, Gerry, Kevin, and the entire team, for your outstanding service and for helping bring Gulf Life’s a Beach to life online. I look forward to working with you again on future projects!",
    title: " Outstanding Experience with Digify America!",
    author: "Bill Roberson",
  },
  {
    text: "I had a great experience working with Digify America on designing the website for my beach properties. Jerry was especially helpful throughout the entire process. He was knowledgeable, responsive, and easy to work with, making sure my ideas were incorporated into a professional and attractive website. I appreciate his patience and attention to detail, and I'm very pleased with the final result. I highly recommend Digify America to anyone looking for quality web design services.",
    title: "I had a great experience working with…",
    author: "Mark",
  },
  // {
  //   text: "Mike transformed our social media presence. Engagement increased dramatically and communication is always excellent.",
  //   author: "Brian S.",
  // },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#fff] py-24">
      {/* Background Text */}
      <h2
        className="
          absolute
          top-15
          left-1/2
          -translate-x-1/2
          uppercase
          fontplayfair
          font-bold
          text-[#222]
          whitespace-nowrap
          text-[3rem]
          md:text-[8rem]
          lg:text-[8rem]
          opacity-6
          pointer-events-none
          select-none
        "
      >
        Testimonials
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* <span className="block text-center uppercase tracking-[4px] text-[#1B3C53] font-medium">
          Client Feedback
        </span> */}

        <h3 className="text-center text-[#1B3C53] fontplayfair text-[36px] md:text-[60px] font-light mt-4 mb-16">
          Hear From Those Who Trust Us
        </h3>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          autoHeight={false}
          loop={true}
          grabCursor={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <SwiperSlide key={idx} className="py-10 h-auto flex">
                <div
                  className={`
    h-[500px]
    rounded-[32px]
    p-8
    border
    backdrop-blur-lg
    transition-all
    duration-500
    flex
    flex-col
    ${
      isActive
        ? "bg-[#1B3C53] text-white scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-white/20"
        : "bg-[#456882] text-white/90 border-white/10"
    }
  `}
                >
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="text-6xl text-white/20 leading-none mb-6">
                      ❝
                    </div>

                    <p className="text-[21px] leading-8 font-bold text-[#FFF5E1] text-center">
                      {item.title}
                    </p>
                    <p className="text-[17px] leading-8 font-light">
                      {item.text}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-center gap-1 mb-5 mt-8">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-semibold">{item.author}</h4>

                      <div className="w-12 h-[2px] bg-white/40 mx-auto mt-3"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style>
        {`
          .swiper-pagination {
            margin-top: 30px;
            position: relative;
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #1B3C53;
            opacity: 0.4;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;

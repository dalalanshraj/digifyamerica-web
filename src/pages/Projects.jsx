import React from "react";
import { Helmet } from "react-helmet-async";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Pagination module is removed
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// 'swiper/css/pagination' is removed

const projects = [
  {
    title: "Coastal Dream Rentals",
    link: "https://www.coastaldreamrentals.com/",
    // tag: 'Villa Rental Website',
    image:  "/project-img/project1.webp",
    alt: "Coastal Dream Rentals Website",
  },
  {
    title: "Best in PCB Rental",
    link: "https://bestinpcbrentals.com/",
    // tag: 'Villa Rental Website',
    image: "/project-img/project10.webp",
    alt: "Best in PCB Rental",
  },
  {
    title: "Calypso 401 ",
    link: "https://calypso401.com/",
    // tag: 'Villa Rental Website',
    image: "/project-img/project11.webp",
    alt: "Calypso 401",
  },
  {
    title: "30a Nick of times",
    link: "https://30anickoftime.com/",
    // tag: 'Villa Rental Website',
    image: "/project-img/project12.webp",
    alt: "30a Nick of times",
  },
  {
    title: "Beach Therapy 30a",
    link: "https://beachtherapy30a.com/",
    // tag: 'Villa Rental Website',
    image: "/project-img/project13.webp",
    alt: "Beach Therapy 30a",
  },
  {
    image:  "/project-img/project4.webp",
    title: "Florida Panhandle Beach",
    link: "https://floridapanhandlebeachescape.com/",
    // tag: 'Single Villa Website',
    alt: "New Villa 3 Website",
  },
  {
    image: "/project-img/project14.webp",
    title: "Villa 1",
    link: "https://template1.mydesign.blog/",
    // tag: 'Single Villa Website',
    alt: "New Villa 1 Website",
  },

  // {
  //   image: templateOne,
  //   title: "Villa Three",
  //   link: "https://template1.mycreativewebsite.com/",
  //   // tag: 'Villa Rental Website',
  //   alt: "template1 Website",
  // },
  // {
  //   image: templateTwo,
  //   title: "Villa four",
  //   link: "https://template2.mycreativewebsite.com/",
  //   // tag: 'Villa Rental Website',
  //   alt: "My Sawgrass Pointe Website",
  // },
  // {
  //   image: newvillaTwo,
  //   title: "Villa Five",
  //   link: "https://newvilla2.mydesign.blog/",
  //   // tag: 'Single Villa Website',
  //   alt: "My Sawgrass Pointe Website",
  // },
  // {
  //   image: newvilla,
  //   title: "Villa Six",
  //   link: "https://newvilla8.mydesign.blog/",
  //   // tag: 'Single Villa Website',
  //   alt: "Beach Property",
  // },
  // {
  //   image: landscapers,
  //   title: "Villa Seven",
  //   link: "https://landscapers.mydesign.blog/",
  //   // tag: 'Single Villa Website',
  //   alt: "Landscapers",
  // },
];

const Projects = () => {
  return (
    <div id="case" className="py-20 text-white ">
      <div className="relative text-center mb-20" id="projects">
        {/* Small Label */}
        {/* <p className="uppercase tracking-[4px] text-[#1B3C53] text-sm md:text-lg font-semibold relative z-10">
    OUR PORTFOLIO
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
          PROJECTS
        </h2>

        {/* Main Heading */}
        <h6 className="relative z-10 text-[32px] md:text-[60px] font-[300] fontplayfair text-[#1B3C53] mt-4">
          My Projects
        </h6>
      </div>
      <div className="container mx-auto px-4 mt-5">
        {/* <h6 className=" relative text-center pt-29 text-[60px] font-[300] mx-1 fontplayfair text-[#1B3C53] whitespace-nowrap">
          My Projects
        </h6> */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16">
          {/* Title Section (unchanged) */}
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
        autoplay={{
    delay: 4000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
}}
          navigation={true}
          // Pagination prop and module have been removed
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="project-card bg-[#234C6A] p-6 rounded-2xl border border-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg- hover:shadow-xl">
                  <div className="text-3xl font-bold mb-2 text-white">
                    {project.title}
                  </div>
                  <div className="text-lg text-white mb-2">{project.tag}</div>
                  {/* <p className="text-[#fff] text-[20px] mb-4 truncate">{project.link}</p> */}
                  <div className="overflow-hidden rounded-xl">
                    <LazyLoadImage
                      src={project.image}
                      alt={project.alt}
                      effect="blur"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[250px] md:h-[300px] lg:h-[250px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;

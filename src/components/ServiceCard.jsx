import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group relative bg-[#234C6A] p-6 rounded-lg shadow-md mx-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 rounded-lg bg-[#FFF5E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center">
        <LazyLoadImage
          src={image}
          alt={title}
          effect="blur"
          loading="lazy"
          decoding="async"
          className="w-64 h-64 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-4 text-2xl font-semibold text-center text-white group-hover:text-black">
          {title}
        </h3>

        <p className="mt-3 text-center text-lg text-white group-hover:text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
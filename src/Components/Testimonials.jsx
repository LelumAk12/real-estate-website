import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 px-6 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[280px] lg:w-[300px] border shadow-md rounded-lg px-6 py-10 text-center bg-white"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-3">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

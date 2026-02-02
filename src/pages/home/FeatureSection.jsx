import React from "react";

const FeatureSection = ({ data }) => {
  return (
    <div className="px-1 space-y-3 md:px-2 lg:px-4 py-3 md:py-6 lg:py-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex space-x-3.5 flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-15 bg-gray-50 shadow-lg  rounded-xl p-6"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={item.logo}
              alt={item.title}
              className="w-40 h-40 object-contain "
            />
          </div>

          {/* Divider (only desktop) */}
          <div className="hidden md:block h-24 border-l-2 border-dashed border-gray-300"></div>

          {/* Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#03373D] mb-2">
              {item.title}
            </h2>
            <p className="text-[#606060] text-sm md:text-md lg:text-lg font-medium leading-relaxed">
              {item.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;

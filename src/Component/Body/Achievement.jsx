import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import AutoPlay from "./Autoplay";
import { Link, useParams } from "react-router-dom";

const Achievement = ({ data }) => {
  const [visibleTab, setVisibleTab] = useState(0);
  const { id } = useParams();
  const ugid = data[id];
  return (
    <div className="bg-[#FFB7334D] py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
        {/* Left Section - Achievements */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            <span className="font-extrabold text-[#005CB9] mr-2">|</span>
            RECENT ACHIEVEMENTS
          </h2>
          <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg border-2 border-black bg-[#D9D9D9] overflow-hidden">
            <AutoPlay />
          </div>
        </div>

        {/* Right Section - Study */}
        <div className="w-full lg:w-1/2">
          {/* Header with Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-[#005CB9] mr-2">|</span>
              STUDY @ DSEU
            </h2>
            <button className="bg-[#005CB9] px-6 py-2 text-white text-sm md:text-base rounded-md hover:bg-[#004a94] transition-colors w-full sm:w-auto">
              VIEW ALL PROGRAMMES
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-start md:justify-around gap-4 font-semibold mb-8">
            {data?.map((tab, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md text-sm md:text-base transition-all ${
                  visibleTab === index
                    ? "underline underline-offset-4 text-[#FF9300]"
                    : "text-black hover:text-[#FF9300]"
                }`}
                onClick={() => setVisibleTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          {data?.[visibleTab]?.content && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {data[visibleTab].content.map((item, index) => (
                <Link
                  key={index}
                  to={`/UG/${item.course}`}
                  className="bg-[#D9D9D9] p-4 h-24 rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  {typeof item === 'object' ? item.course : item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
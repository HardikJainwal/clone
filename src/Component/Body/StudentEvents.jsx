import React from 'react';
import { useState, useEffect } from 'react';

const EventsAndActivities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Import images from assets directory
  const images = import.meta.glob('../../assets/CampusEvents/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  });

  // Convert images object to array and get URLs
  const imageUrls = Object.values(images);

  // Use first 3 images for carousel
  const carouselImages = imageUrls.slice(0, 3);
  
  // Use next 4 images for grid
  const gridImages = imageUrls.slice(3, 7);

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-l-4 border-blue-800 pl-3">
            STUDENT EVENTS & ACTIVITIES
          </h2>
          <div className="relative overflow-hidden rounded-lg h-80">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-l-4 border-blue-800 pl-3">
            VOICE OF DSEU
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {gridImages.map((img, index) => (
              <button
                key={index}
                className="relative overflow-hidden rounded-lg group h-39"
                onClick={() => console.log(`Clicked image ${index + 1}`)}
              >
                <img
                  src={img}
                  alt={`Grid image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndActivities;
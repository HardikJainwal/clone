import React from 'react';
import { ExternalLink } from 'lucide-react';

const AnnouncementStrip = () => {
  const announcements = [
    {
      text: "Click here for e-Library Software (for DSEU Faculty Members)",
      link: "#"
    },
    {
      text: "UGC Guidelines on Anti-Ragging",
      link: "#"
    }
  ];

  return (
    <div className="bg-white border-y border-gray-200">
      <div className="h-8 flex items-center overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-flex items-center absolute">
          {[...Array(2)].map((_, duplicateIndex) => (
            <div key={duplicateIndex} className="inline-flex items-center">
              {announcements.map((announcement, index) => (
                <a
                  key={index}
                  href={announcement.link}
                  className="flex items-center hover:text-blue-800 transition-colors mx-4 text-blue-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>{announcement.text}</span>
                  {index !== announcements.length - 1 && (
                    <span className="mx-4 text-gray-400">|</span>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const style = `
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-marquee {
    animation: marquee 30s linear infinite;
  }

  /* Pause animation on hover */
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;

export default () => (
  <>
    <style>{style}</style>
    <AnnouncementStrip />
  </>
);

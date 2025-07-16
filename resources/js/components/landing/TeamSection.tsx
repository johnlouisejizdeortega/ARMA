import React from 'react';
import { Link } from '@inertiajs/react';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative z-20 py-24 w-full min-h-[80vh]">
      {/* Background video - looped, muted, covers section */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        src="/videos/4779866-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 h-full flex flex-col justify-center">
        <div className="my-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 uppercase">
              <span className="text-white">MEET THE </span>
              <span className="text-[#00A0E9]">TEAM</span>
            </h2>
            <p className="text-gray-200 mx-auto text-lg max-w-xl">
              "You hire a lawyer for a case. I assembled a team like this for when your entire business is on the line." - Rajat Sharma, Managing Partner
            </p>
          </div>

          <div className="min-h-[200px]"></div>

          <div className="flex justify-center mt-8">
            <Link 
              href="/team"
              className="bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2.5 px-7 rounded text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00A0E9]/30"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
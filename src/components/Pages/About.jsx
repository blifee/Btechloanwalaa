import React from "react";

const Timeline = () => {
  const events = [
    { year: "1991", description: "Started Operation. Largely Mumbai Focused.", icon: "🏙️" },
    { year: "2007", description: "Made a Move to a Multi-Bank Platform", icon: "🏦" },
    { year: "2010", description: "Expanded our operations outside of Mumbai as well", icon: "📈" },
    { year: "2012", description: "Reached 100+ cities", icon: "🌆" },
    { year: "2015", description: "25,000+ channel partners onboarded", icon: "🤝" },
    { year: "2020", description: "Digitally empowered distribution network", icon: "💻" },
  ];

  return (
    <div  data-aos="flip-right" className="bg-sky-400 text-white py-16">
      <h2 className="text-2xl font-bold text-center mb-10">Moments to Remember</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>

        {events.map((event, index) => (
          <div key={index} className="mb-10 flex flex-col md:flex-row items-center justify-between relative">
            {/* Left side */}
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-5/12 text-right pr-6">
                  <div className="inline-block bg-white text-blue-600 rounded-full p-3 text-2xl shadow-md">
                    {event.icon}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-xl font-bold">{event.year}</h2>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
                <div className="w-0 md:w-2/12 flex justify-center relative z-10">
                  <div className="w-6 h-6 bg-white border-4 border-sky-400 rounded-full"></div>
                </div>
                <div className="w-5/12 hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="w-5/12 hidden md:block"></div>
                <div className="w-0 md:w-2/12 flex justify-center relative z-10">
                  <div className="w-6 h-6 bg-white border-4 border-sky-400 rounded-full"></div>
                </div>
                <div className="w-full md:w-5/12 text-left pl-6">
                  <div className="inline-block bg-white text-blue-600 rounded-full p-3 text-2xl shadow-md">
                    {event.icon}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-xl font-bold">{event.year}</h2>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

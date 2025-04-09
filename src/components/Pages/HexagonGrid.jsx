import React from "react";

const hexagons = [
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-26.svg", title: "Best-in-class & Prompt Payouts" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-29.svg", title: "Multiple Products" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-22.svg", title: "Instant Approvals" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-21.svg", title: "Zero Investment" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-27.svg", title: "Lifetime Value" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-24.svg", title: "Unified Dashboard" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-30.svg", title: "Secure Data" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-25.svg", title: "Excellent Customer Support" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-20.svg", title: "Rewards & Loyalty" },
  { img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Mask-Group-28.svg", title: "Training Programs" },
];

const HexagonGrid = () => {
  return (
    <section data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"className="bg-blue-500 py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">The B-Tech Lonwala's Edge</h2>
        <img src="/src/assets/Line.svg" alt="Line"
    className="mx-auto mt-0.5 w-40" // Adjust width as needed
  /><br />
        <p className="text-lg text-white mb-12">Multiple Advantages. One Platform.</p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {hexagons.map((hex, index) => (
            <div
              key={index}
              className="relative w-32 h-36 bg-white rounded-lg shadow-md flex flex-col items-center p-4"
              style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            >
              <img src={hex.img} alt={hex.title} className="w-12 h-12 mb-2" />
              <p className="text-xs font-semibold">{hex.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HexagonGrid;

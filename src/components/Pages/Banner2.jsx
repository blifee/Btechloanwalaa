import React, { useState } from "react";

const brands = [
  { name: "Kotak", img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/kotak.png" },
  { name: "IDFC First", img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/IDFC-FIRST.png" },
  { name: "Aditya Birla", img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/ADITYA-BIRLA-CAPITAL-e1660310165487.jpg" },
  { name: "TATA Housing", img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/TATA-HOUSING.png" },
  { name: "TATA Capital", img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/TATA-CAPITAL.png" },
  { name: "Oswal", img: "https://www.andromedaloans.com/wp-content/uploads/2025/02/oswal-logo-1.png" },
  { name: "Aditya Updated", img: "https://www.andromedaloans.com/wp-content/uploads/2025/02/aditya-upodated.png" },
  { name: "DCB", img: "https://www.andromedaloans.com/wp-content/uploads/2025/03/dcb.png" },
];

const BrandsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
      <h2
  className="text-2xl md:text-3xl font-bold mb-4"
  style={{ color: "#0F63AC" }}
>
  Brands who Trust Us
</h2>

        <img
    src="/src/assets/Line.svg"
    alt="Line"
    className="mx-auto mt-2 w-40" // Adjust width as needed
  />
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          We are amongst the top 3 most-preferred channel partners for loans for India's widest network of Banks, NBFCs, and Fintech.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.slice(0, showAll ? brands.length : 4).map((brand, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={brand.img} alt={brand.name} className="h-16 md:h-24 object-contain" />
            </div>
          ))}
        </div>
        <button
          className="mt-6 px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "SHOW LESS" : "VIEW ALL"}
        </button>
      </div>
    </section>
  );
};

export default BrandsSection;

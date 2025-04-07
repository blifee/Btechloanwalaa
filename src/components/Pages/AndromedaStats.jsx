import React from "react";
import CountUp from "react-countup";
import "./AndromedaStats.css";

const stats = [
  { icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/city.svg", label: "Cities", value: 100, suffix: "+" },
  { icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/branches.svg", label: "Branches", value: 122 },
  { icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/employees.svg", label: "Employees", value: 4000, suffix: "+" },
  { icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/partners.svg", label: "Financial Advisors", value: 25000, suffix: "+" },
  { icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/lenders.svg", label: "Lending Partners", value: 122, suffix: "+" },
];

export default function AndromedaStats() {
  return (
    <div className="container">
      <h2 className="title">The Story Of B-Tech Loanwala In Numbers.</h2>
      <img
    src="/src/assets/Line.svg"
    alt="Line"
    className="mx-auto mt-2 w-40" // Adjust width as needed
  />
      <p className="subtitle">Over Rs. 75,000 CR loans disbursed annually.</p>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <img 
              src={stat.icon} 
              alt={stat.label} 
              className="icon" 
              style={stat.label === "Cities" ? { marginLeft: "75px" } : {}} 
            />
            <p className="label">{stat.label}</p>
            <p className="value">
              <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix={stat.suffix || ""} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

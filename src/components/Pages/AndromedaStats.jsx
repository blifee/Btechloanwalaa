import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // 👈
import "./AndromedaStats.css";

const stats = [
  {
    icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/city.svg",
    label: "Cities",
    value: 100,
    suffix: "+",
  },
  {
    icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/branches.svg",
    label: "Branches",
    value: 122,
  },
  {
    icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/employees.svg",
    label: "Employees",
    value: 4000,
    suffix: "+",
  },
  {
    icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/partners.svg",
    label: "Financial Advisors",
    value: 25000,
    suffix: "+",
  },
  {
    icon: "https://www.andromedaloans.com/wp-content/uploads/2022/07/lenders.svg",
    label: "Lending Partners",
    value: 122,
    suffix: "+",
  },
];

export default function AndromedaStats() {
  const [ref, inView] = useInView({ triggerOnce: true }); // 👈

  return (
    <div data-aos="flip-up" className="container" ref={ref}>
      <h2 className="title">The Story Of B-Tech Loanwala In Numbers.</h2>
      <img src="/src/assets/Line.svg" alt="Line" className="line" />
      <p className="subtitle">Over Rs. 75,000 CR loans disbursed annually.</p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <img src={stat.icon} alt={stat.label} className="icon" />
            <p className="label">{stat.label}</p>
            <p className="value">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "../ui/Achievements.css";
import { statsData } from "../data/stats";
import Chart from "chart.js/auto";

const hoverOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#1e1e1e",
      titleColor: "#fff",
      bodyColor: "#fff",
      cornerRadius: 6,
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    mode: "nearest",
    intersect: false,
  },
};

const hoverOptionsy = {
  responsive: true,
  indexAxis: "y",
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#1e1e1e",
      titleColor: "#fff",
      bodyColor: "#fff",
      cornerRadius: 6,
      callbacks: {
        label: function (context) {
          return context.raw + "%";
        },
      },
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    mode: "nearest",
    intersect: false,
  },
};

const Achievements = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 10));
  const [hasStarted, setHasStarted] = useState(false);

  const yearChartRef = useRef(null);
  const campusChartRef = useRef(null);
  const companyChartRef = useRef(null);

  {
    /* Counter */
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHasStarted(true),
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) =>
          num < statsData[i].value
            ? Math.min(
                num + Math.ceil(statsData[i].value / 20),
                statsData[i].value,
              )
            : num,
        ),
      );
    }, 50);

    return () => clearInterval(interval);
  }, [hasStarted]);

  {
    /* Graphs */
  }
  useEffect(() => {
    if (!hasStarted) return;

    const yearChart = new Chart(yearChartRef.current, {
      type: "bar",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Offers",
            data: [56, 117, 194, 284, 380, 506],
            backgroundColor: [
              "#5b2a83",
              "#7a57a8",
              "#9a7ec1",
              "#b87aa8",
              "#d28aa7",
              "#ec407a",
            ],
            borderRadius: 8,
          },
        ],
      },
      options: hoverOptions,
    });

    const campusChart = new Chart(campusChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["CS and Related", "Electronics and Related", "Others"],
        datasets: [
          {
            data: [41, 35, 24],
            backgroundColor: ["#ec407a", "#f8bbd0", "#b39ddb"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                return context.raw + "%";
              },
            },
          },
          legend: { position: "bottom" },
        },
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "xy",
        },
      },
    });

    const companyChart = new Chart(companyChartRef.current, {
      type: "bar",
      data: {
        labels: ["Tier 1", "Tier 2", "Tier 3"],
        datasets: [
          {
            label: "Offers",
            data: [21, 36, 43],
            backgroundColor: ["#d28aa7", "#b87aa8", "#ec407a"],
            borderRadius: 6,
          },
        ],
      },
      options: hoverOptionsy,
    });

    return () => {
      yearChart.destroy();
      campusChart.destroy();
      companyChart.destroy();
    };
  }, [hasStarted]);

  return (
    <section className="achievements" ref={sectionRef}>
      <h2 className="ach-title">Know More About Us</h2>
      {/* Counter Section */}
      <div className="stats-grid">
        {statsData.map((item, index) => (
          <div
            className="stat-card"
            key={index}
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <h3>
              {counts[index]}
              {item.suffix}
            </h3>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {/* Alumni Section */}
      <div className="graphs-grid">
        <div className="graph-card">
          <h3>Placement Statistics</h3>
          <canvas ref={yearChartRef}></canvas>
        </div>

        <div className="graph-card">
          <h3>Academic background (Branch)</h3>
          <canvas ref={campusChartRef}></canvas>
        </div>

        <div className="graph-card">
          <h3>College Tier Diversity</h3>
          <canvas ref={companyChartRef}></canvas>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

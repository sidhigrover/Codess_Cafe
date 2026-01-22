import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ui/ForRecruiters.css";
import features from "../api/features.json";
import pipeline from "../api/pipeline.json";


const ForRecruiters = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div className="recruiter-section">
      {/* TOP SECTION */}
      <h1 className="main-title">
        A Hiring Solution Designed <br /> For Recruiters
      </h1>

      <h2 className="sub-title">What You Get with Codess Talent</h2>

      <div className="card-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index} data-aos="fade-up">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* PIPELINE SECTION */}
      <h2 className="pipeline-title">How Our Hiring Pipeline Works</h2>

      <div className="pipeline">
        {pipeline.map((item, index) => (
          <div
            className="pipeline-step"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="step-circle">{item.step}</div>

            <div className="step-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForRecruiters;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ui/ForRecruiters.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import {
  featureData,
  pipelineData,
  companiesData,
} from "../data/recruiters.js";

const ForRecruiters = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="recruiter-section">
        {/* ForRecruiters Heading */}
        <h1 className="main-title">
          A Hiring Solution Designed <br /> For Recruiters
        </h1>
        {/* ForRecruiters SubHeading */}
        <h2 className="sub-title">What You Get with Codess Talent</h2>

        <div className="card-grid">
          {featureData.map((item, index) => (
            <div className="feature-card" key={index} data-aos="fade-up">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pipeline Section */}
        <h2 className="pipeline-title">How Our Hiring Pipeline Works</h2>

        <div className="pipeline">
          {pipelineData.map((item, index) => (
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
      {/* Companies Section */}
      <div className="auto-scroll-section">
        <h1 className="auto-title">
          Our 2500+ Alumni <br /> <em>Are Everywhere</em>
        </h1>

        <Splide
          options={{
            type: "loop",
            drag: "free",
            arrows: false,
            pagination: false,
            autoWidth: true,
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {companiesData.map((company, index) => (
            <SplideSlide key={index}>
              <div className="company-oval">
                <img src={company.logo} alt={company.name} />
                <h3>{company.name}</h3>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="hire-below">
          <h3>Ready to hire exceptional talent?</h3>
          <p>
            Fill out the <span>Hire Talent</span> form below to get started. Our
            team will review your requirements and connect you with
            <strong> top women engineering talent</strong>.
          </p>
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCnNgK1AIyApA_n7k_QI4FbDHIx1gTpXnmAmHr7DzJvbBUaA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hire-btn">Hire Talent</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForRecruiters;